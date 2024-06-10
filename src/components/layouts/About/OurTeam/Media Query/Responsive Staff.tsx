import { Box } from "@chakra-ui/react";
import React from "react";
import TeamSection from "./TeamSection";
import ResponsiveAcademicStaff from "./ResponsiveAcademicStaff";
import ResponsiveNonAcademicStaff from "./ResponsiveNonAcademicStaff";
import ResponsiveODC from "./ResponsiveODC";

const ResponsiveStaff = () => {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <TeamSection teamSectionTitle="Staff" />

      <ResponsiveAcademicStaff />
      <ResponsiveNonAcademicStaff />
      <ResponsiveODC />
    </Box>
  );
};
export default ResponsiveStaff;
