
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";


const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Java Script",
    icon: IoLogoJavascript,
  },
  {
    skill:"C++",
    icon: SiCplusplus
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill:"SQL",
    icon: BsFiletypeSql
  },
  {
    skill: "ReactJS",
    icon: FaReact
  },
  {
    skill:"NodeJS",
    icon: FaNodeJs
  },
  {
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    skill:"Mongo DB",
    icon: SiMongodb
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  }
];

const AllSkills = () => {
  return (
    <div id="skills" className="relative z-0 border-t my-12 lg:my-24 border-[#25213b] w-full">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-transparent"></span>
          <span className="text-6xl text-cyan w-fit p-2 px-5 ">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-transparent"></span>
        </div>
      </div>

      <div className="hidden md:block w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, id) => (
            <div 
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] shadow-none shadow-gray-50 group-hover:border-orange-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    {<skill.icon className="w-8 h-8 text-orange-500" />}
                  </div>
                  <p className="text-white text-sm sm:text-lg break-all">
                    {skill.skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Mobile View - Grid Layout */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:hidden px-4 sm:px-6 my-12">
        {skills.map((skill, id) => (
          <div 
            className="flex flex-col items-center justify-center break-words  overflow-hidden transition-all duration-500 rounded-lg group relative hover:scale-[1.05] cursor-pointer"
            key={id}
          >
            <div className="h-full w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] shadow-none shadow-gray-50 group-hover:border-orange-500 transition-all duration-500">
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                <div className="h-8 sm:h-10">
                  {<skill.icon className="w-8 h-8 text-orange-500" />}
                </div>
                <p className="text-white text-sm sm:text-lg ">
                  {skill.skill}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;