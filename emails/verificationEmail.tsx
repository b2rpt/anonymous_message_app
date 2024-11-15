import * as React from "react";
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  // Button,
} from "@react-email/components";

interface verificationEmailProps {
  username: string;
  otp: string;
}

export const VerificationEmail: React.FC<Readonly<verificationEmailProps>> = ({
  username,
  otp,
}) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification code </title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos; is Verification code: {otp}</Preview>
      <section>
        <Row>
          <Heading as="h2">Hello {username}</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following Verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            If you did not requested the code, please do not share this with
            anyone.
          </Text>
        </Row>
      </section>
    </Html>
  );
};
