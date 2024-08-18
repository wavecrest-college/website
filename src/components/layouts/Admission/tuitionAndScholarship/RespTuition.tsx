import React, { Fragment } from "react";
import { Box, Button, Heading, Text, Grid } from "@chakra-ui/react";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import MobileRedirect from "components/molecules/MobileRedirect";
import {
  combinedConfig,
  combinedConstant,
} from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import Editable from "components/organisms/Editable/Editable";

const RespTuition = () => {
  const navigateTo = [
    {
      name: "ADMISSION REQs",
      href: "/admission/admissionRequirements",
    },
    {
      name: "APPLY ONLINE",
      href: process.env.NEXT_PUBLIC_APPLY_NOW_URL as string,
    },
    {
      name: "HOSTEL",
      href: "/admission/hostel",
    },
    {
      name: "FAQs",
      href: "/admission/faqs",
    },
  ];

  const { academicsConfig } = combinedConfig;

  const { data } = useCopyData();

  const { tuition } = {
    ...combinedConstant.tuitions,
    ...data.tuitions,
  };

  return (
    <Fragment>
      <MobilePageBanner
        imageURL="/assets/imgs/waveimg.png"
        title="TUITION AND SCHOLARSHIP"
      />

      <Box>
        <Editable
          defaultValues={tuition}
          config={academicsConfig.tuitions.tuition}
          page="tuitions"
        >
          {tuition.map((fee, index) => {
            return (
              <Box
                key={index}
                p={{
                  sm: "50px 20px",
                  md: "50px",
                  lg: "50px",
                }}
              >
                <Box>
                  <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>
                  <Heading
                    fontFamily="Playfair Display"
                    fontSize="22px"
                    fontWeight="700"
                    mb="30px"
                  >
                    {fee.courseTitle}
                  </Heading>
                </Box>
              </Box>
            );
          })}
        </Editable>

        <Box
          bg="#EBEDEF"
          p={{
            sm: "20px",
            md: "20px 40px",
            lg: "30px 91px",
          }}
        >
          <Box>
            <Box>
              <Box w="88px" h="3px" bg="#021D37"></Box>
              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize="24px"
                lineHeight="43px"
              >
                Account Details
              </Heading>
            </Box>

            <Text
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="18px"
              mt="7px"
            >
              All payments must be made into the bank account of the College
              during registration.
              <br />
              <br /> Pay to: <b>“Wavecrest College” </b>
              <br /> Bank Name: <b>Access Bank</b>
              <br /> Account no.<b> 001-054-6867</b>
            </Text>

            <Button
              bg="#021D37"
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="700"
              color="#FFF"
              mt="16px"
              w="183px"
              borderRadius="3px"
            >
              PAY NOW
            </Button>
          </Box>
        </Box>

        <Box
          p={{
            sm: "40px 20px",
            md: "40px",
            lg: "30px 91px",
          }}
        >
          <Box>
            <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

            <Heading
              fontFamily="Playfair Display"
              fontSize="24px"
              fontWeight="700"
            >
              Scholarships
            </Heading>
          </Box>

          <Text fontFamily="Manrope" fontWeight="400" fontSize="18px" mt="15px">
            For over 40 years, we have constantly trained girls and produced
            graduates who are in very High demand in the Hospitality Industry.
            In order to assist those who would like to pursue a career in
            Hospitality but are unable to afford the complete tuition fees,
            Wavecrest College seeks the collaboration of well-meaning
            Individuals or Corporate bodies in order to train these young ladies
            through the Scholarship fund.
          </Text>
        </Box>
      </Box>

      <Grid
        justifyContent="center"
        gridTemplateColumns={{
          sm: "repeat(2, auto)",
          md: "repeat(3, auto)",
          lg: "repeat(3, auto)",
        }}
        mt="100px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
      >
        {navigateTo.map((redirect, index) => {
          return (
            <MobileRedirect
              key={index}
              pageName={redirect.name}
              pageURL={redirect.href}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default RespTuition;
