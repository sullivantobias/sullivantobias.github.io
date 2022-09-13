import Button from "../components/atoms/button";
import Icon from "../components/atoms/icon";
import Paragraph from "../components/atoms/paragraph";
import Section from "../components/atoms/section";
import Title from "../components/atoms/title";
import Card from "../components/atoms/card";
import Social from "../components/atoms/social";
import CopyEmail from "../components/atoms/email/copy";
import SendEmail from "../components/atoms/email/send";

import Header from "../components/molecules/header";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import style from "./index.module.scss";

const SMALL_PROJECTS = [
  {
    src: "/crypto.png",
    label: "Crypto Tracker",
  },
  {
    src: "/solar.png",
    label: "Solar System",
  },
  {
    src: "/chat.png",
    label: "Firebase Chat",
  },
  {
    src: "/weather.png",
    label: "Weather App",
  },
  {
    src: "/lunar.png",
    label: "Lunar Phases",
  },
  {
    src: "/github.png",
    label: "Github Resume",
  },
  {
    src: "/url.png",
    label: "Url Shortener",
  },
];
const WORK_EXPERIENCE = [
  {
    src: "/renault.png",
    label: "Renault",
  },
  {
    src: "/radley.png",
    label: "Radley",
  },
  {
    src: "/airbus.png",
    label: "Airbus",
  },
];
const SOCIALS = ["/github.svg", "/linkedin.svg"];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();

  const SKILLS = [
    {
      title: t("webIntegration"),
      items: ["/html5.svg", "/css3.svg"],
    },
    {
      title: "Front-end",
      items: [
        "/js.svg",
        "/react.svg",
        "/redux.svg",
        "/mobx.svg",
        "/handlebars.svg",
      ],
    },
    {
      title: "Back-end",
      items: ["/nodejs.svg"],
    },
    {
      title: t("contentManagement"),
      items: ["/aem.svg"],
    },
    {
      title: t("others"),
      items: [
        "/ts.svg",
        "/graphql.svg",
        "/jest.svg",
        "/nextjs.svg",
        "/mongodb.svg",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Section hasTopMargin>
        <div className={style.firstSection}>
          <Title title="Sullivan Tobias" />
          <Title title={t("position")} isHighlighted tag={2} />
          <Button href="about" label={t("getToKnowMe")} />
          <Button href="contact" isInvert label="Contact" />
        </div>

        <Icon src="/mountain.svg" height={200} width={200} />
      </Section>

      <Section isSmall id="about" hasTopMargin hasYPadding isInvert>
        <Title tag={2} isUnderlined isInvert title={t("titleAboutMe")} />

        <Paragraph isInvert>{t("firstAboutMe")}</Paragraph>
        <Paragraph isInvert>{t("secondAboutMe")}</Paragraph>
      </Section>

      <Section id="small" hasYPadding>
        <Title tag={2} isUnderlined title={t("titleSmallProjects")} />
        {SMALL_PROJECTS.map(({ src, label }) => (
          <Card key={label} src={src} label={label} />
        ))}
      </Section>

      <Section id="skills" hasYPadding isInvert>
        <Title tag={2} isInvert isUnderlined title={t("titleSkills")} />

        {SKILLS.map(({ title, items }) => (
          <div key={title} className={style.Skill}>
            <Title tag={3} isInvert title={title} />

            {items.map((item) => (
              <Icon key={item} width={50} height={50} src={item} />
            ))}
          </div>
        ))}
      </Section>

      <Section id="work" hasYPadding>
        <Title tag={2} isUnderlined title={t("titleWork")} />

        {WORK_EXPERIENCE.map(({ src, label }) => (
          <Card key={label} src={src} label={label} />
        ))}
      </Section>

      <Section id="social" hasYPadding>
        <Title tag={2} isUnderlined title={t("titleSocials")} />

        {SOCIALS.map((item) => (
          <Social key={item} icon={item} />
        ))}
      </Section>

      <Section id="contact" isInvert hasYPadding>
        <Title tag={2} isInvert isUnderlined title="Contact" />

        <CopyEmail />
        <SendEmail />
      </Section>
    </>
  );
};

export default Home;
