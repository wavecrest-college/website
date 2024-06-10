import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ResponsiveManagement from "./Media Query/Responsive Management";
import ResponsiveBoard from "./Media Query/Responsive Board";
import ResponsiveStaff from "./Media Query/Responsive Staff";
import MobileRedirect from "components/molecules/MobileRedirect";
import PeaceImage from "components/atoms/PeaceImage";
import Editable from "components/organisms/Editable/Editable";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConstant } from "config/constants/editable-copy/combined";

export type ManagementType = {
  image: string;
  name: string;
  post: string;
};

export type Managements = {
  managements: ManagementType[];
};

const Management = () => {
  const { aboutConfig } = combinedConfig;

  const { data } = useCopyData();

  const { management } = {
    ...combinedConstant.managements,
    ...data.managements,
  };

  const redirects = [
    {
      name: "PROFILE",
      url: "/about/profile",
    },
    {
      name: "MILESTONE",
      url: "/about/milestone",
    },
  ];
  return (
    <Box
      px={{
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "0px",
        "2xl": "0px",
      }}
    >
      <Heading
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="700"
        color="#021D37"
        mb="30px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        Management
      </Heading>

      <Editable
        defaultValues={management}
        config={aboutConfig.team.managements}
        page="managements"
      >
        <Flex
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          {management.map((management, index) => {
            return (
              <Box
                key={index}
                borderRadius="50px"
                w={{ xl: "250px", "2xl": "250px" }}
                mr="10px"
              >
                <PeaceImage
                  src={management.image}
                  alt="management"
                  h={250}
                  w="100%"
                />

                <Flex
                  alignItems="center"
                  bg="rgba(255, 255, 255, 67%)"
                  p="10px 25px"
                  position="relative"
                  top={{ xl: "-60px", "2xl": "-60px" }}
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
                      fontSize={{ xl: "18x", "2xl": "22px" }}
                      fontWeight="700"
                      color="#021D37"
                    >
                      {management.name}
                    </Heading>
                    <Text
                      fontFamily="Manrope"
                      fontSize="14px"
                      fontWeight="400"
                      color="rgba(2, 29, 55, 0.63);"
                    >
                      {management.post}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Editable>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Box>
          <ResponsiveBoard />
          <ResponsiveManagement />
          <ResponsiveStaff />
        </Box>

        <Flex
          justifyContent="center"
          mt="100px"
          px={{
            sm: "20px",
            md: "20px",
            lg: "91px",
          }}
        >
          {redirects.map((redirect, index) => {
            return (
              <MobileRedirect
                key={index}
                pageName={redirect.name}
                pageURL={redirect.url}
              />
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Management;
