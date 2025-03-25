import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="nitishkumar02064395@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9430957298" Image={FiPhone} />
      <SingleInfo text="Jaipur, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
