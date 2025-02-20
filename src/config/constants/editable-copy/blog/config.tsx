import { BlogPost, Blogs } from "components/layouts/Blog/Blog";
import { EditableUIConfig } from "../types";
import { v4 as uuidv4 } from "uuid";

export const blog: EditableUIConfig<Blogs, BlogPost> = {
  name: "blog",
  title: "Edit Blog",
  groupKey: "postHeading",
  emptyFormInitial: {
    isTopPost: false,
    id: uuidv4(),
    postDate: new Date(),
    postHeading: "",
    postsImg: "/assets/imgs/empty-img.jpeg",
    coverImage: "/assets/imgs/empty-img.jpeg",
    postsText: "",
  },

  groupItems: [
    {
      label: "Emter Post Image",
      name: "postsImg",
      type: "image",
    },
    {
      label: "Enter Post Heading",
      name: "postHeading",
      placeholder: "Enter Post Heading",
      type: "text",
    },
    {
      label: "Enter Post Text",
      name: "postsText",
      type: "textarea",
      placeholder: "Enter Posts",
    },
    {
      label: "Enter Date",
      name: "postDate",
      type: "date",
      placeholder: "Enter Posts",
    },
    {
      label: "Add Cover Image (Optional)",
      name: "coverImage",
      type: "image",
    },
  ],
};

export const blogConfig = {
  blog,
};
