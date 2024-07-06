import { appTitle } from "@/shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Frontend Developer",
};

const Home = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header>
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              repellendus facere modi similique quibusdam quisquam soluta.
              Officiis iure consequatur pariatur quos? Dolorum quia molestias,
              eligendi doloribus earum odit expedita amet?
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Home;
