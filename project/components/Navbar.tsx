import { motion } from "framer-motion";
import styles from "../styles/index";
import { navVariants } from "@/utils/motion/index";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={0}
          height={0}
          className="w-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px]leading-[30px] text-white">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={0}
          height={0}
          className="w-[24x]  object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
