import { Link } from "react-scroll";
import { LuDownload } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-lg">
        My name is Nitish Kumar. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world.
      </p>
      <div className="flex gap-6">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>
        <a
          href="/resume.pdf" // Points to the file in the public folder
          download="Resume.pdf" // Forces download
          className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center"
        >
          <div className="flex gap-4 text-white hover:text-cyan transition-all duration-500">
            <p>Download resume</p>
            <LuDownload className="h-[100%] pt-1" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
