import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, description, technologies }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`w-full px-4 sm:px-8 md:px-12 flex sm:flex-col-reverse items-center gap-8  
        ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
        items-center gap-8 justify-center`}
    >
      {/* Project Details */}
      <div className="w-full md:w-1/2">
        <div className="border-2 border-dashed border-gray-300 rounded-xl bg-transparent backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 border-b-2 border-dashed pb-2">{year}</p>

          <div className="bg-gray-50/50 p-4 rounded-lg overflow-auto mt-4">
            <pre className="text-gray-700 whitespace-pre-wrap break-words">
              <code>
                {`const project = {
name: "${name}",
technologies: [${technologies}],
Description: "${description}"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-white relative transform transition-all duration-500 hover:scale-105">
        <div className="absolute inset-0 bg-cyan opacity-50 hover:opacity-0 transition-all duration-500"></div>
        <img src={image} alt="website image" className="w-full h-auto object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
