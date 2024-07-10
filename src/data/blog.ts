import { BlogCategory, BlogPost } from "./../components/layouts/Blog/Blog";
import { BLOGS } from "config/constants/editable-copy/blog/values";
import { CARD_POST } from "config/constants/editable-copy/home/values";

const categories: string[] = [];
let allPosts: BlogPost[] = [];
const postMap: Record<string, BlogPost> = {};
const categoryMap: Record<string, any> = {};

export const blogPost: BlogPost[][] = [];

BLOGS.forEach((blog) => {
  blogPost.push(blog.posts);
  categories.push(blog.category);
  categoryMap[blog.category] = blog;

  allPosts = allPosts.concat(blog.posts);
});

allPosts = allPosts.concat(CARD_POST);

allPosts.forEach((post) => {
  postMap[post.id] = post;
});

export const CATEGORIES = [...new Set(categories)] as BlogCategory[];
export const CATEGORY_MAP = categoryMap;
export const POST_MAP = postMap;
