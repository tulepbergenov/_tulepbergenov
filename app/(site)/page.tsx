import { appTitle } from "@/shared/lib";
import { HomeHero } from "@/widgets/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Frontend Developer",
};

const Home = () => {
  return (
    <section>
      <div className="container sm:max-w-screen-sm">
        <div className="py-10">
          <HomeHero />
        </div>
      </div>
    </section>
  );
};

export default Home;
