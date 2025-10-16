// pages/index.tsx
"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import {
  Chart,
  ChartConfiguration,
  registerables
} from "chart.js";
import './model.css'

// ✅ Register all chart types/elements
Chart.register(...registerables);

export default function Dashboard() {
  const mainChartRef = useRef<HTMLCanvasElement>(null);
  const heatmapRef = useRef<HTMLCanvasElement>(null);
  const mainChartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    /* ---------- Line Chart Setup ---------- */
    if (mainChartRef.current) {
      const ctx = mainChartRef.current.getContext("2d");
      if (!ctx) return;

      // Destroy existing chart if already created
      if (mainChartInstance.current) {
        mainChartInstance.current.destroy();
      }

      const labels = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];
      const generation = [220,300,260,310,270,320,290,310];
      const demand     = [180,240,230,280,250,290,260,285];
      const frequency  = [49.9,49.85,49.95,50.02,49.98,49.9,49.88,49.97];

      const createGradient = (ctx: CanvasRenderingContext2D, color: string, alpha: number) => {
        const g = ctx.createLinearGradient(0,0,0,300);
        if(color.includes("#34d399")){
          g.addColorStop(0, `rgba(16,185,129,${alpha})`); 
          g.addColorStop(1, "rgba(6,182,212,0)");
        } else {
          g.addColorStop(0, `rgba(96,165,250,${alpha})`);
          g.addColorStop(1,"rgba(124,58,237,0)");
        }
        return g;
      };

      const config: ChartConfiguration = {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label:"Generation (MW)",
              data:generation,
              fill:true,
              tension:0.36,
              borderWidth:2,
              backgroundColor:createGradient(ctx,"#34d399",0.12),
              borderColor:"#059669",
              pointRadius:2,
              yAxisID:"y"
            },
            {
              label:"Demand (MW)",
              data:demand,
              fill:true,
              tension:0.36,
              borderWidth:2,
              backgroundColor:createGradient(ctx,"#60a5fa",0.12),
              borderColor:"#2563eb",
              pointRadius:2,
              yAxisID:"y"
            },
            {
              label:"Frequency (Hz)",
              data:frequency,
              type:"line",
              fill:false,
              tension:0.2,
              borderColor:"#374151",
              pointRadius:3,
              borderDash:[4,4],
              yAxisID:"yFreq"
            }
          ]
        },
        options: {
          responsive:true,
          maintainAspectRatio:false,
          interaction:{mode:"index",intersect:false},
          plugins:{ legend:{ position:"top" } },
          scales:{
            y: {
              type:"linear",
              position:"left",
              title:{display:true,text:"MW"}
            },
            yFreq: {
              type:"linear",
              position:"right",
              min:49.5,
              max:50.5,
              grid:{drawOnChartArea:false},
              title:{display:true,text:"Hz"}
            }
          }
        }
      };

      mainChartInstance.current = new Chart(ctx, config);
    }

    /* ---------- Heatmap ---------- */
    if (heatmapRef.current) {
      const ctx = heatmapRef.current.getContext("2d");
      if (!ctx) return;

      const feeders = [
        {id:"FDR-01", region:"North", loss:18.2},
        {id:"FDR-02", region:"East", loss:14.5},
        {id:"FDR-03", region:"South", loss:10.1},
        {id:"FDR-04", region:"West", loss:7.9},
        {id:"FDR-05", region:"North", loss:6.2},
        {id:"FDR-06", region:"East", loss:12.8},
        {id:"FDR-07", region:"South", loss:20.4},
        {id:"FDR-08", region:"West", loss:4.5},
        {id:"FDR-09", region:"Central", loss:9.5},
        {id:"FDR-10", region:"Central", loss:11.3}
      ];

      const w = heatmapRef.current.width;
      const h = heatmapRef.current.height;
      const cols = 10, cellW = Math.floor(w/cols), cellH = h;

      const lossColor = (loss:number) =>
        loss > 15 ? "#ef4444" : loss > 8 ? "#f59e0b" : "#10b981";

      feeders.forEach((f,i)=>{
        const x = i*cellW, y=0;
        ctx.fillStyle = lossColor(f.loss);
        ctx.fillRect(x+4,6,cellW-8,cellH-12);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.font = "10px Inter, Arial";
        ctx.textAlign = "center";
        ctx.fillText(f.id, x + cellW/2, h - 6);
      });
    }

    return () => {
      // Cleanup chart on unmount
      mainChartInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>GridIQ — Colorful Dashboard Prototype</title>
      </Head>
      <div className="wrap">
        <header>
          <div className="brand">
            <div className="brand-mark">GQ</div>
            <h1>GridIQ <small>Dashboard</small></h1>
          </div>
        </header>

        <div className="layout">
          <main className="main">
            <h2>Real-Time Grid Performance</h2>
            <div style={{height:"180px"}}>
              <canvas ref={mainChartRef}></canvas>
            </div>
          </main>

          <aside className="sidebar">
            <h3>Feeder Loss Heatmap</h3>
            <canvas ref={heatmapRef} width={220} height={80}></canvas>
          </aside>
        </div>
      </div>
    </>
  );
}
