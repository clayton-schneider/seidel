import { useState } from "react";
import Hamburger from "./Hamburger";
import PrimaryBtn from "@components/buttons/PrimaryBtn";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "absolute top-[144px] z-50 flex w-full flex-col items-start gap-6 bg-white py-5 px-4 text-lg transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen
            ? "left-0 z-40 !text-black shadow shadow-neutral-300"
            : "-left-full")
        }
      >
        {links.map((link, idx) => {
          if (link.sublinks) {
            return (
              <li key={idx} className="relative group">
                <a href={link.link}>
                  <button>{link.linkText}</button>
                </a>
                <ul className="lg:absolute lg:left-1/2 lg:hidden pt-1 pl-5 lg:pl-0 lg:group-hover:block w-full lg:w-[200px] shadow text-center lg:-translate-x-1/2  text-black z-50">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="first:rounded-t last:rounded-b lg:bg-white lg:hover:bg-primary hover:text-white"
                    >
                      <a className=" py-2 px-4 block" href={sublink.link}>
                        {sublink.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a href={link.link}>{link.linkText}</a>
              </li>
            );
          }
        })}
        <PrimaryBtn
          to="/request-a-quote"
          className="!block w-full text-center lg:text-left lg:w-auto"
        >
          Request A Quote
        </PrimaryBtn>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
