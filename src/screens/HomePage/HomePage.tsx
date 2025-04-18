import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Services } from "../../components/Services";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
};
