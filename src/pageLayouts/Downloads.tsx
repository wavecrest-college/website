import { Box, Heading, Text, Grid, Button } from "@chakra-ui/react";
import React from "react";
import JsFileDownloader from "js-file-downloader";
import Footer from "components/organisms/Footer";
import PagesBanner from "components/molecules/PagesBanner";
import Navbar from "components/molecules/Navbar/Navbar";
import Header from "components/molecules/Header/Header";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";

const Downloads = () => {
  const donwloadables = [
    {
      name: "E-Profile",
      fileUrl: "/documents/SCHOOL PROFILE.pdf",
    },
    {
      name: "HND Programme brochure",
      fileUrl: "/documents/HIGHER NATIONAL DIPLOMA (HND) IN HOSP (1).pdf",
    },
    {
      name: "ND Programme brochure",
      fileUrl: "/documents/NATIONAL DIPLOMA (ND) IN HOSP (2).pdf",
    },
    {
      name: "Certificate Course brochure",
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      name: "CTH FLIER",
      fileUrl: "/documents/tch flier.png",
    },
    {
      name: "culinary flier",
      fileUrl: "/documents/Culinary flyer.png",
    },
    {
      name: "Pch flier",
      fileUrl: "/documents/P.C.H. flier.png",
    },
    {
      name: "htp brochure",
      fileUrl: "/documents/Wavecrest HTP 2021 Brochure.pdf",
    },
    {
      name: "List of Awardees for 2022",
      fileUrl: "/documents/List of Awards for 2022.xlsx - Sheet1.pdf",
    },
    {
      name: "Graduating Students List",
      fileUrl:
        "/documents/Graduating Students List. 2019.2022.xlsx - Sheet1.pdf",
    },
  ];

  return (
    <Box>
      <Header />
      <Navbar />

      <MobileSideBar />

      <MobilePageBanner imageURL="/assets/imgs/contact.png" title="DOWNLOADS" />
      <PagesBanner imageURL="/assets/imgs/contact.png" pageName={"DOWNLOADS"} />

      <Box
        m="0 auto"
        px={{
          sm: "20px",
          md: "20px",
          lg: "30px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box>
          <Heading
            mt="60px"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
          >
            Downloads
          </Heading>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
            lineHeight="33px"
            color="#021D37"
            mt="24px"
            mb="30px"
          >
            Do you wish to have our brochures, fliers, e.t.c? Below are a list
            of our documents you can download.
          </Text>
        </Box>

        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "repeat(2, auto)",
            lg: "repeat(2, auto)",
            xl: "repeat(3, auto)",
            "2xl": "repeat(3, auto)",
          }}
          gridGap="20px"
          mb="100px"
        >
          {donwloadables.map((donwloadable, index) => {
            return (
              <Button
                key={index}
                bg="#EBEDEF"
                color="#021D37"
                fontFamily="Manrope"
                fontWeight="700"
                fontSize="20px"
                py="20px"
                border="3px solid #021D37"
                textTransform="uppercase"
                onClick={() =>
                  new JsFileDownloader({ url: donwloadable.fileUrl })
                }
                _hover={{
                  bg: "#EDEEFF",
                }}
              >
                {donwloadable.name}
              </Button>
            );
          })}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};
export default Downloads;
