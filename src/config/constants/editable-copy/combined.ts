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
  boardMembers,
  managements,
  allStaffs,
} from "./about/values";
import { programmes, trainings } from "./academics/values";
import { academicsConfig } from "./academics/config";

export const combinedConstant = {
  home,
  shared,
  contact,
  aboutProfile,
  aboutMilestone,
  boardMembers,
  managements,
  allStaffs,
  trainings,
  programmes,
};

export const combinedConfig = {
  contactConfig,
  homeConfig,
  sharedConfig,
  aboutConfig,
  academicsConfig,
};
