import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "@/components/";
import styles from "../styles/index";
import { staggerContainer } from "@/utils/motion/index";
import { ExploreWorldsType, exploreWorlds } from "@/constants";
// import World from "./World";

type Props = {};

function Explore({}: Props) {
  const [active, setActive] = useState<string>("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title="Choose the world you want
              to explore"
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world: ExploreWorldsType, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
