import { ProgrammesData } from "components/layouts/Academics/Programmes/Programmes";
import { TrainingData } from "components/layouts/Academics/Trainings/Training";

const cehm = "/assets/imgs/cehm_flyer.jpeg";
const training1 = "/assets/imgs/trainingImages/training3.jpg";
const training2 = "/assets/imgs/training2.png";
const training3 = "/assets/imgs/training3.png";
const studyProgrammes1 = "/assets/imgs/studyprogrammes 2.png";
const studyProgrammes2 = "/assets/imgs/study-programme3.jpg";
const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";

const allTrainings: TrainingData[] = [
  {
    trainingsTitle: "Certificate in Hospitality Management",
    trainingsImage: cehm,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Designed to meet the professional development needs of supervisors and junior managers in the hospitality industry.",
    downloadBrochure: "Download CEHM Brochure",
    button: "APPLY NOW",
    fileUrl: "/documents/cehm.pdf",
  },
  {
    trainingsTitle: "Professional Certificate in Hospitality",
    trainingsImage: training1,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "PCH:  The Professional Certificate in Hospitality (PCH) is a 10 week programme designed for operators in the hospitality industry and related-sectors who seek to expand their existing knowledge and skill-base, acquire new skills, and enhance their understanding of key hospitality operations in Food and Beverage, Housekeeping and Facility Management and Front Office and A-C below and other general areas. Participants have the opportunity to apply practical learning to their operations and receive constructive feedback during the period of learning. A 2-month industry internship to acquire valuable hands-on experience is available for suitably qualified candidates. One can choose to do a single module.",
    downloadBrochure: "Download PCH Brochure",
    button: "REGISTER",
    fileUrl: "/documents/PCH Brochure.pdf",
  },
  {
    trainingsTitle: "Culinary Courses",
    trainingsImage: training2,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Are you new to the world of Professional cookery or are you on a quest to develop you existing skills? Our culinary programs are designed to provide a step by step introduction to the fundamentals of cookery in the following areas – National and International dishes, yeast products, cakes & icing, pastries, finger foods, mixed drinks and lots more. Through a combined delivery process of demonstrations and hands-on sessions, you will be exposed to a world of eclectic fusions designed to delight your family and friends. ",
    downloadBrochure: "Download Culinary Course Brochure",
    button: "APPLY NOW",
    fileUrl: "/documents/culinary_brochure.pdf",
  },
  {
    trainingsTitle: "National Skill Qualification",
    trainingsImage: training3,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Nigerian Skills Qualification Framework (NSQF) formerly National Vocational Qualification Framework (NVQF) is a system for the development, classification and recognition of skills, knowledge and competencies acquired by individuals, irrespective of where and how the training or skill was acquired. The system gives a clear statement of what the learner must know or be able to do whether the learning took place in a classroom, on-the-job, or less formally. The framework indicates the comparability of different qualifications and how one can progress from one level to another. The framework is the structure within which the National Skills Qualifications (NSQs) operate.",
    downloadBrochure: "Download NSQ Brochure",
    button: "REGISTER",
    fileUrl: "",
  },
];

const allProgrammes: ProgrammesData[] = [
  {
    programmeTitle: "Higher National Diploma (HND) in Hospitality Management",
    imageSrc: studyProgrammes1,
    captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
    captionTime: "2 Years | Full Time",
    captionButton: "Apply Now",
    description:
      "A two-year programme for ND hospitality graduates in preparation for NYSC.",
    fileUrl: "/documents/HIGHER NATIONAL DIPLOMA (HND) IN HOSP (1).pdf",
    href: "/HNDProgramme",
  },
  {
    programmeTitle: "National Diploma (ND) in Hospitality Management",
    imageSrc: studyProgrammes3,
    captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
    height: "450px",
    objectPosition: "center 25%",

    captionTime: "2 Years | Part Time",
    captionButton: "Apply Now",
    description: "A two-year programme for hospitality career aspirants",
    fileUrl: "/documents/NATIONAL DIPLOMA (ND) IN HOSP (2).pdf",
    href: "/NDProgramme",
  },
  {
    programmeTitle: "Certificate Course In Hospitality Operations",
    imageSrc: studyProgrammes2,
    captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
    height: "500px",
    objectPosition: "center 2%",
    captionTime: "1 Year | Full Time",
    captionButton: "Apply Now",
    description:
      "A one-year acceleretated certificate programme for young school leavers designed to develop knowledge and skills in food and beverage, housekeeping and reception operations.",
    fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    href: "/CertificateCourses",
  },
];

export const trainings = {
  allTrainings,
};

export const programmes = {
  allProgrammes,
};
