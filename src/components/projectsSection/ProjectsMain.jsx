import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Train information system",
    year: "December 2023",
    technologies:["HTML","CSS","JS","ReactJS"],
    align: "right",
    image: "/images/website-img-1.jpg",
    description:"Developed a React.js-based interface for real-time train information, including PNR status, seat availability, fare estimation, and schedules. Integrated external APIs to ensure accurate and up-to-date data, enhancing user experience and accessibility."
  },
  {
    name: "Student Database information system",
    year: "March 2024",
    technologies:["HTML","CSS","JS","Flask","SQL"],
    align: "left",
    image: "/images/website-img-2.webp",
    description:"Developed a student database management system using Flask and MySQL, optimizing data retrieval and management. Designed an intuitive UI with HTML, CSS, and JavaScript for seamless interaction. Implemented authentication, student enrollment, grade tracking, and report generation to enhance security and accessibility"
  },
  {
    name: "E-Learning platform",
    year: "May 2024",
    technologies:["HTML","CSS","JS","ReactJS","MongoDB","Express"],
    align: "right",
    image: "/images/website-img-3.jpg",
    description:"Developed an interactive online learning platform using the MERN stack, ensuring a seamless experience for students and educators. Implemented secure authentication, role-based access, and a dynamic dashboard for course management. Integrated a payment gateway and notifications to enhance engagement and usability."
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
