import React from "react";
import dynamic from "next/dynamic";
import FormNavbar from "../FormNavbar";
import Head from "next/head";
import { useSession } from "@supabase/auth-helpers-react";
import { Container } from "src/styles/form";
import formConfig from "../../utils/formConfig.json";
import FieldGroup from "src/patterns/FieldGroup";
import { Field } from "formik";

// const DynamicMap = dynamic(
//     () => import('@patterns/FormLocationInformation'),
//     { ssr: false }
// )

const AdvertiseForm = () => {
  const session = useSession();

  return (
    <>
      <Head>
        <title>African Real Estate | Sell Your Property</title>
      </Head>
      <div>
        <FormNavbar />

        {session ? (
          <Container>
            {formConfig.form.fieldgroups
              .filter((group) => group !== "Contact")
              .map((group) => {
                return (
                  <FieldGroup
                    key={group}
                    groupName={group}
                    fields={formConfig.form.fields.filter(
                      (field) => field.group === group
                    )}
                  />
                );
              })}
            {/* <DynamicMap /> */}
            {/* <Field component={PostingPhotos}/> */}
          </Container>
        ) : (
          <p>Sign in First</p>
        )}
      </div>
    </>
  );
};

export default AdvertiseForm;
