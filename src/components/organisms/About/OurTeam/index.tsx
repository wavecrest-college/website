import { Flex, Link, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Management from "./Management";
import Board from "./Board";
import Staff from "./Staff";
import MobileSideBar from "components/MobileSideBar";
import { useRouter } from "next/router";
<<<<<<< HEAD
import MobilePageBanner from "components/molecules/MobilePageBanner";

=======
import PagesBanner from "components/molecules/PagesBanner";
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e

const OurTeam = () => {
  const menuLinks = [
    {
      id: "board",
      linkTitle: "Board",
      content: <Board />,
    },
    {
      id: "management",
      linkTitle: "Management",
      content: <Management />,
    },
    {
      id: "staff",
      linkTitle: "Staff",
      content: <Staff />,
    },
  ];

  const router = useRouter();
<<<<<<< HEAD
  const { id } = router.query;

  const profile = menuLinks.find(
    (menu) => menu.id.toLowerCase() === id.toLowerCase()
=======
  const { id = "management" } = router.query;

  const profile = menuLinks.find(
    (menu) => menu.id.toLowerCase() === (id as String).toLowerCase()
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
  );

  const [activeLink, setActiveLink] = useState(profile || menuLinks[1]);

  return (
    <Box>
      <MobileSideBar />

<<<<<<< HEAD
      <MobilePageBanner imageURL="/assets/imgs/ourTeam.jpg" title="OUR TEAM" />
=======
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
        <PagesBanner imageURL="/assets/imgs/ourTeam.jpg" pageName="OUR TEAM" />
      </Box>
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e

      <Flex
        justifyContent="center"
        mx="auto"
        mt="100px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Flex
          flexDirection="column"
          mt="50px"
          pl="30px"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          {menuLinks.map((menuLink, index) => {
            const isActive = activeLink.linkTitle === menuLink.linkTitle;
            return (
              <Flex
                key={index}
                alignItems="center"
                borderBottom="1px solid rgba(2, 29, 55, 0.63)"
                mr="30px"
<<<<<<< HEAD
=======
                onClick={() => setActiveLink(menuLink)}
                _hover={{
                  cursor: "pointer",
                }}
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
              >
                <FaChevronRight
                  size="15px"
                  color={isActive ? "#021D37" : "rgba(2, 29, 55, 0.63)"}
                />

                <Link
                  key={index}
                  fontFamily="Manrope"
                  color={isActive ? "#021D37" : "rgba(2, 29, 55, 0.63)"}
                  fontWeight={isActive ? "700" : "400"}
                  fontSize="24px"
                  textAlign="center"
                  pl="10px"
                  py="15px"
                  mr="20px"
<<<<<<< HEAD
                  onClick={() => setActiveLink(menuLink)}
=======
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {menuLink.linkTitle}
                </Link>
              </Flex>
            );
          })}
        </Flex>

        <Box>{activeLink.content}</Box>
      </Flex>
    </Box>
  );
};

export default OurTeam;
