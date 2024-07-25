import { Box, Text, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

const Form = () => {
  const contactForm = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py="50px"
      px={{
        sm: "20px",
        md: "20px",
        lg: "0px",
        xl: "0",
        "2xl": "0",
      }}
    >
      <Box>
        <Box
          w="88px"
          bg="#021D37"
          h="3px"
          mt="40px"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Heading mb="10px" fontFamily="Playfair Display">
          Contact Form
        </Heading>
      </Box>

      <Text
        mb="15px"
        fontFamily="Manrope"
        fontWeight="400"
        fontSize="20px"
        lineHeight="25px"
        color="#021D37"
      >
        Kindly leave us a message and we&lsquo;ll get back to you as soon as
        possible
      </Text>

      <Link
        href={String(contactForm)}
        target="_blank"
        w="142px"
        bg="#021D37"
        border="none"
        color="#fff"
        fontWeight="700"
        fontSize="16px"
        lineHeight="22px"
        textAlign="center"
        borderRadius="3px"
        mt="10px"
        py="15px"
        _hover={{
          bg: "#020E1B",
          transition: "all ease 0.4s",
        }}
      >
        Click Here
      </Link>
    </Flex>
  );
};

export default Form;
