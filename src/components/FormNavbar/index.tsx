import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "src/styles/app";
import { IconContainer } from "src/styles/preview";
import { Separator } from "src/styles/signup";

import Image from "next/image";

import { useRouter } from "next/router";

export default function FormNavbar() {
  const [currentStage, setCurrentStage] = useState(0);

  const { route } = useRouter();

  useEffect(() => {
    switch (route) {
      case "/advertise/form":
        setCurrentStage(1);
        break;
      case "/advertise/preview":
        setCurrentStage(2);
        break;
      case "/advertise/contact":
        setCurrentStage(3);
        break;
      case "/advertise/confirm":
        setCurrentStage(4);
        break;
    }
  }, [route]);

  return (
    <Container>
      <IconContainer title="advertise">
        <Link href="/advertise/form" passHref>
          <Image
            draggable="false"
            layout="fill"
            src="/images/Advertise-color.svg"
            alt="preview"
          />
        </Link>
      </IconContainer>
      <Separator />
      <IconContainer title="preview">
        <Link
          href={currentStage > 1 ? "/advertise/form" : "/advertise/form"}
          passHref
        >
          <Image
            draggable="false"
            layout="fill"
            src={
              currentStage > 1
                ? "/images/Preview-color.svg"
                : "/images/Preview.svg"
            }
            alt="preview"
          />
        </Link>
      </IconContainer>
      <Separator />
      <IconContainer title="contact">
        <Link
          href={currentStage > 2 ? "/advertise/contact" : "/advertise/form"}
          passHref
        >
          <Image
            draggable="false"
            layout="fill"
            src={
              currentStage > 2
                ? "/images/Contact-color.svg"
                : "/images/Contact.svg"
            }
            alt="contact"
          />
        </Link>
      </IconContainer>
      <Separator />
      <IconContainer title="contact">
        <Link
          href={currentStage > 3 ? "/advertise/confirm" : "/advertise/form"}
          passHref
        >
          <Image
            draggable="false"
            layout="fill"
            src={
              currentStage > 3
                ? "/images/Confirm-color.svg"
                : "/images/Confirm.svg"
            }
            alt="confirm"
          />
        </Link>
      </IconContainer>
    </Container>
  );
}
