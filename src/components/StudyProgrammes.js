import { Box, Image, Text, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
// import studyProgrammes1 from "../assets/Images/studyprogrammes 1.png";
import studyProgrammes1 from "../assets/Images/Search.png";
import studyProgrammes2 from "../assets/Images/studyprogrammes 2.png";
import studyProgrammes3 from "../assets/Images/studyprogrammes 3.png";
import studyProgrammes4 from "../assets/Images/studyprogrammes 4.png";

const StudyProgrammes = () => {
  const objArr = [
    {
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      imageSrc: { studyProgrammes1 },
      current: false,
      captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "ND IN HOTEL AND CATERING MANAGEMENT",
      imageSrc: { studyProgrammes2 },
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      imageSrc: { studyProgrammes3 },
      current: true,
      captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
      captionTime: "1 Year | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "SHORT COURSES",
      imageSrc: { studyProgrammes4 },
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Part Time",
      captionButton: "Apply Now",
    },
  ];

  const [currentprogram, setCurrentProgram] = useState(objArr[2]);
  return (
    <Box>
      <Box>
        <Text
          color="#021D37"
          m="50px 0"
          fontFamily="Playfair Display, serif"
          fontSize="40px"
          textAlign="center"
        >
          Study Programmes
        </Text>
        <Flex h="91px" w="1247px" m="0 auto">
          {objArr.map((programm, i) => {
            const isCurrent =
              currentprogram.linkContent === programm.linkContent;
            return (
              <Text
                href="#!"
                fontWeight="600"
                p="10px"
                w="315px"
                h="100%"
                border="3px solid #021D37"
                fontFamily="Manrope, sans-serif;"
                fontSize="20px"
                textAlign="center"
                textDecoration="none"
                bg={isCurrent ? "#021d37" : "#fff"}
                color={isCurrent ? "#EBEDEF" : "#021d37"}
                key={i}
                onClick={() => setCurrentProgram(programm)}
              >
                {programm.linkContent}
              </Text>
            );
          })}
        </Flex>

        <Box w="1247px" h="504px" m="0 auto">
          <Image
            src={currentprogram.imageSrc}
            alt="coffee"
            h="394px"
            m="0 auto"
            borderTop="5px solid #021D37"
            position="absolute"
          />
          <Box
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
            position="relative"
            textAlign="center"
            // top=""
          >
            <Heading
              color="#fff"
              pt="101px"
              fontWeight="700"
              fontSize="40px"
              fontFamily="Playfair Display, serif"
            >
              {currentprogram.captionHeading}
            </Heading>
            <Text
              fontSize="20px"
              lineHeight="27px"
              color="#EBEDEF"
              fontFamily="Manrope, sans-serif"
              m="1rem 0"
            >
              {currentprogram.captionTime}
            </Text>
            <Button
              bg="#fff"
              color="#021d37"
              h="52px"
              w="208px"
              m="1rem 0"
              p="10px 25px"
              border="none"
              borderRadius="3px"
              fontFamily="Manrope, sans-serif"
              fontSize="24px"
              fontWeight="700"
            >
              {currentprogram.captionButton}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyProgrammes;
