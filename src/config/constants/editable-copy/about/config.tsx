import { EditableUIConfig } from "../types";
import { OurStoryProps } from "components/layouts/About/Profile/OurStory";
import { OurPhilosophyProps } from "components/layouts/About/Profile/OurPhilosophy";
import {
  AwardClout,
  OurCloutProps,
  RecognitionClout,
} from "components/layouts/About/Profile/OurClout";
import {
  GalleryImg,
  GalleryProp,
} from "components/layouts/About/Profile/Gallery";
import {
  MilestoneData,
  Milestones,
} from "components/layouts/About/Milestone/Milestone";
import {
  ManagementType,
  Managements,
} from "components/layouts/About/OurTeam/Management";
import {
  BoardMember,
  BoardMembers,
} from "components/layouts/About/OurTeam/Board";
import { AllStaffs, StaffType } from "components/layouts/About/OurTeam/Staff";

const ourStory: EditableUIConfig<OurStoryProps> = {
  name: "ourStory",
  title: "Edit Our Story",
  fields: [
    {
      name: "heading",
      label: "Story Heading",
      type: "text",
    },
    {
      name: "subHeading",
      label: "Sub Heading",
      type: "text",
    },
    {
      name: "body",
      label: "Edit Body",
      type: "textarea",
    },
  ],
};

const philosophy: EditableUIConfig<OurPhilosophyProps> = {
  name: "philosophy",
  title: "Edit Philoshophy",
  fields: [
    {
      name: "title",
      label: "Section title",
      type: "text",
    },
    {
      name: "subTitle",
      label: "Section Subtitle",
      type: "text",
    },
    {
      name: "heading1",
      label: "Heading 1",
      type: "text",
    },
    {
      name: "heading2",
      label: "Heading 2",
      type: "text",
    },
    {
      name: "heading3",
      label: "Heading 3",
      type: "text",
    },
    {
      name: "text1",
      label: "Text 1",
      type: "textarea",
    },
    {
      name: "text2",
      label: "Text 2",
      type: "textarea",
    },
    {
      name: "text3",
      label: "Text 3",
      type: "textarea",
    },
  ],
};

export const awards: EditableUIConfig<OurCloutProps, AwardClout> = {
  name: "awards",
  title: "Edit Awards",
  groupKey: "awardDesc",
  emptyFormInitial: {
    awardImg: "/assets/imgs/empty-img.jpeg",
    awardDesc: "",
  },
  groupItems: [
    { label: "Award Image", name: "awardImg", type: "image" },
    {
      label: "Award Description",
      name: "awardDesc",
      type: "text",
      placeholder: "Enter Award Description",
    },
  ],
};

export const recognition: EditableUIConfig<OurCloutProps, RecognitionClout> = {
  name: "recognitions",
  title: "Edit Recognitions",
  groupKey: "recogDesc",
  emptyFormInitial: {
    recogImg: "/assets/imgs/empty-img.jpeg",
    recogDesc: "",
  },
  groupItems: [
    { label: "Recognition Image", name: "recogImg", type: "image" },
    {
      label: "Recognition Description",
      name: "recogDesc",
      type: "text",
      placeholder: "Enter Recognitions Description",
    },
  ],
};

export const gallery: EditableUIConfig<GalleryProp, GalleryImg> = {
  name: "gallery",
  title: "Edit Gallery",
  groupKey: "galleryName",
  emptyFormInitial: {
    img: "/assets/imgs/empty-img.jpeg",
    galleryName: "",
  },
  groupItems: [
    { name: "img", label: "Add Image", type: "image" },
    {
      name: "galleryName",
      label: "Add Image Name",
      type: "text",
      placeholder: "Enter Image Name",
    },
  ],
};

export const milestone: EditableUIConfig<Milestones, MilestoneData> = {
  name: "milestone",
  title: "Edit Milestone",
  groupKey: "year",
  emptyFormInitial: {
    year: "",
    achievement: [""],
  },
  groupItems: [
    { name: "year", label: "Enter Year", type: "text" },
    { name: "achievement", label: "Enter Acheivements", type: "textarea" },
  ],
};

export const managements: EditableUIConfig<Managements, ManagementType> = {
  name: "managements",
  title: "Edit Management",
  groupKey: "name",
  emptyFormInitial: {
    image: "/assets/imgs/empty-img.jpeg",
    name: "",
    post: "",
  },
  groupItems: [
    {
      label: "Add Image",
      name: "image",
      type: "image",
    },
    {
      label: "Add Name",
      name: "name",
      type: "text",
      placeholder: "Enter Management Name",
      defaultValue: "",
    },
    {
      label: "Add Post",
      name: "post",
      type: "text",
      placeholder: "Enter Designation",
    },
  ],
};

export const boardMembers: EditableUIConfig<BoardMembers, BoardMember> = {
  name: "boardMembers",
  title: "Edit Board Members",
  groupKey: "name",
  emptyFormInitial: {
    image: "/assets/imgs/empty-img.jpeg",
    name: "",
    post: "",
  },
  groupItems: [
    {
      label: "Add Image",
      name: "image",
      type: "image",
    },
    {
      label: "Add Name",
      name: "name",
      type: "text",
      placeholder: "Enter Board Member Name",
      defaultValue: "",
    },
    {
      label: "Add Post",
      name: "post",
      type: "text",
      placeholder: "Enter Designation",
    },
  ],
};

export const staff: EditableUIConfig<AllStaffs, StaffType> = {
  name: "staffs",
  title: "Edit Staff Members",
  groupKey: "name",
  emptyFormInitial: {
    image: "/assets/imgs/empty-img.jpeg",
    name: "",
    post: "",
  },
  groupItems: [
    {
      label: "Add Image URL",
      name: "image",
      type: "image",
    },
    {
      label: "Add Name",
      name: "name",
      type: "text",
      placeholder: "Enter Staff Name",
      defaultValue: "",
    },
    {
      label: "Add Post",
      name: "post",
      type: "text",
      placeholder: "Enter Staff Designation",
    },
  ],
};

export const aboutConfig = {
  profile: {
    ourStory,
    philosophy,
    awards,
    recognition,
    gallery,
  },
  milestones: {
    milestone,
  },
  team: {
    managements,
    boardMembers,
    staff,
  },
};
