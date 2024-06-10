import { Box } from "@chakra-ui/react";
import React from "react";
import AcademicStaffs from "./AcademicStaffs";
import NonAcademicStaffs from "./NonAcademicStaffs";
import ODC from "./ODC";

export type StaffType = {
  image: string;
  name: string;
  post: string;
};

export type AllStaffs = {
  staff: StaffType[];
};

const Staff = () => {
  return (
    <Box>
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <AcademicStaffs />
        <NonAcademicStaffs />
        <ODC />
      </Box>
    </Box>
  );
};

export default Staff;
