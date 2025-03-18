"use client";
import { Button } from "./ui/button";

interface AchievementsProps {
  setActivePage: (page: string) => void;
}

function Achievements({ setActivePage }: AchievementsProps) {
  const achievements = [
    {
      title: "Community Director",
      role: `Mentoring about 700 young people across 3 universities [Babcok 
            University, University of Ibadan and Obafemi Awolowo University, Ife] in Nigeria on Leadership, Faith, 
            entrepreneurship.`,
      organization: "Dream Center Trybe",
      year: "2025",
      location: "nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Training Facilitator",
      role: `Trained over 2,000 people in 22 states across Nigeria in 6 weeks on 
            Digital Marketing and advertising.`,
      organization: "American Spaces Nigeria",
      year: "2023",
      location: "nigeria",
    },
  ];

  return (
    <section className="mx-auto container px-4 lg:px-10 lg:py-12 xl:py-20 xl: flex lg:flex-row flex-col xl:gap-10 items-start justify-center">
      <div className="flex flex-col justify-between items-center sm:items-start sm:mb-12 py-6 gap-8 container lg:max-w-sm">
        <h2 className="font-bai-jamjuree font-semibold text-3xl md:text-4xl">
          Some Of My Projects
        </h2>
        <Button variant="outline" onClick={() => setActivePage("about")}>
          VIEW ALL
        </Button>
      </div>
      <div className="flex flex-col container">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`${achievement.className} flex flex-col sm:flex-row gap-8 items-center sm:items-start py-3 sm:p-6 border-b- hover:bg-gray-50`}
          >
            <span className="flex-shrink-0 w-10 h-12 flex items-center justify-center bg-primary text-white rounded-">
              {index + 1}
            </span>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="lg:max-w-[340px] text-center sm:text-start max-sm:border-b max-sm:pb-3">
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

              <div className="flex flex-col items-center sm:items-start gap-3 sm:border-l-[1.5px] sm:pl-8 border-secondary-2">
                <span className="uppercase tracking-wider">
                  {achievement.location}
                </span>
                <span className="text-gray-500 pb-4 max-sm:border-b-[1.5px] max-sm:w-fit max-sm:px-10">
                  {achievement.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
