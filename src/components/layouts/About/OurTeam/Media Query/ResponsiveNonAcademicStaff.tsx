import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import Editable from "components/organisms/Editable/Editable";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConstant } from "config/constants/editable-copy/combined";
import React from "react";

const ResponsiveNonAcademicStaff = () => {
  const { aboutConfig } = combinedConfig;

  const { data } = useCopyData();

  const { nonAcademicStaffs } = {
    ...combinedConstant.allStaffs,
    ...data.allStaffs,
  };

  return (
    <Editable
      defaultValues={nonAcademicStaffs}
      config={aboutConfig.team.nonAcademicStaff}
      page="allStaffs"
    >
      <Flex my="20px" h="400px">
        <Heading
          fontFamily="Playfair Display"
          fontSize="28px"
          fontWeight="700"
          color="#021D37"
          // w="100px"
          mt="10px"
          alignSelf="center"
          transform="rotate(270deg)"
          wordBreak="keep-all"
        >
          Non Academic Staff
        </Heading>

        <Flex overflowX="auto">
          {nonAcademicStaffs.map((item, index) => {
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
      </Flex>
    </Editable>
  );
};

export default ResponsiveNonAcademicStaff;
