import React from "react";
import styled from "styled-components";
import { Field } from "formik";

type Props = {
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
};

export function FormikCheckbox({ label, name, options }: Props) {
  return (
    <Container>
      <h2>{label}</h2>
      <CheckboxContainer>
        {options.map((option) => (
          <div className="checkbox" key={option.value}>
            <Field
              type="checkbox"
              name={name}
              id={option.value}
              value={option.value}
            />
            <label className="input" htmlFor={option.value}>
              <div />
            </label>
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </CheckboxContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 2rem 0;

  input {
    display: none;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 1rem 0;
  }
  label {
    cursor: pointer;
  }
  label.input {
    display: inline-block;
    border-radius: 0.3rem;
    width: 2rem;
    height: 2rem;
    background: var(--white);
    border: 1px solid #0005;
    position: relative;
    transition: all ease 0.2s;
  }
  input:checked ~ label.input {
    background: red;
    position: relative;
    border: none;
    &:after {
      content: "";
      display: block;
      background-image: url("/images/check-icon.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 70%;
      height: 50%;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      left: 50%;
    }
  }
`;

const CheckboxContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
