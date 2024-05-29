import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConstant } from "config/constants/editable-copy/combined";
import React, { Fragment } from "react";
import Editable from "components/organisms/Editable/Editable";
import { staffs } from "config/constants/editable-copy/about/values";

export type StaffType = {
  image: string;
  name: string;
  post: string;
};

export type AllStaffs = {
  staff: StaffType[];
};

const Staff = () => {
  const { aboutConfig } = combinedConfig;

  const { data } = useCopyData();

  const { mappedStaffCategory } = {
    ...combinedConstant.allStaffs,
    ...data.allStaffs,
  };

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

        <Box>
          {staffs.map((staff, index) => {
            return (
              <Fragment key={index}>
                <Heading
                  key={index}
                  fontFamily="Playfair Display"
                  fontSize="32px"
                  fontWeight="700"
                  color="#021D37"
                  mb="30px"
                >
                  {staff.title}
                </Heading>

                <Editable
                  defaultValues={mappedStaffCategory as any}
                  config={aboutConfig.staffs.mappedStaffCategory}
                  page="allStaffs"
                >
                  <Grid
                    gridTemplateColumns="1fr 1fr 1fr"
                    gridGap="8px"
                    mb="100px"
                    display={{
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "grid",
                      "2xl": "grid",
                    }}
                  >
                    {mappedStaffCategory.map((staff, index) => {
                      return (
                        <Box key={index} w={{ xl: "350px", "2xl": "350px" }}>
                          <PeaceImage
                            src={staff.image}
                            alt="staff"
                            w="100%"
                            h="350px"
                            borderRadius="5px"
                          />
                          <Flex
                            alignItems="center"
                            bg="rgba(255, 255, 255, 77%)"
                            p="10px 25px"
                            position="relative"
                            top="-67px"
                            borderRadius="0px 0px 5px 5px"
                          >
                            <Box
                              bg="#021D37"
                              w="3px"
                              my="auto"
                              h="80%"
                              position="absolute"
                              zIndex="1"
                            ></Box>

                            <Box ml="10px">
                              <Heading
                                fontFamily="Playfair Display"
                                fontSize="22px"
                                fontWeight="700"
                                color="#021D37"
                              >
                                {staff.name}
                              </Heading>
                              <Text
                                fontFamily="Manrope"
                                fontSize="14px"
                                fontWeight="400"
                                color="rgba(2, 29, 55, 0.63);"
                              >
                                {staff.post}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      );
                    })}
                  </Grid>
                </Editable>
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
