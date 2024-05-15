import { Flex, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";
import { AwardClout } from "./OurClout";

type AwardsProp = {
  awards: AwardClout[];
};

const Awards = ({ awards }: AwardsProp) => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Text
        fontFamily="Manrope"
        fontSize="40px"
        fontWeight="400"
        color="rgba(2, 29, 55, 0.3)"
        transform="rotate(-90deg)"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        AWARDS
      </Text>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        borderBottom={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "2px solid rgba(2, 29, 55, 0.17)",
          "2xl": "2px solid rgba(2, 29, 55, 0.17)",
        }}
        py={{
          xl: "43px",
          "2xl": "43px",
        }}
        mt={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
      >
        {awards.map((award, index) => {
          return (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              mb={{
                sm: "25px",
                md: "25px",
                lg: "25px",
              }}
            >
              <PeaceImage
                src={award.awardImg}
                alt="award-img"
                w={{
                  sm: "60px",
                  md: "70px",
                  lg: "75px",
                }}
              />

              <Text
                fontFamily="Manrope"
                fontWeight="600"
                fontSize={{
                  sm: "16px",
                  md: "16px",
                  lg: "20px",
                  xl: "28px",
                  "2xl": "28px",
                }}
                lineHeight={{
                  sm: "30px",
                  md: "30px",
                  lg: "30px",
                  xl: "50px",
                  "2xl": "50px",
                }}
                alignItems="center"
                ml={{
                  sm: "30px",
                  md: "35px",
                  lg: "60px",
                  xl: "43px",
                  "2xl": "43px",
                }}
              >
                {award.awardDesc}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Awards;
