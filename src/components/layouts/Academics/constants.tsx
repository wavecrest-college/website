import React, { ReactNode } from "react";
import Training from "./Trainings/Training";
import Intership from "./Internship";
import NYSC from "./NYSC";
import Programmes from "./Programmes/Programmes";

export type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

export const menuLinks: MenuLink[] = [
  {
    id: "programmes",
    href: "/academics/programmes",
    linkTitle: "PROGRAMMES",
    content: <Programmes />,
  },
  {
    id: "training",
    href: "/academics/training",
    linkTitle: "TRAINING",
    content: <Training />,
  },
  {
    id: "internship",
    href: "/academics/internship",
    linkTitle: "INTERNSHIP",
    content: <Intership />,
  },
  {
    id: "nysc",
    href: "/academics/nysc",
    linkTitle: "NYSC",
    content: <NYSC />,
  },
];

export const forms = [
  {
    fieldType: "text",
    name: "user_name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "text",
    name: "user_address",
    placeHolder: "Address",
    variant: "filled",
  },
  {
    fieldType: "email",
    name: "user_email",
    placeHolder: "Email",
    variant: "filled",
  },
  {
    fieldType: "tel",
    name: "user_number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
  {
    fieldType: "text",
    name: "user_class",
    placeHolder: "Class",
    variant: "filled",
  },
];

export const navigateTo = [
  {
    name: "PROGRAMMES",
    href: "/academics/programmes",
  },
  {
    name: "TRAINING",
    href: "/academics/training",
  },
  {
    name: "INTERNSHIP",
    href: "/academics/internship",
  },
];

export const internshipCompanies = [
  "Marriot Group",
  "Hilton Group",
  "Eden Heights Apartments",
  "Kennan Lodge",
  "Legend Hotels Lagos Airport",
  "Radisson Blu Hotel",
  "The Wheatbaker Lagos",
  "Lagos Business School",
  "Southern Sun Ikoyi",
  "Eko Hotel and Suites",
  "Sugar Creations",
  "Ibis Hotel",
  "Four Points by Sheraton",
  "Ikoyi Club 1938",
  "China - Wok Restaurant & Grill",
  "In4u cakes",
  "Sun Heaven Hotels and Resort",
  "Lagos Continental Hotel",
  "Amber Residence",
  "Araba’s Homemade",
  "Cakes ‘n’ Candy",
  "Elion House Hotel",
  "Fahrenheit Loft Hotel",
  "Lounge 38",
  "Pan African Catering - Servair",
  "Simply Sweet Confectionery",
];
