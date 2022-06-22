import {
  Box,
  Text,
  Image,
  Grid,
  Flex,
  Heading,
  Stack,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import contactpic from "../../assets/Images/contact.png";
import Footer from "../Home/Footer";
import FooterCopywright from "../Home/FooterCopywright";

const Contact = () => {
  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={contactpic} h="100%" w="100%" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize="60px"
            textAlign="center"
            mt="242px"
          >
            CONTACT US
          </Text>
        </Box>
      </Box>

      <Box p="50px">
        <Grid gridTemplateColumns="1fr 1fr" gridGap="68px">
          <Flex flexDirection="column" textAlign="left">
            <Heading
              fontFamily="Playfair Display, serif"
              fontWeight="700"
              fontSize="40px"
              lineHeight="53px"
              color="#021D37"
            >
              Contact Form
            </Heading>

            <Text
              w="449px"
              mb="7px"
              fontFamily="Manrope, sans-serif"
              fontWeight="400"
              fontSize="18px"
              lineHeight="25px"
              color="#021D37"
            >
              Kindly leave us a message and we'll get back to you as soon as
              possible
            </Text>
            <Stack>
              <Input
                type="name"
                variant="filled"
                placeholder="Name"
                w="526px"
                h="67px"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
              <Input
                type="email"
                variant="filled"
                placeholder="Email"
                w="526px"
                h="67px"
                mb="10px"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
              <Input
                type="number"
                variant="filled"
                placeholder="Phone Number"
                w="526px"
                h="67px"
                mb="10px"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
              <Input
                type="text"
                variant="filled"
                placeholder="Purpose"
                w="526px"
                h="67px"
                mb="10px"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
              <Textarea
                type="text"
                variant="filled"
                placeholder="Message"
                w="526px"
                h="223px"
                mb="10px"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            </Stack>
            <Button
              w="103px"
              h="47px"
              mt="10px"
              bg="#021D37"
              color="white"
              fontFamily="Manrope, sans-serif"
              fontWeight="700"
              fontSize="16px"
              textAlign="center"
              borderRadius="3px"
              _hover={{
                bg: "#020E1B",
              }}
            >
              SUBMIT
            </Button>
          </Flex>

          <Flex flexDirection="column">
            <Heading mb="10px">Visit Us</Heading>
            <Box>
              <iframe
                title="Wavecrest College of Hospitality"
                width="665"
                height="364"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=665&amp;height=364&amp;hl=en&amp;q=75%20Adisa%20Bashua%20Street,%20Off%20Adelabu%20Street,%20Surulere,%20Lagos%20State,%20Nigeria.%20%20+(Wavecrest)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <script
                type="text/javascript"
                src="https://embedmaps.com/google-maps-authorization/script.js?id=1e38e70d8c3f5fe4769bac191f721c59a7bdb19c"
              ></script>
              <Text
                mt="10px"
                fontFamily="Manrope, sans-serif"
                fontSize="16px"
                fontWeight="400"
              >
                75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos
                State, Nigeria.
              </Text>
            </Box>

            <Grid gridTemplateColumns="1fr 1fr" mt="30px">
              <Flex flexDirection="column" mb="30px">
                <Heading
                  mb="6px"
                  fontFamily="Playfair Display, serif"
                  fontWeight="700"
                  fontSize="22px"
                  color="#021D37"
                >
                  Admission:
                </Heading>
                <Box
                  fontFamily="Manrope, sans-serif"
                  fontWeight="400"
                  fontSize="18px"
                  color="#021D37"
                >
                  <Text>Phone: +234 909 685 6606</Text>
                  <Text>Email: info@wavecrest.edu.ng</Text>
                </Box>
              </Flex>

              <Flex flexDirection="column" mb="30px">
                <Heading
                  fontFamily="Playfair Display, serif"
                  fontWeight="700"
                  fontSize="22px"
                  color="#021D37"
                  mb="6px"
                >
                  Training:
                </Heading>
                <Box
                  fontFamily="Manrope, sans-serif"
                  fontWeight="400"
                  fontSize="18px"
                  color="#021D37"
                >
                  <Text>Phone: +234 909 685 6606</Text>
                  <Text>Email: info@wavecrest.edu.ng</Text>
                </Box>
              </Flex>

              <Flex flexDirection="column" mb="30px">
                <Heading
                  mb="6px"
                  fontFamily="Playfair Display, serif"
                  fontWeight="700"
                  fontSize="22px"
                  color="#021D37"
                >
                  General:
                </Heading>
                <Box
                  fontFamily="Manrope, sans-serif"
                  fontWeight="400"
                  fontSize="18px"
                  color="#021D37"
                >
                  <Text>Phone: +234 909 685 6606</Text>
                  <Text>Email: info@wavecrest.edu.ng</Text>
                </Box>
              </Flex>

              <Flex flexDirection="column" mb="30px">
                <Heading
                  fontFamily="Playfair Display, serif"
                  fontWeight="700"
                  fontSize="22px"
                  color="#021D37"
                  mb="6px"
                >
                  Partnership:
                </Heading>
                <Box
                  fontFamily="Manrope, sans-serif"
                  fontWeight="400"
                  fontSize="18px"
                  color="#021D37"
                >
                  <Text>Phone: +234 909 685 6606</Text>
                  <Text>Email: info@wavecrest.edu.ng</Text>
                </Box>
              </Flex>
            </Grid>
          </Flex>
        </Grid>

        <Box>
          <Heading
            m="22px 0"
            color="#021D37"
            fontFamily="Playfair Display, serif"
            fontSize="40px"
            fontWeight="700"
            lineHeight="53px"
          >
            Quick Links
          </Heading>
          <Flex>
            <Box
              w="294px"
              h="241px"
              background="#EBEDEF"
              borderRadius="3px"
              mr="27px"
            ></Box>
            <Box
              w="294px"
              h="241px"
              background="#EBEDEF"
              borderRadius="3px"
              mr="27px"
            ></Box>
            <Box
              w="294px"
              h="241px"
              background="#EBEDEF"
              borderRadius="3px"
              mr="27px"
            ></Box>
            <Box
              w="294px"
              h="241px"
              background="#EBEDEF"
              borderRadius="3px"
              mr="27px"
            ></Box>
          </Flex>
        </Box>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Contact;
