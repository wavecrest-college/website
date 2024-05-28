import { Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { forms, Programme, programmes } from "./data";
import NextLink from "next/link";

type ApplyOnlineFormProp = {
  price: string;
  paymentLink: string;
  showCoursePrice: any;
  onChange: (programme: Programme) => void;
};

const ApplyOnlineForm = (props: ApplyOnlineFormProp) => {

  const { price, onChange, showCoursePrice } = props;

  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
  };

  const inputValues = (e: any) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const [inputField, setInputField] = useState(initialValues as any);

  return (
    <form action={showCoursePrice.paymentLink} target="_blank">
      {forms.map((form, index) => {
        return (
          <Input
            required
            display="block"
            key={index}
            type={form.fieldType}
            placeholder={form.placeHolder}
            variant={form.variant}
            name={form.name}
            value={inputField[form.name]}
            onChange={inputValues}
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

      <Select
        placeholder="Programme"
        required
        w={{
          sm: "100%",
          md: "400px",
          lg: "526px",
          xl: "526px",
          "2xl": "526px",
        }}
        h="67px"
        bg="#EBEDEF"
        textAlign="left"
        fontFamily="Manrope"
        border="none"
        color="#021D37"
        fontSize="18px"
        lineHeight="25px"
        fontWeight="400"
        cursor="pointer"
        onChange={(e) => {
          const programme = programmes[+e.target.value];
          onChange(programme);
        }}
      >
        {programmes.map((programme, index) => {
          return (
            <option key={index} value={index}>
              {programme.course}
            </option>
          );
        })}
      </Select>

      <Text>{price}</Text>

      <NextLink href={showCoursePrice.paymentLink} target="_blank">
        <Button
          type="submit"
          fontFamily="Manrope"
          fontSize="16px"
          fontWeight="700"
          m=" 30px 0"
          w={{
            sm: "100%",
            md: "400px",
            lg: "526px",
          }}
          bg="#021D37"
          height="46.89px"
          textAlign="center"
          color="#FFF"
          _hover={{
            bg: "#020E1B",
          }}
        >
          PAY NOW
        </Button>
      </NextLink>
    </form>
  );
};

export default ApplyOnlineForm;
