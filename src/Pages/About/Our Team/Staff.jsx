import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import provost from "assets/Images/Nneka Chuwkuekezie.jpg";
import deputyProvost from "assets/Images/felicitas.jpg";
import Baptista from "assets/Images/Baptista Uwandu.jpg";
import bursar from "assets/Images/2.png";
import amarachukwu from "assets/Images/amarachukwu.png";
import theodora from "assets/Images/odc/theodora.jpg";
import James from "assets/Images/odc/James.jpg";
import Mkpegara from "assets/Images/odc/Mkpegara.jpg";
import Gloria from "assets/Images/academicstaff/Inyangudo Gloria.jpg";
import Juliet from "assets/Images/academicstaff/Juliet.jpeg";
import Lizzy from "assets/Images/academicstaff/Lizzy.jpg";
import Dorcas from "assets/Images/academicstaff/Dorcas.jpg";
import Aduba from "assets/Images/academicstaff/Aduba.jpeg";
import Sayo from "assets/Images/academicstaff/Sayo.jpg";
import Lilian from "assets/Images/academicstaff/Lilian.jpg";
import Goodness from "assets/Images/membersofstaff/Oparachukwu Goodness.jpg";
import Pius from "assets/Images/membersofstaff/Nmereole Pius.jpg";
import vivian from "assets/Images/academicstaff/vivian.jpg";
import Odinaka from "assets/Images/academicstaff/Odinaka.jpg";
import Helen from "assets/Images/academicstaff/Helen.jpg";
import Ezika from "assets/Images/academicstaff/Ezika.jpg";
import Obasi from "assets/Images/academicstaff/Obasi.jpg";
import cecilia from "assets/Images/academicstaff/cecilia.jpg";
import Anna from "assets/Images/odc/Anna.jpg";
import helen from "assets/Images/helen.jpg";
import Asuquo from "assets/Images/Samuel Asuquo - chef.jpg";
import Happiness from "assets/Images/odc/Ukwachi Happiness .jpg";
import ebong from "assets/Images/1.png";

const Staff = () => {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
        {
          image: Juliet,
          name: "Osuagwu Juliet",
          post: "Lecturer",
        },
        {
          image: helen,
          name: "Eboigbe Helen",
          post: "Ethics Lecturer",
        },
        {
          image: Lizzy,
          name: "Obasi Chizurumoke",
          post: "Lecturer / Workshop Co-ordinator",
        },
        {
          image: Aduba,
          name: "Eboagwu Helen",
          post: "Facility Lecturer",
        },
        {
          image: Dorcas,
          name: "Adeyemo Dorcas",
          post: "SIWES Co-ordinator",
        },
        {
          image: Sayo,
          name: "Andy-Nwankwo Lilian",
          post: "Librarian",
        },
        {
          image: Lilian,
          name: "Ojo Sayo",
          post: "Account Lecturer / CTH Trainer",
        },
        {
          image: Obasi,
          name: "Aduba Chineze",
          post: "French Lecturer",
        },
        {
          image: Asuquo,
          name: "Samuel Asuquo",
          post: "Chef",
        },
        {
          image: Gloria,
          name: "Iyangudo Gloria",
          post: "F&B Lecturer",
        },
        {
          image: vivian,
          name: "Isichei Vivian",
          post: "Lecturer and Academic Co-ordinator",
        },
        {
          image: Odinaka,
          name: "Ekwugha Odinaka",
          post: "Hospitality Management Lecturer",
        },
        {
          image: Helen,
          name: "Uju Arinze",
          post: "Research Lecturer",
        },
        {
          image: Ezika,
          name: "Ezika Cecilia",
          post: "Faculty Secretary",
        },
        {
          image: cecilia,
          name: "Onaolapo Lizzy",
          post: "Food Service and Production Lecturer",
        },
      ],
    },

    {
      title: "Non-Academic Staff",
      others: [
        {
          image: provost,
          name: "Nneka Chukwuekezie",
          post: "Students Affairs/ Admission Officer",
        },
        {
          image: deputyProvost,
          name: "Felicitas Odome",
          post: "Social Media and Digital Marketing Personnel",
        },
        {
          image: bursar,
          name: "Okorie Nnenna",
          post: "Assistant Account Officer",
        },
        {
          image: ebong,
          name: "Precious Ebung",
          post: "Front Desk Personnel",
        },
        {
          image: Baptista,
          name: "Baptista Uwandu",
          post: "Public Relations Officer",
        },
        {
          image: Goodness,
          name: "Oparachukwu Goodness",
          post: "Practical Assistant",
        },
        {
          image: Pius,
          name: "Nmereole Pius",
          post: "Security Officer",
        },
        {
          image: amarachukwu,
          name: "Amarachukwu  Kenneth",
          post: "Administrative officer",
        },
      ],
    },

    {
      title: "ODC",
      others: [
        {
          image: theodora,
          name: "Ejiogu Theodora",
          post: "Pastry Chef",
        },
        {
          image: James,
          name: "Idiong James",
          post: "Kitchen Assistant",
        },
        {
          image: Anna,
          name: "Agbor Mkpegara",
          post: "Kitchen Assistant",
        },
        {
          image: Mkpegara,
          name: "Owo Anna",
          post: "Catering Craft",
        },
        {
          image: Happiness,
          name: "Ukwachi Happiness",
          post: "Store Supervisor",
        },
      ],
    },
  ];

  return (
    <Box>
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Box>
          {staffs.map((staff, index) => {
            return (
              <Fragment>
                <Heading
                  key={index}
                  fontFamily="Playfair Display"
                  fontSize="32px"
                  fontWeight="700"
                  color="#021D37"
                  mb="30px"
                >
                  {staff.title}
                </Heading>

                <Grid
                  gridTemplateColumns="1fr 1fr 1fr"
                  gridGap="8px"
                  mb="100px"
                  display={{
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "grid",
                    "2xl": "grid",
                  }}
                >
                  {staff.others.map((staff, index) => {
                    return (
                      <Box key={index}>
                        <Image
                          src={staff.image}
                          w="330px"
                          objectFit="cover"
                          borderRadius="5px"
                          h="400px"
                        />
                        <Flex
                          alignItems="center"
                          bg="rgba(255, 255, 255, 77%)"
                          p="10px 25px"
                          position="relative"
                          top="-67px"
                          borderRadius="0px 0px 5px 5px"
                        >
                          <Box
                            bg="#021D37"
                            w="3px"
                            my="auto"
                            h="80%"
                            position="absolute"
                            zIndex="1"
                          ></Box>

                          <Box ml="10px">
                            <Heading
                              fontFamily="Playfair Display"
                              fontSize="22px"
                              fontWeight="700"
                              color="#021D37"
                            >
                              {staff.name}
                            </Heading>
                            <Text
                              fontFamily="Manrope"
                              fontSize="14px"
                              fontWeight="400"
                              color="rgba(2, 29, 55, 0.63);"
                            >
                              {staff.post}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    );
                  })}
                </Grid>
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
