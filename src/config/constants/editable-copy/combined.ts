import { blogConfig } from "./blog/config";
import { homeConstants as home } from "./home/values";
import { shared } from "./shared/values";

import { homeConfig } from "./home/config";
import { sharedConfig } from "./shared/config";

import { contactConfig } from "./contact/config";
import { contact } from "./contact/values";

import { aboutConfig } from "./about/config";
import {
  aboutMilestone,
  aboutProfile,
  allStaffs,
  boardMembers,
  managements,
} from "./about/values";
import { programmes, trainings, tuitions } from "./academics/values";
import { academicsConfig } from "./academics/config";
import { blog } from "./blog/values";

export const combinedConstant = {
  home,
  shared,
  contact,
  aboutProfile,
  allStaffs,
  aboutMilestone,
  boardMembers,
  managements,
  trainings,
  tuitions,
  programmes,
  blog,
};

export const combinedConfig = {
  contactConfig,
  homeConfig,
  sharedConfig,
  aboutConfig,
  academicsConfig,
  blogConfig,
};
