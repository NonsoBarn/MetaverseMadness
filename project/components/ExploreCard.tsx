import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn } from "@/utils/motion/index";

type Props = {
  id: "string";
  imgUrl: "string";
  title: "string";
  index: any;
  active: "string";
  handleClick: any;
};

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0.0.5)">
          <div>
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
