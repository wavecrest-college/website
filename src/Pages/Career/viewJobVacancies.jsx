import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import waveimg from "assets/Images/waveimg.png";
import MobileSideBar from "components/MobileSideBar";

const ViewJobVacancies = () => {
  const jobVacancies = [
    {
      bg: "#FFF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Wavecrest College of Hospitality",
      desc: "Culinary Instructor",
      deadLine: "31st December 2022",
    },
    {
      bg: "#FFF",
      company: "Odogwu Bitters",
      desc: "Inspector",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Maggi Star",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#FFF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
  ];

  const navigate = useNavigate();

  const ViewVacancies = (vacancy) => {
    const navigateTo = `/viewVacancies?companyName=${vacancy.company}&deadline=${vacancy.deadLine}&desc=${vacancy.desc}`;

    navigate(navigateTo, { replace: true });
  };
  const postJobVacancy = (e) => {
    e.preventDefault();
    navigate("/career/postJobVacancies", { replace: true });
  };

  return (
    <Fragment>
      <MobileSideBar />
      <Box
        h="441px"
        w="100%"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="30px"
            textAlign="center"
            mt="250px"
          >
            VIEW JOB <br /> VACANCIES
          </Text>
        </Box>
      </Box>

      <Box my="90px">
        <Box
          px={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "91px",
            "2xl": "91px",
          }}
        >
          <Heading
            my={{
              sm: "0",
              md: "0",
              lg: "0 ",
              xl: "60px",
              "2xl": "60px",
            }}
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
          >
            View Job Vacancies
          </Heading>
        </Box>

        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
            "2xl": "1fr 1fr",
          }}
          mx={{
            sm: "0px",
            md: "0px",
            lg: "20px",
            xl: "20px",
            "2xl": "91px",
          }}
          alignItems="center"
          justifyContent="center"
          gridGap={{
            sm: "0px",
            md: "0px",
            lg: "30px",
            xl: "30px",
            "2xl": "30px",
          }}
        >
          <Heading
            fontFamily="Manrope"
            fontWeight="700"
            fontStyle="italic"
            fontSize="20px"
            color="#021D37"
            textAlign="center"
          >
            No Current Vacancies
          </Heading>
        </Grid>
      </Box>
      <Box
        mt="100px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Flex justifyContent="space-evenly">
          <Button
            fontFamily="Manrope"
            fontSize="18px"
            py="25px"
            mb="52px"
            textAlign="center"
            fontWeight="700"
            bg="#EEE"
            onClick={(e) => postJobVacancy(e)}
          >
            POST JOB VACANCY
          </Button>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default ViewJobVacancies;
