import React, { memo } from "react";

import "../../../styles/main.css";
import NavAnchor from "./NavAnchor";
export interface HeaderButtonTypes {
  href: string;
  title: string;
  className?: string;
}
const headerButtons: HeaderButtonTypes[] = [
  {
    href: "/",
    title: "Home",
    className: "current"
  },
  {
    href: "/#openingTimeSection", // Link to opening times section
    title: "Öffnungszeiten", // Changed title to Öffnungszeiten
    className: "current"
  },
  {
    href: "/termin",
    title: "Termin vereinbaren",
    className: "current"
  },
  {
    href: "/category",
    title: "Services",
    className: "current"
  },
];

const HeaderItems: React.FC = () => {

  const headerItems = () => {
    return headerButtons.map((item: HeaderButtonTypes, index: number) => {
      return (
        <li className={"navListItem"} key={index}>
          <NavAnchor customClass={"blackColor"} key={index} title={item.title} href={item.href} />
        </li>
      )
    })
  }

  return (
    <ul className="headerButtonUl">
      {
        headerItems()
      }
    </ul>
  );
}

export default memo(HeaderItems)