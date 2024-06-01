import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import MobileRedirect from "components/molecules/MobileRedirect";
import Program from "./Program";
import { combinedConfig } from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConstant } from "config/constants/editable-copy/combined";
import Editable from "components/organisms/Editable/Editable";

export type ProgrammesData = {
  programmeTitle: string;
  imageSrc: string;
  captionHeading: string;
  captionTime: string;
  captionButton: string;
  description: string;
  fileUrl: string;
  href: string;
  height?: string;
  objectPosition?: string;
};

export type Programme = {
  programme: ProgrammesData[];
};

const Programmes = () => {
  const mobileLinks = [
    {
      name: "TRAINING",
      href: "/academics/training",
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

  const { allProgrammes } = {
    ...combinedConstant.programmes,
    ...data.programmes,
  };

  return (
    <Box>
      <MobileSideBar />
      <MobilePageBanner
        imageURL="/assets/imgs/studyprogramme.jpg"
        title={"PROGRAMMES"}
      />
      <Editable
        defaultValues={allProgrammes as any}
        config={academicsConfig.programmes.programme}
        page="programmes"
      >
        <Box>
          {allProgrammes.map((programme, index) => {
            return <Program key={index} index={index} programme={programme} />;
          })}
        </Box>
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
    </Box>
  );
};

export default Programmes;
