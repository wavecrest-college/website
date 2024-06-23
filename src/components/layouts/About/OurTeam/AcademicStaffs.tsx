import { Box, Heading, Grid, Flex, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import React, { Fragment } from "react";
import { combinedConstant } from "config/constants/editable-copy/combined";
import Editable from "components/organisms/Editable/Editable";

const AcademicStaffs = () => {
  const { aboutConfig } = combinedConfig;

  const { data } = useCopyData();

  const { staffs } = {
    ...combinedConstant.allStaffs,
    ...data.allStaffs,
  };

  return (
    <Fragment>
      <Heading
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="700"
        color="#021D37"
        mb="30px"
      >
        Academic Staff
      </Heading>

      <Editable
        defaultValues={staffs}
        config={aboutConfig.team.staff}
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
          {staffs.map((staff, index) => {
            return (
              <Box key={index} w={{ xl: "300px", "2xl": "300px" }}>
                <PeaceImage
                  src={staff.image}
                  alt="staff"
                  w="100%"
                  h="300px"
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
};

export default AcademicStaffs;
