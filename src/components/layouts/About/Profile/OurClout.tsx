import { Box } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import Awards from "./Awards";
import Recognition from "./Recognition";
import Editable from "components/organisms/Editable/Editable";
import { aboutConfig } from "config/constants/editable-copy/about/config";

export type AwardClout = {
  awardImg: string;
  awardDesc: string;
};

export type RecognitionClout = {
  recogImg: string;
  recogDesc: string;
};

export type OurCloutProps = {
  awards: AwardClout[];
  recognitions: RecognitionClout[];
};

const OurClout = (props: OurCloutProps) => {
  const { awards, recognitions } = props;

  return (
    <Box
      p={{
        sm: "31px 20px",
        md: "31px 40px",
        lg: "31px",
        xl: "31px 91px",
        "2xl": "31px 91px",
      }}
    >
      <Box>
        <SectionTitle heading="Our Clout" subHeading="Awards and Recognition" />
      </Box>

      <Box>
        <Editable
          defaultValues={awards}
          config={aboutConfig.profile.awards}
          page="aboutProfile"
        >
          <Awards awards={awards} />
        </Editable>

        <Editable
          defaultValues={recognitions}
          config={aboutConfig.profile.recognition}
          page="aboutProfile"
        >
          <Recognition recognitions={recognitions} />
        </Editable>
      </Box>
    </Box>
  );
};

export default OurClout;
