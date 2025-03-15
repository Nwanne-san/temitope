import React from "react";
import { Button } from "../ui/button";

function RecentProjects() {
  const projects = [
    {
      title: "Community Director",
      role: `Mentoring about 700 young people across 3 universities [Babcok 
            University, University of Ibadan and Obafemi Awolowo University, Ife] in Nigeria  on Leadership, Faith, 
            entrepreneurship.  `,
      organization: "Dream Center Trybe",
      year: "2025",
      location: "nigeria",
      className: "border-b border-black",
    },
    {
      title: "Training Facilitator",
      role: `Trained over 2,000 people in 22 states across Nigeria in 6 weeks on 
            Digital Marketing and advertising.    `,
      organization: "American Spaces Nigeria",
      year: "2023",
      location: "nigeria",
      className: "border-b border-black",
    },
    {
      title: "Community Director",
      role: ` Mentoring about 1,000 young people across the world on Leadership, 
Branding, Entrepreneurship.   `,
      organization: "Maime University",
      year: "2023",
      location: "abuja, nigeria",
      className: "border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Executed event branding and communications  `,
      organization: "Marketplace Stakeholders Conference Africa",
      year: "2024",
      location: "abuja, nigeria",
      className: "border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Executed event branding and communications`,
      organization: "Necci PR Roundtable",
      year: "2024",
      location: "lagos, nigeria",
      className: "border-b border-black",
    },
  ];

  return (
    <section className=" mx-auto container px-4 lg:px-10 py-12 md:py-20 flex gap-10 items-start justify-center">
      <div className="flex flex-col justify-between gap-8 items-start py-6 container w-1/3">
        <h2 className="font-bai-jamjuree text-3xl md:text-4xl">
          Some Of My projects
        </h2>
        <Button variant="outline" href="/achievements">
          VIEW ALL
        </Button>
      </div>
      <div className="flex flex-col container w-2/3">
        {projects.map((achievement, index) => (
          <div
            key={index}
            className={`${achievement.className} flex gap-8 items-start p-6  border-b- hover:bg-gray-50`}
          >
            <span className="flex-shrink-0 w-10 h-12 flex items-center justify-center bg-primary text-white rounded-">
              {index + 1}
            </span>
            <div className="flex gap-10">
              <div className="xl:max-w-[340px] w-full max-w-[320px]">
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

              <div className="flex flex-col gap-3 border-l-[1.5px] pl-8 border-secondary-2">
                <span className="uppercase tracking-wider ">{achievement.location}</span>
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
