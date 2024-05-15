import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { RecognitionClout } from "./OurClout";

type RecognitionProp = {
  recognitions: RecognitionClout[];
};

const Recognition = ({ recognitions }: RecognitionProp) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      my={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "50px",
        "2xl": "50px",
      }}
    >
      <Box
        w="300px"
        ml={{
          sm: "-20px",
          md: "-20px",
          lg: "-50px",
          xl: "-70px",
          "2xl": "-70px",
        }}
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        <Text
          fontFamily="Manrope"
          fontSize="40px"
          fontWeight="400"
          color="rgba(2, 29, 55, 0.3)"
          transform="rotate(-90deg)"
        >
          RECOGNITIONS
        </Text>
      </Box>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        ml={{
          sm: "0",
          md: "0",
          lg: "0",
          xl: "-80px",
          "2xl": "-80px",
        }}
        justifyContent="center"
      >
        {recognitions.map((recognition, index) => {
          return (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              pt="20px"
            >
              <Image
                src={recognition.recogImg}
                alt="recognition-img"
                w="105px"
                h="42px"
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
                  lg: "34px",
                  xl: "38px",
                  "2xl": "50px",
                }}
                alignItems="center"
                ml={{
                  sm: "10px",
                  md: "10px",
                  lg: "34px",
                  xl: "43px",
                  "2xl": "43px",
                }}
              >
                {recognition.recogDesc}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Recognition;
