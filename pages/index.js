import Button from "../components/button";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";

export default function Home() {
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
      </Section>
    </>
  );
}
