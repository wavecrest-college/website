import React, { ReactNode } from "react";
import Profile from "./Profile";
import Milestone from "./Milestone/Milestone";
import OurTeam from "./OurTeam";

export type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

export const menuLinks: MenuLink[] = [
  {
    id: "profile",
    href: "/about/profile",
    linkTitle: "PROFILE",
    content: <Profile />,
  },
  {
    id: "milestone",
    href: "/about/milestone",
    linkTitle: "MILESTONE",
    content: <Milestone />,
  },
  {
    id: "ourTeam",
    href: "/about/ourTeam",
    linkTitle: "OUR TEAM",
    content: <OurTeam />,
  },
];

export const ourStands = [
  {
    heading: "Mission",
    text: "To train women to be competent professionals able to meet the challenges of the fast developing world of Hospitality; and to create awareness of the impact of Hospitality service on the quality of life of the individual, the family and ultimately on the development of society.",
  },
  {
    heading: "Vision",
    text: "To provide both technical competence and ethical integrity in order to ensure in-depth Hospitality and Life Skills Training that guarantees the Girl Child 3Es - Education, Employment and Economic independence",
  },
  {
    heading: "Core Values",
    text: `S - Spirit of Service
      P - Personal Responsibility
      I - Integrity
      R - Respect for Others
      I - Industriousness
      T - Teamwork`,
  },
];
