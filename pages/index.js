import Button from "../components/button";
import Icon from "../components/icon";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";

import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitch from "../components/languageSwitch";

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

        <LanguageSwitch />
      </Section>
    </>
  );
};

export default Home;
