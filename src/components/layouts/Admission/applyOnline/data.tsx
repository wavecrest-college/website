export const forms = [
  {
    fieldType: "name",
    name: "user_name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "number",
    name: "user_number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
  {
    fieldType: "email",
    name: "user_email",
    placeHolder: "Email",
    variant: "filled",
  },
];

export type Programme = {
  course: string;
  price?: string;
  paymentLink: string;
};
export const programmes: Programme[] = [
  {
    course: "HND in Hospitality Management",
    price: "The applicationn fee for this course is: #2,500",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "ND in Hospitality Management",
    price: "The applicationn fee for this course is: #2,000",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "Certificate in Hospitality Operations",
    price: "The applicationn fee for this course is: #2,000",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "Confederation of Tourism and Hospitality",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "Professional Certificate in Hospitality",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "Culinary Courses",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
  {
    course: "National Skill Qualification",
    paymentLink: "https://tinyurl.com/WCH-Application-Form-24-25",
  },
];
