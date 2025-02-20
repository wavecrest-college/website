import { Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { EditableInputProps } from "./types";

const editableTexttypes: Record<string, React.ElementType> = {
  text: Input,
  textarea: Textarea,
};

type EditableTextProps = EditableInputProps & {
  type?: keyof typeof editableTexttypes | "date";
};

const EditTextFormItem: React.FC<EditableTextProps> = (props) => {
  const { defaultValue, placeholder, name, type = "text", ...rest } = props;

  if (type === "date") {
    return (
      <input
        type="date"
        name={name}
        defaultValue={
          defaultValue
            ? new Date(defaultValue).toISOString().split("T")[0]
            : undefined
        }
        placeholder={placeholder}
        className="input-field"
        {...rest}
      />
    );
  }

  const Component: React.ElementType = editableTexttypes[type] || Input;

  return (
    <Component
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      type={type}
      {...rest}
    />
  );
};

export default EditTextFormItem;
