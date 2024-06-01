import {
  TrainingType,
  TrainingData,
} from "components/layouts/Academics/Trainings/Training";
import { EditableUIConfig } from "../types";
import {
  Programme,
  ProgrammesData,
} from "components/layouts/Academics/Programmes/Programmes";

export const training: EditableUIConfig<TrainingType, TrainingData> = {
  name: "trainings",
  title: "Edit Trainings",
  groupKey: "trainingsTitle",
  emptyFormInitial: {
    trainingsImage: "/assets/imgs/empty-img.jpeg",
    button: "",
    downloadBrochure: "",
    fileUrl: "",
  },
  groupItems: [
    {
      name: "trainingsTitle",
      label: "Title",
      type: "text",
      placeholder: "Enter Training Title",
    },
    { name: "trainingsImage", label: "Image", type: "image" },
    {
      name: "trainingsText",
      label: "Description",
      type: "textarea",
      placeholder: "Enter Training Description",
    },
    {
      name: "downloadBrochure",
      label: "Download Brochure Text",
      type: "text",
      placeholder: "Enter CTA Text for Downloading Brochure",
    },
    {
      name: "fileUrl",
      label: "Upload Brochure(*png, *jpg, *jpeg formats only)",
      type: "image",
    },
    {
      name: "button",
      label: "CTA Text",
      type: "text",
      placeholder: "Enter CTA Button Text",
    },
  ],
};
export const programme: EditableUIConfig<Programme, ProgrammesData> = {
  name: "programmes",
  title: "Edit Programmes",
  groupKey: "programmeTitle",
  emptyFormInitial: {
    imageSrc: "/assets/imgs/empty-img.jpeg",
    programmeTitle: "",
    captionTime: "",
    captionButton: "",
    captionHeading: "",
    fileUrl: "",
    description: "",
    href: "",
  },
  groupItems: [
    {
      name: "programmeTitle",
      label: "Title",
      type: "text",
      placeholder: "Enter Programme Title",
    },
    {
      name: "imageSrc",
      label: "Backround Image",
      type: "image",
    },
    {
      name: "captionHeading",
      label: "Caption Heading",
      type: "text",
      placeholder: "Enter Caption Heading",
    },
    {
      name: "captionTime",
      label: "Programme Duration",
      type: "text",
      placeholder: "Enter Programme Duration",
    },
    {
      name: "captionButton",
      label: "Button Text",
      type: "text",
      placeholder: "Enter Button Text",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter Programme Description",
    },
    {
      name: "fileUrl",
      label: "Upload Brochure(*png, *jpg, *jpeg formats only)",
      type: "image",
    },
  ],
};

export const academicsConfig = {
  programmes: {
    programme,
  },
  trainings: { training },
};
