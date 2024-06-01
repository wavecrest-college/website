import { Flex, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import Courses from "./Courses";
import Editable from "components/organisms/Editable/Editable";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { combinedConstant } from "config/constants/editable-copy/combined";

export type TrainingData = {
  trainingsTitle?: string;
  trainingsImage: string;
  trainingDurationTime?: string;
  trainingDurationYear?: string;
  trainingsText?: string;
  downloadBrochure?: string;
  button?: string;
  fileUrl?: string;
};

export type TrainingType = {
  trainings: TrainingData[];
};

const Training = () => {
  const mobileLinks = [
    {
      name: "PROGRAMMES",
      href: "/academics/programmes",
    },
    {
      name: "INTERNSHIP",
      href: "/academics/internship",
    },
    {
      name: "NYSC",
      href: "/academics/nysc",
    },
  ];

  const { academicsConfig } = combinedConfig;

  const { data } = useCopyData();

  const { allTrainings } = {
    ...combinedConstant.trainings,
    ...data.trainings,
  };

  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/training3.png"
        title="TRAINING"
      />

      <Editable
        defaultValues={allTrainings}
        config={academicsConfig.trainings.training}
        page="trainings"
      >
        <Flex flexDirection="column" mb="70px">
          {allTrainings.map((training, index) => {
            return <Courses key={index} index={index} training={training} />;
          })}
        </Flex>
      </Editable>

      <Grid
        justifyContent="center"
        gridTemplateColumns={{
          sm: "repeat(2, auto)",
          md: "repeat(3, auto)",
          lg: "repeat(3, auto)",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
      >
        {mobileLinks.map((mobileLink, index) => (
          <MobileRedirect
            key={index}
            pageURL={mobileLink.href}
            pageName={mobileLink.name}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Training;
