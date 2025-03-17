import React from "react";

function Education() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-10 bg-primary relative z-30">
      <div
        className="absolute inset-0 bg-contain z-0"
        style={{
          backgroundImage: "url(/pattern.png)",
          opacity: 0.1,
        }}
      />
      <div className="container mx-auto relative !text-black z-10 font-bai-jamjuree">
        <div className="flex  justify-between items-center mb-12">
          <h2 className="font-bai-jamjuree text-3xl md:text-4xl capitalize text-white font-semibold">
            Education and recent Certifications
          </h2>
        </div>
        <section className="grid sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-6 lg:max-w-lg">
            <h4 className="font-semibold text-3xl text-white">
              Recent Certifications
            </h4>
            <hr className="bg-white w-2/3" />
            <div className="flex flex-col">
              <p className="mb-2 text-xl text-white font-semibold">
                London School of Business Administration: Brand Management
              </p>
              <span className="text-lightGray/80">-London, UK</span>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 text-xl text-white font-semibold">
                London School of Business Administration: Digital Marketing
              </p>
              <span className="text-lightGray/80">-London, UK</span>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 text-xl text-white font-semibold">
                Agillant Group: Agile Project Management
              </p>
              <span className="text-lightGray/80">-North Carolina, USA</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:max-w-lg">
            <h4 className="font-semibold text-3xl text-white">Education</h4>
            <hr className="bg-white w-1/3" />
            <div className="flex flex-col">
              <span className="text-lightGray/80">2024-2025</span>
              <p className="mb-2 text-xl text-white font-semibold">
              Rome Business School | MSc. Marketing And Sales 
              </p>
              <span className="text-lightGray/80">-Rome, Italy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lightGray/80">2016-2020</span>
              <p className="mb-2 text-xl text-white font-semibold">
                Ahmadu Bello University | Bachelor of Science (BSc)
              </p>
              <span className="text-lightGray/80">-Zaria, Nigeria</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lightGray/80">2009-2015</span>
              <p className="mb-2 text-xl text-white font-semibold">
                Yisheng Schools | WAEC/NECO
              </p>
              <span className="text-lightGray/80">-Kaduna, Nigeria</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Education;
