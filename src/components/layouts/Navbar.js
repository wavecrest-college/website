import {
  Image,
  Stack,
  Flex,
  Link,
  // ListItem,
  // List,
  // Box,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Logo from "../../assets/Images/WC-LOGO-july.png";
import Linked from "../../assets/Images/linked.png";
import Whatapps from "../../assets/Images/whatsapp.png";
import Facebook from "../../assets/Images/facebook.png";
import Twitter from "../../assets/Images/Twitter.png";
import Instagram from "../../assets/Images/Instagram.png";
import Search from "../../assets/Images/Search.png";

const Navbar = () => {
  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" p="29px 91px">
        <Image w="238px" h="52px" src={Logo} />

        <Stack direction="row" alignItems="center">
          <Link href="" target="_blank" rel="noreferrer">
            <Image src={Search} w="20px" h="20px" mr="18px" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/wavecrest-college-of-hospitality/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Linked} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://web.facebook.com/WavecrestCollegeLagos/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Facebook} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://twitter.com/WaveColl"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Twitter} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=09096856606 &text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Whatapps} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="http://instagram.com/wavecrestcollege"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Instagram} w="34px" h="34px" ml="15px" />
          </Link>
        </Stack>
      </Flex>

      <Flex
        h="92px"
        p="29px 91px"
        bg="#021D37"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            HOME
            {/* <Box bg="#fff" h="6px"></Box> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            ABOUT
            {/* <Box className="box" bg="#fff" w="127px" h="6px" />
            <List
              w="127px"
              bg="#021d37"
              m="2.5rem auto"
              textAlign="left"
              position="absolute"
              zIndex="1"
            >
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  PROFILE
                </Link>
              </ListItem>

              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  MILESTONE
                </Link>
              </ListItem>

              <ListItem p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  OUR TEAM
                </Link>
              </ListItem>
            </List> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            ADMISSION
            {/* <Box bg="#fff" h="6px" w="129px"></Box>
            <List
              bg="#021d37"
              m="2.5rem auto"
              w="240px"
              textAlign="left"
              position="absolute"
              z-index="1"
              transition="all ease-in-out 0.5s"
            >
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  APPLY ONLINE
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  ADMISSION REQUIREMENTS
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  TUITION AND SCHOLARSHIP
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  HOSTEL
                </Link>
              </ListItem>
              <ListItem p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  FAQs
                </Link>
              </ListItem>
            </List> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            ACADEMICS
            {/* <Box bg="#fff" h="6px" w="152px"></Box>
            <List
              w="152px"
              bg="#021d37"
              m="2.5rem auto"
              textAlign="left"
              position="absolute"
              z-index="1"
              transition="all ease-in-out 0.5s"
            >
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  PROGRAMMES
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  TRAINING
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  JOB PLACEMENT
                </Link>
              </ListItem>
              <ListItem borderBottom="2px solid #EBEDEF" p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  INTERNSHIP
                </Link>
              </ListItem>
              <ListItem p="3px 20px">
                <Link
                  href="#!"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  NYSC
                </Link>
              </ListItem>
            </List> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            ALUMNI
            {/* <Box bg="#fff" h="6px"></Box> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            pr="40px"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            BLOG
            {/* <Box bg="#fff" h="6px"></Box> */}
          </Link>

          <Link
            href="#"
            color="#fff"
            pr="40px"
            fontFamily="Open Sans, sans-serif"
            fontSize="16px"
            textAlign="center"
            _hover={{
              color: "brown",
              textDecoration: "none",
            }}
          >
            CONTACT US
            {/* <Box bg="#fff" h="6px"></Box> */}
          </Link>
        </Flex>

        <Flex>
          <Link
            href="#!"
            color="white"
            p="7px"
            w="133px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans, sans-serif"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              background: "white",
              color: "#021d37",
              textDecoration: "none",
            }}
          >
            SUPPORT US
          </Link>

          <Link
            href="#!"
            bg="#fff"
            color="#021d37"
            p="7px"
            w="133px"
            ml="27px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans, sans-serif"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              background: "#021d37",
              color: "white",
              textDecoration: "none",
            }}
          >
            APPLY NOW
          </Link>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Navbar;
