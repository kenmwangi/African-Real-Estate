import React from "react";
import Fieldset from "src/components/Fieldset";
import { FormikCheckbox } from "src/components/FormikCheckbox";
import { FormikSelect } from "src/components/FormikSelect";
import { FormikInput } from "src/components/FormikInput";
import styled from "styled-components";

type Props = {
  groupName: string;
  fields: {
    name: string;
    label: string;
    group: string;
    type: string;
    options?: {
      label: string;
      value: string;
    }[];
  }[];
};

const FieldGroupComponent = ({ groupName, fields }: Props) => {
  return (
    <Fieldset title={groupName}>
      {fields.map((field) => {
        return field.type === "checkbox" ? (
          <FormikCheckbox
            key={field.name}
            label={field.label}
            name={field.name}
            options={field.options ?? []}
          />
        ) : (
          <FieldGroupStyle
            key={field.name}
            size={
              field.name === "title"
                ? "50rem"
                : field.type === "textarea" || field.name === "address"
                ? "100%"
                : "25rem"
            }
          >
            {field.type === "select" ? (
              <FormikSelect
                label={field.label}
                name={field.name}
                options={field.options ?? []}
              />
            ) : (
              <FormikInput
                label={field.label}
                name={field.name}
                type={field.type === "textarea" ? "text" : field.type}
                isTextarea={field.type === "textarea"}
              />
            )}
          </FieldGroupStyle>
        );
      })}
    </Fieldset>
  );
};

export default FieldGroupComponent;

export const FieldGroup = React.memo(
  FieldGroupComponent,
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) !== JSON.stringify(nextProps);
  }
);

const FieldGroupStyle = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  @media (max-width: 630px) {
    width: 100%;
  }
`;
