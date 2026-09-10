import { ImageResponse } from "next/og";

export const alt = "Evolve — The New Book by Temitope Ruth Jacob";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF6F1",
          padding: "50px 70px",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Background decorative subtle border */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid rgba(76, 76, 76, 0.12)",
          }}
        />

        {/* Corner marks */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 10,
            height: 1,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 1,
            height: 10,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 10,
            height: 1,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 1,
            height: 10,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 10,
            height: 1,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 1,
            height: 10,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 10,
            height: 1,
            backgroundColor: "#FF0066",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 1,
            height: 10,
            backgroundColor: "#FF0066",
          }}
        />

        {/* Left Column: Text Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 470,
            width: 610,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Kicker badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#FF0066",
                  fontFamily: "sans-serif",
                }}
              >
                The New Book · Waitlist Open
              </span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 90,
                fontWeight: 700,
                lineHeight: 1,
                color: "#1A1614",
                marginBottom: 20,
                display: "flex",
              }}
            >
              Evolve
              <span style={{ color: "#FF0066" }}>.</span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.35,
                color: "#4C4C4C",
                maxWidth: 580,
                marginBottom: 18,
              }}
            >
              A personal branding book for the second half of your career.
            </div>

            <div
              style={{
                fontSize: 16,
                color: "#797979",
                fontFamily: "sans-serif",
                lineHeight: 1.5,
                maxWidth: 540,
              }}
            >
              Field guide for founders, executives and creators ready to shift
              from doing the work to leading the room.
            </div>
          </div>

          {/* Bottom author info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 20,
              borderTop: "1px solid rgba(76, 76, 76, 0.15)",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 0, 102, 0.12)",
                border: "1px solid rgba(255, 0, 102, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FF0066",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              TRJ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1A1614",
                }}
              >
                Temitope Ruth Jacob
              </span>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#FF0066",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                Brand Strategist · Speaker · Author
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Book Cover Mockup */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 420,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 330,
              height: 440,
              backgroundColor: "#F1EAD9",
              borderRadius: 6,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              padding: "28px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Inset border line */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                right: 14,
                bottom: 14,
                border: "1px solid rgba(255, 0, 102, 0.25)",
              }}
            />

            {/* Corner marks on book */}
            <div
              style={{
                position: "absolute",
                top: 11,
                left: 11,
                width: 6,
                height: 1,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 11,
                left: 11,
                width: 1,
                height: 6,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 11,
                right: 11,
                width: 6,
                height: 1,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 11,
                right: 11,
                width: 1,
                height: 6,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 11,
                left: 11,
                width: 6,
                height: 1,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 11,
                left: 11,
                width: 1,
                height: 6,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 11,
                right: 11,
                width: 6,
                height: 1,
                backgroundColor: "#FF0066",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 11,
                right: 11,
                width: 1,
                height: 6,
                backgroundColor: "#FF0066",
              }}
            />

            {/* SVG concentric arcs in background of book */}
            <svg
              viewBox="0 0 330 440"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 330,
                height: 440,
              }}
            >
              <g
                transform="translate(0, 440)"
                stroke="#FF0066"
                fill="none"
              >
                <circle r="70" strokeWidth="0.8" opacity="0.3" />
                <circle r="130" strokeWidth="0.8" opacity="0.22" />
                <circle r="190" strokeWidth="0.8" opacity="0.16" />
                <circle r="250" strokeWidth="0.8" opacity="0.1" />
                <circle r="310" strokeWidth="0.8" opacity="0.07" />
              </g>
              <g
                transform="translate(330, 0)"
                stroke="#FF0066"
                fill="none"
              >
                <circle r="60" strokeWidth="0.8" opacity="0.22" />
                <circle r="110" strokeWidth="0.8" opacity="0.15" />
                <circle r="160" strokeWidth="0.8" opacity="0.08" />
              </g>
            </svg>

            {/* Top header of book */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#1A1614",
                    fontWeight: 700,
                  }}
                >
                  No. 01
                </span>
                <span
                  style={{
                    fontSize: 8,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(26, 22, 20, 0.6)",
                    fontFamily: "sans-serif",
                    marginTop: 2,
                  }}
                >
                  First Edition
                </span>
              </div>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  border: "1px solid #FF0066",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  color: "#FF0066",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  backgroundColor: "#F1EAD9",
                }}
              >
                TRJ
              </div>
            </div>

            {/* Center title of book */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(26, 22, 20, 0.65)",
                  fontFamily: "sans-serif",
                  marginBottom: 8,
                }}
              >
                A personal branding book
              </span>
              <div
                style={{
                  fontSize: 60,
                  fontWeight: 700,
                  color: "#1A1614",
                  lineHeight: 0.95,
                  display: "flex",
                }}
              >
                Evolve
                <span style={{ color: "#FF0066" }}>.</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 14,
                }}
              >
                <div
                  style={{ width: 16, height: 1, backgroundColor: "#FF0066" }}
                />
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#FF0066",
                  }}
                />
                <div
                  style={{ width: 16, height: 1, backgroundColor: "#FF0066" }}
                />
              </div>
            </div>

            {/* Bottom footer of book */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#1A1614",
                  fontWeight: 700,
                }}
              >
                Temitope Ruth Jacob
              </span>
              <span
                style={{
                  fontSize: 8,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(26, 22, 20, 0.5)",
                  fontFamily: "sans-serif",
                  marginTop: 3,
                }}
              >
                Brand Xperience
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
