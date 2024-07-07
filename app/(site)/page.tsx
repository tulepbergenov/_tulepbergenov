import { ThemeToggler } from "@/features/ThemeToggler";
import { appTitle } from "@/shared/lib";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Frontend Developer",
};

const Home = () => {
  return (
    <section>
      <div className="container sm:max-w-screen-sm">
        <div className="py-10">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <Balancer>Daulet Tulepbergenov</Balancer>
            </h1>
            <ThemeToggler />
          </header>
          <div>
            <hr className="my-3" />
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <hr className="my-3" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
