import Button from "../components/atoms/button";
import Icon from "../components/atoms/icon";
import Paragraph from "../components/atoms/paragraph";
import Section from "../components/atoms/section";
import Title from "../components/atoms/title";
import Card from "../components/atoms/card";
import Social from "../components/atoms/social";
import CopyEmail from "../components/atoms/email/copy";

import Header from "../components/molecules/header";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SendEmail from "../components/atoms/email/send";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Section>
        <Title title="Sullivan Tobias" />
        <Title title="I'm a Frontend Developer" tag={2} />
        <Paragraph>
          Self-taught of 22 years, I have been passionate about web development,
          UI/UX and accessibility for 8 years.
        </Paragraph>
        <Button />
        <Button isInvert />
        <Icon src="/react.svg" width={50} height={50} />
        <p>{t("title")}</p>
      </Section>

      <Section asYPadding isInvert>
        <Title tag={2} isUnderlined isInvert title="About Me" />
        <Paragraph isInvert>{t("aboutMe")}</Paragraph>
      </Section>

      <Section asYPadding>
        <Title tag={2} isUnderlined title="Small Projects" />
        <Card src="/crypto.png" label="Crypto Tracker" />
        <Card src="/solar.png" label="Solar System" />
        <Card src="/chat.png" label="Firebase Chat" />
        <Card src="/weather.png" label="Weather App" />
        <Card src="/lunar.png" label="Lunar Phases" />
        <Card src="/github.png" label="Github Resume" />
        <Card src="/url.png" label="Url Shortener" />
      </Section>

      <Section asYPadding isInvert>
        <Title tag={2} isInvert isUnderlined title="Skills" />

        <Title tag={3} isInvert title="Web Integration" />
        <Icon width={50} height={50} src="/html5.svg" />
        <Icon width={50} height={50} src="/css3.svg" />

        <Title tag={3} isInvert title="Front-end" />
        <Icon width={50} height={50} src="/js.svg" />
        <Icon width={50} height={50} src="/react.svg" />
        <Icon width={50} height={50} src="/redux.svg" />
        <Icon width={50} height={50} src="/mobx.svg" />
        <Icon width={50} height={50} src="/handlebars.svg" />

        <Title tag={3} isInvert title="Back-end" />
        <Icon width={50} height={50} src="/nodejs.svg" />

        <Title tag={3} isInvert title="Content Management" />
        <Icon width={50} height={50} src="/aem.svg" />

        <Title tag={3} isInvert title="Others" />
        <Icon width={50} height={50} src="/ts.svg" />
        <Icon width={50} height={50} src="/graphql.svg" />
        <Icon width={50} height={50} src="/jest.svg" />
        <Icon width={50} height={50} src="/nextjs.svg" />
        <Icon width={50} height={50} src="/mongodb.svg" />
      </Section>

      <Section asYPadding>
        <Title tag={2} isUnderlined title="Work experience" />
        <Card src="/renault.png" label="Renault" />
        <Card src="/radley.png" label="Radley" />
        <Card src="/airbus.png" label="Airbus" />
      </Section>

      <Section asYPadding>
        <Title tag={2} isUnderlined title="Social networks" />
        <Social icon="/github.svg" />
        <Social icon="/linkedin.svg" />
      </Section>

      <Section isInvert asYPadding>
        <Title tag={2} isInvert isUnderlined title="Contact" />
        <CopyEmail />
        <SendEmail />
      </Section>
    </>
  );
};

export default Home;
