import { Box, Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import discoverpic1 from "../assets/Images/discoverpic 1.png";
import discoverpic2 from "../assets/Images/discoverpic 2.png";
import discoverpic3 from "../assets/Images/discoverpic 3.png";

const DiscoverHospitality = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box ml="63px">
        <Text
          fontSize="32px"
          fontWeight="700"
          w="559px"
          fontFamily="'Playfair Display', serif"
        >
          NIGERIAN'S PREMIERE HOSPITALITY MONOTECHNIC
        </Text>
        <Text
          margin="22px 0"
          fontSize="18px"
          line-height="25px"
          fontFamily="'Manrope', sans-serif"
        >
          Wavecrest College of Hospitality is consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Link
          to="#!"
          background="#021d37"
          padding="1rem 3rem"
          color="#fff"
          fontSize="20px"
          textDecoration="none"
          borderRadius="3px"
          fontFamily="'Manrope', sans-serif"
          w="208px"
          height="52px"
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          APPLY NOW
        </Link>
      </Box>

      <Grid gridTemplateColumns="1fr 1fr" margin="50px 63px">
        <Box w="320px" height="214px">
          <Image
            src={discoverpic1}
            w="100%"
            height="100%"
            p="33px"
            alt="workbench"
          />
        </Box>

        <Box background="#021d37" w="320px" height="214px">
          <Text
            color="#fff"
            fontSize="40px"
            w="100%"
            height="100%"
            textAlign="center"
            fontFamily="'Playfair Display', serif"
            p="40px"
          >
            Discover Hospitality
          </Text>
        </Box>

        <Box w="320px" height="214px">
          <Image src={discoverpic2} w="100%" height="100%" alt="img_ny" />
        </Box>

        <Box className="last-pic" w="320px" height="214px">
          <Image
            src={discoverpic3}
            w="100%"
            height="100%"
            p="33px"
            alt="coffee"
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default DiscoverHospitality;
