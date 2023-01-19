import { Grid, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import Logo from "components/atoms/Logo";
<<<<<<< HEAD
import Newsletter from "../Home/Footer/Newsletter";
import Pages from "../Home/Footer/Pages";
import SocialMediaLinks from "components/molecules/SocialMediaLinks";

const Footer = () => {
  return (
    <Grid
      background="#EBEDEF"
      gridTemplateColumns={{
        sm: "1fr",
        md: "1fr",
        lg: "auto",
        xl: "repeat(3, auto)",
        "2xl": "repeat(3, 1fr)",
      }}
      gridGap="45px"
      pt="54px"
      px={{
        sm: "20px",
        md: "20px",
        lg: "91px",
        xl: "91px",
        "2xl": "91px",
      }}
    >
      <Flex
        flexDirection="column"
        alignItems={{
          sm: "flex-start",
          md: "flex-start",
          lg: "flex-start",
          xl: "flex-end",
          "2xl": "flex-end",
        }}
      >
        <Box mb="10px">
          <Logo />
        </Box>

        <Text
          w="274px"
          color="#021D37"
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="18px"
          lineHeight="25px"
          textAlign={{
            sm: "left",
            md: "left",
            lg: "left",
            xl: "right",
            "2xl": "right",
          }}
        >
          75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria.
        </Text>

        <Box
          fontFamily="Manrope"
          fontSize={{
            sm: "16px",
            md: "18px",
            lg: "18px",
            xl: "18px",
            "2xl": "18px",
          }}
          fontWeight="700"
          lineHeight="25px"
          color="#021D37"
          textAlign={{
            sm: "left",
            md: "left",
            lg: "left",
            xl: "right",
            "2xl": "right",
          }}
          mt="15px"
        >
          <Text
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          >
            +234 909 685 6606 &nbsp; | &nbsp; +234 808 396 4840
          </Text>

          <Box
=======
import Pages from "./Pages";
import Newsletter from "./Newsletter";
import SocialMediaLinks from "components/molecules/SocialMediaLinks";
import FooterCopywright from "./FooterCopywright";

const Footer = () => {
  return (
    <>
      <Grid
        background="#EBEDEF"
        gridTemplateColumns={{
          sm: "1fr",
          md: "1fr",
          lg: "auto",
          xl: "repeat(3, auto)",
          "2xl": "repeat(3, 1fr)",
        }}
        gridGap="45px"
        pt="54px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Flex
          flexDirection="column"
          alignItems={{
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-end",
            "2xl": "flex-end",
          }}
        >
          <Box mb="10px">
            <Logo />
          </Box>

          <Text
            w="274px"
            color="#021D37"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="18px"
            lineHeight="25px"
            textAlign={{
              sm: "left",
              md: "left",
              lg: "left",
              xl: "right",
              "2xl": "right",
            }}
          >
            75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos,
            Nigeria.
          </Text>

          <Box
            fontFamily="Manrope"
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "18px",
              xl: "18px",
              "2xl": "18px",
            }}
            fontWeight="700"
            lineHeight="25px"
            color="#021D37"
            textAlign={{
              sm: "left",
              md: "left",
              lg: "left",
              xl: "right",
              "2xl": "right",
            }}
            mt="15px"
          >
            <Text
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            >
              +234 909 685 6606 &nbsp; | &nbsp; +234 808 396 4840
            </Text>

            <Box
              display={{
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
                "2xl": "block",
              }}
            >
              <Text>+234 909 685 6606</Text>
              <Text>+234 808 396 4840</Text>
            </Box>
            <Text fontFamily="Manrope"> info@wavecrest.edu.ng</Text>
          </Box>

          <Flex
>>>>>>> 8dbbe8776f56e35892eb28ab3638719479075876
            display={{
              sm: "none",
              md: "none",
              lg: "none",
<<<<<<< HEAD
              xl: "block",
              "2xl": "block",
            }}
          >
            <Text>+234 909 685 6606</Text>
            <Text>+234 808 396 4840</Text>
          </Box>
          <Text fontFamily="Manrope"> info@wavecrest.edu.ng</Text>
        </Box>

        <Flex
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <SocialMediaLinks />
        </Flex>
      </Flex>

      <Pages />

      <Newsletter />

=======
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <SocialMediaLinks />
          </Flex>
        </Flex>

        <Pages />

        <Newsletter />
        
>>>>>>> 8dbbe8776f56e35892eb28ab3638719479075876
      <Flex
        display={{
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "none",
          "2xl": "none",
        }}
        mb="30px"
      >
        <SocialMediaLinks />
      </Flex>
<<<<<<< HEAD
    </Grid>
=======
      </Grid>

      <FooterCopywright />
    </>
>>>>>>> 8dbbe8776f56e35892eb28ab3638719479075876
  );
};

export default Footer;
