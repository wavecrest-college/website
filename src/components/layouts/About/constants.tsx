import React, { ReactNode } from "react";
import Profile from "./Profile";
import Milestone from "./Milestone/Milestone";
import OurTeam from "./OurTeam";
import { combinedConstant } from "config/constants/editable-copy/combined";

const imageAvatar = "/assets/imgs/image-avatar.png";

export type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

// const { data } = useCopyData();
// console.log("Data: ", data);

const { milestones } = {
  ...combinedConstant.aboutMilestone,
  // ...data.aboutMilestone,
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
    content: <Milestone milestones={milestones} />,
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

export const managements = [
  {
    image: "/assets/imgs/membersofthemanagement/rosana.png",
    name: "Rosana Forsuelo",
    post: "Provost",
  },
  {
    image: "/assets/imgs/membersofthemanagement/ifeoma.png",
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: "/assets/imgs/membersofthemanagement/veronica.png",
    name: "Veronica Esode",
    post: "Registrar",
  },
  {
    image: "/assets/imgs/membersofthemanagement/edith.png",
    name: "Edith Chukwu",
    post: "Bursar",
  },
];

export const boards = [
  {
    image: imageAvatar,
    name: "Edna Dafe",
    post: "Women's Board",
  },
  {
    image: "/assets/imgs/boardmembers/ward.jpg",
    name: "Trevor Ward",
    post: "W Hospitality Group",
  },
  {
    image: "/assets/imgs/boardmembers/moyo.jpg",
    name: "Moyo Ogunseinde",
    post: "Uraga / Radisson Blu",
  },
  {
    image: imageAvatar,
    name: "Peter Idoko",
    post: "Legend Hotels / Hilton",
  },
  {
    image: imageAvatar,
    name: "Chris Adedipe",
    post: "Independence Consultant",
  },
  {
    image: "/assets/imgs/boardmembers/gloria.png",
    name: "Gloria Osezua",
    post: "Executive Vice Chairman / Owel Farms",
  },
  {
    image: "/assets/imgs/boardmembers/dolapo.png",
    name: "Dolapo Afolami",
    post: "Member",
  },
];

export const staffs = [
  {
    title: "Academic Staff",
    others: [
      {
        image: "/assets/imgs/academicstaff/Juliet.jpeg",
        name: "Osuagwu Juliet",
        post: "Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/eboigbe.jpg",
        name: "Eboigbe Helen",
        post: "Ethics Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/chizurumoke.jpg",
        name: "Obasi Chizurumoke",
        post: "Lecturer / Workshop Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/eboagwu.jpeg",
        name: "Eboagwu Helen",
        post: "Facility Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/dorcas.jpg",
        name: "Adeyemo Dorcas",
        post: "SIWES Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/lilian.jpg",
        name: "Andy-Nwankwo Lilian",
        post: "Librarian",
      },
      {
        image: "/assets/imgs/academicstaff/Ojo.jpg",
        name: "Ojo Sayo",
        post: "Account Lecturer / CTH Trainer",
      },
      {
        image: "/assets/imgs/staffs/aduba.png",
        name: "Aduba Chineze",
        post: "French Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/samuel.jpg",
        name: "Samuel Asuquo",
        post: "Chef",
      },
      {
        image: "/assets/imgs/academicstaff/Inyangudo Gloria.jpg",
        name: "Iyangudo Gloria",
        post: "F&B Lecturer",
      },
      {
        image: "/assets/imgs/staffs/vivian.png",
        name: "Isichei Vivian",
        post: "Lecturer and Academic Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/Odinaka.jpg",
        name: "Ekwugha Odinaka",
        post: "Hospitality Management Lecturer",
      },
      {
        image: "/assets/imgs/staffs/arinze.png",
        name: "Uju Arinze",
        post: "Research Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/ezika.jpg",
        name: "Ezika Cecilia",
        post: "Faculty Secretary",
      },
      {
        image: "/assets/imgs/academicstaff/onaolapo.jpg",
        name: "Onaolapo Lizzy",
        post: "Food Service and Production Lecturer",
      },
    ],
  },

  {
    title: "Non-Academic Staff",
    others: [
      {
        image: "/assets/imgs/nonAcademicStaff/Nnena.png",
        name: "Okorie Nnenna",
        post: "Assistant Account Officer",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/precious.png",
        name: "Precious Ebung",
        post: "Front Desk Personnel",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/Baptista.jpg",
        name: "Baptista Uwandu",
        post: "Public Relations Officer",
      },
      {
        image: "/assets/imgs/staffs/goodness.png",
        name: "Oparachukwu Goodness",
        post: "Practical Assistant",
      },
      {
        image: "/assets/imgs/staffs/pius.png",
        name: "Nmereole Pius",
        post: "Security Officer",
      },

      {
        image: "/assets/imgs/nonAcademicStaff/reuben.jpg",
        name: "Reuben Francisca Ngozi",
        post: "Secretarial Assistant - Librarian",
      },
    ],
  },

  {
    title: "ODC",
    others: [
      {
        image: "/assets/imgs/staffs/thodora.png",
        name: "Ejiogu Theodora",
        post: "Pastry Chef",
      },
      {
        image: "/assets/imgs/staffs/james.png",
        name: "Idiong James",
        post: "Kitchen Assistant",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/agbo.jpg",
        name: "Agbor Mkpegara",
        post: "Kitchen Assistant",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/anna.jpg",
        name: "Owo Anna",
        post: "Catering Staff",
      },
      {
        image: "/assets/imgs/staffs/happiness.png",
        name: "Ukwachi Happiness",
        post: "Store Supervisor",
      },
    ],
  },
];
