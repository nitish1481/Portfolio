import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/nitish-kumar-b5611428b" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/nitish1481" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/nitish_0206?" Icon={FaInstagram} />
      <SingleContactSocial link="mailto:nitishkumar02064395@gmail.com" Icon={CiMail} />
    </div>
  );
};

export default ContactSocial;
