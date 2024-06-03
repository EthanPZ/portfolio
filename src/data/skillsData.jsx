import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  {
    skillName: "HTML",
    icon: <FaHtml5 />,
  },

  {
    skillName: "CSS",
    icon: <FaCss3Alt />,
  },

  {
    skillName: "JavaScript",
    icon: <IoLogoJavascript />,
  },

  {
    skillName: "React",
    icon: <FaReact />,
  },

  {
    skillName: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },

  {
    skillName: "Web Design",
    icon: <MdOutlineDesignServices />,
  },

  {
    skillName: "Figma",
    icon: <FaFigma />,
  },
];

export default skillsData;
