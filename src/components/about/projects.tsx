import React from "react";
import { Button } from "../ui/button";

function RecentProjects() {
  const projects = [
    {
      title: "Branding & Communications Strategist",
      role: `Creating and implementing Creative branding & communication Strategy for the UPGRADE MARKETING CONFERNCE 2025 themed; Marketing is not a Department. `,
      organization: "Yantic Business Academy",
      year: "2025",
      location: "lagos, nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Community Director",
      role: `Mentoring about 700 young people across 3 universities [Babcok 
            University, University of Ibadan and Obafemi Awolowo University, Ife] in Nigeria  on Leadership, Faith, 
            entrepreneurship.  `,
      organization: "Dream Center Trybe",
      year: "2025",
      location: "nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Training Facilitator",
      role: `Trained over 2,000 people in 22 states across Nigeria in 6 weeks on 
            Digital Marketing and advertising.    `,
      organization: "American Spaces Nigeria",
      year: "2023",
      location: "nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Community Director",
      role: ` Mentoring about 1,000 young people across the world on Leadership, 
                Branding, Entrepreneurship.   `,
      organization: "Maime University",
      year: "2023",
      location: "abuja, nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Created and executed creative branding and communications 
            strategy for the Maiden Edition of the Marketplace Stakeholders 
            Africa Conference, with the Theme ; Making Africa Work Through Production Intelligence. 
            `,
      organization: "Marketplace Stakeholders Conference Africa",
      year: "2024",
      location: "abuja, nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Created and executed creative branding and communications strategy for the 24th edition of the
       NECCI PR ROUNDTABLE with the Theme: Women In Technology; Breaking Barriers. `,
      organization: "Necci PR Roundtable",
      year: "2024",
      location: "lagos, nigeria",
      className: "sm:border-b border-black",
    },
  ];

  return (
    <section className=" mx-auto container px-4 lg:px-10 py-12 md:py-20 flex flex-col sm:flex-row gap-10 items-start justify-center">
      <div className="flex flex-col justify-between gap-8 items-center sm:items-start py-6 container sm:w-1/3">
        <h2 className="font-bai-jamjuree text-3xl text-center sm:text-start md:text-4xl">
          Some Of My projects
        </h2>
      </div>
      <div className="flex flex-col container sm:w-2/3">
        {projects.map((achievement, index) => (
          <div
            key={index}
            className={`${achievement.className} flex flex-col sm:flex-row gap-8 items-center sm:items-start pb-5 sm:pb-0 sm:p-6  border-b- hover:bg-gray-50`}
          >
            <span className="flex-shrink-0 w-10 h-12 flex items-center justify-center bg-primary text-white rounded-">
              {index + 1}
            </span>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center text-center sm:text-start">
              <div className="xl:max-w-[340px] w-full max-w-[320px] max-sm:pb-4 max-sm:border-b border-secondary">
                <h3 className="font-bai-jamjuree font-semibold text-secondary text-xl mb-2">
                  {achievement.title}
                </h3>
                <p className="text-secondary-2 mb-2 text-sm font-semibold">
                  {achievement.organization}
                </p>
                <p className="text-secondary-2 mb-2 text-sm font-semibold">
                  {achievement.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:border-l-[1.5px] pb-5 max-sm:border-b sm:pl-8 border-secondary-2">
                <span className="uppercase tracking-wider ">
                  {achievement.location}
                </span>
                <span className="text-gray-500">{achievement.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
