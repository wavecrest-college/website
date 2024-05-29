import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";
import TeamSection from "./TeamSection";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConstant } from "config/constants/editable-copy/combined";
import Editable from "components/organisms/Editable/Editable";
import { staffs } from "config/constants/editable-copy/about/values";

const ResponsiveStaff = () => {
  const { aboutConfig } = combinedConfig;

  const { data } = useCopyData();

  const { mappedStaffCategory } = {
    ...combinedConstant.allStaffs,
    ...data.allStaffs,
  };

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <TeamSection teamSectionTitle="Staff" />

      <Editable
        defaultValues={mappedStaffCategory as any}
        config={aboutConfig.staffs.mappedStaffCategory}
        page="allStaffs"
      >
        <Flex overflowY="scroll">
          {staffs.map((staff, index) => {
            return (
              <Flex key={index}>
                <Heading
                  key={index}
                  fontFamily="Playfair Display"
                  fontSize="28px"
                  fontWeight="700"
                  color="#021D37"
                  w="200px"
                  mt="10px"
                  alignSelf="center"
                  transform="rotate(270deg)"
                >
                  {staff.title}
                </Heading>

                {mappedStaffCategory.map((item, index) => {
                  return (
                    <Box key={index}>
                      <Box w="350px">
                        <PeaceImage
                          src={item.image}
                          pl="10px"
                          w="100%"
                          alt="companyLogo"
                          objectFit="cover"
                          h="350px"
                        />
                      </Box>

                      <Flex
                        alignItems="center"
                        bg="rgba(255, 255, 255, 67%)"
                        p="10px 25px"
                        position="relative"
                        top="-100px"
                        h="100px"
                        borderRadius="0px 0px 5px 5px"
                        w="100%"
                      >
                        <Box
                          bg="#021D37"
                          w="7px"
                          h="80%"
                          position="absolute"
                          zIndex="1"
                        ></Box>

                        <Box ml="20px">
                          <Heading
                            fontFamily="Playfair Display"
                            fontSize="20px"
                            fontWeight="700"
                            color="#021D37"
                            lineHeight="27px"
                          >
                            {item.name}
                          </Heading>
                          <Text
                            fontFamily="Manrope"
                            fontSize="18px"
                            fontWeight="400"
                            color="rgba(2, 29, 55, 0.63);"
                            lineHeight="27px"
                          >
                            {item.post}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Editable>
    </Box>
  );
};
export default ResponsiveStaff;
