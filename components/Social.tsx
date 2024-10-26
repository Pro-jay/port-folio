import { Icon } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { Icon: <FaGithub />, path: "" },
  { Icon: <FaLinkedin />, path: "" },
  { Icon: <FaYoutube />, path: "" },
  { Icon: <FaTwitter />, path: "" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.Icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
