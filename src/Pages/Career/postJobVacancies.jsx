import {
  Heading,
  Input,
  Box,
  Text,
  Image,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import waveimg from "assets/Images/waveimg.png";

const postJobVacancies = () => {
  const forms = [
    {
      fieldType: "name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Company",
      variant: "filled",
    },
    {
      fieldType: "email",
      placeHolder: "Email",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Job Description",
      variant: "filled",
    },
    {
      fieldType: "date",
      placeHolder: "Application Deadline",
      variant: "filled",
    },
  ];

  return (
    <Fragment>
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
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
            px="10px"
          >
            POST JOB VACANCIES
          </Text>
        </Box>
      </Box>

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box>
          <Box>
            <Box
              w="88px"
              h="3px"
              bg="#021D37"
              mb="10px"
              mt="60px"
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            ></Box>
            <Heading
              mt={{
                sm: "0",
                md: "0px",
                lg: "0",
                xl: "60px",
                "2xl": "60px",
              }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
            >
              Post Job Vacancy
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="21px"
            lineHeight="33px"
            color="#021D37"
            my="24px"
          >
            Wavecrest offers accomodation to its students. We have a two well
            furnished hostels orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
        </Box>

        <Box>
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                display="block"
                w={{
                  sm: "100%",
                  md: "400px",
                  lg: "526px",
                  xl: "526px",
                  "2xl": "526px",
                }}
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            );
          })}

          <Input
            type="file"
            variant="filled"
            display="block"
            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png, .jpg, .jpeg"
            placeholder="Upload CV"
            w={{
              sm: "100%",
              md: "400px",
              lg: "526px",
              xl: "526px",
              "2xl": "526px",
            }}
   
            mb="10px"
            bg="#EBEDEF"
          ></Input>

          <Textarea
            placeholder="Extra Notes"
            variant="filled"
            bg="#EBEDEF"
            w={{
              sm: "100%",
              md: "400px",
              lg: "526px",
              xl: "526px",
              "2xl": "526px",
            }}
            h="80px"
            _placeholder={{
              fontFamily: "Manrope, sans-serif",
              color: "#021D37",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "400",
            }}
          />
        </Box>

        <Button
          fontFamily="Manrope"
          fontSize="20px"
          fontWeight="700"
          m="20px 0"
          borderRadius="5px"
          bg="#021D37"
          textAlign="center"
          color="#FFF"
          _hover={{
            bg: "#020E1B",
          }}
        >
          POST
        </Button>
      </Box>
    </Fragment>
  );
};

export default postJobVacancies;
