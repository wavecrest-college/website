import {
  Box,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import NextLink from "next/link";
import PeaceImage from "components/atoms/PeaceImage";
import Editable from "components/organisms/Editable/Editable";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { combinedConstant } from "config/constants/editable-copy/combined";

export type TuitionsData = {
  courseTitle: string;
  feesImage: string;
};

export type Tuition = {
  tuition: TuitionsData;
};

const CourseTuitions = () => {
  const { academicsConfig } = combinedConfig;

  const { data } = useCopyData();

  const { tuition } = {
    ...combinedConstant.tuitions,
    ...data.tuitions,
  };

  return (
    <Editable
      defaultValues={tuition}
      config={academicsConfig.tuitions.tuition}
      page="tuitions"
    >
      {tuition.map((fee, index) => {
        return (
          <Accordion key={index} allowToggle borderTopColor="#FFF">
            <AccordionItem borderBottom="none">
              {({ isExpanded }) => (
                <Box mx="91px" border="none">
                  <h2>
                    <AccordionButton
                      bg="#EBEDEF"
                      mb="20px"
                      borderTop="none"
                      _expanded={{ bg: "#021D37", color: "white" }}
                    >
                      <Heading
                        flex="1"
                        textAlign="left"
                        fontFamily="Playfair Display"
                        fontSize="28px"
                        fontWeight="700"
                        my="17px"
                        pr="100px"
                      >
                        {fee.courseTitle}
                      </Heading>

                      {isExpanded ? (
                        <FaChevronCircleDown size="30px" />
                      ) : (
                        <FaChevronCircleUp size="30px" />
                      )}
                    </AccordionButton>
                  </h2>

                  <AccordionPanel
                    p="10px 57px"
                    fontFamily="Manrope"
                    fontSize="24px"
                    fontWeight="400"
                    lineHeight="33px"
                  >
                    <Box
                      maxW={{
                        sm: "216px",
                        md: "216px",
                        lg: "216px",
                        xl: "800px",
                        "2xl": "800px",
                      }}
                      h="900px"
                      mx="auto"
                    >
                      <PeaceImage
                        w="100%"
                        h="100%"
                        // objectFit="contain"
                        src={fee.feesImage}
                        alt="announcement-image"
                      />
                    </Box>

                    <Box p="70px 91px">
                      <Text
                        fontFamily="Manrope"
                        fontWeight="400"
                        fontSize="24px"
                        lineHeight="33px"
                        mt="40px"
                      >
                        <b>NOTE:</b> Wavecrest College of Hospitality is a
                        project of Women’s Board, Educational Cooperation
                        Society a non-governmental not-for-profit organization.
                        In consideration of the college’s mission to reach out
                        to and give education opportunity to the financially
                        challenged, it has therefore subsidized its fees.
                        <br />
                        <br />
                        However, those who can pay the full fees are encouraged
                        to do so in order to assist in training more students.
                      </Text>

                      <Box>
                        <Heading
                          fontFamily="Playfair Display"
                          fontWeight="700"
                          fontSize="32px"
                          lineHeight="43px"
                          mt="80px"
                        >
                          Account Details
                        </Heading>
                        <Text
                          fontFamily="Manrope"
                          fontWeight="400"
                          fontSize="24px"
                          lineHeight="33px"
                          mt="7px"
                        >
                          All payments must be made into the bank account of the
                          College during registration.
                          <br /> Pay to: <b>“Wavecrest College” </b>
                          <br /> Bank Name: <b>Diamond Bank</b>
                          <br /> Account no.<b> 001-054-6867</b>
                        </Text>

                        <NextLink href="/support" legacyBehavior passHref>
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
                        </NextLink>
                      </Box>
                    </Box>
                  </AccordionPanel>
                </Box>
              )}
            </AccordionItem>
          </Accordion>
        );
      })}
    </Editable>
  );
};

export default CourseTuitions;
