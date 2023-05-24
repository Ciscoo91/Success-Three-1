import {Link} from "react-scroll";
import { motion } from "framer-motion";
import { fade, delayedFade } from "../../helpers/transitions";

export default function Logo({ style }) {
  return (
    <motion.div
      className="logo-container"
      initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:.4,delay:1.7}}}
      >
      <Link to="hero" smooth={true} duration={800} offset={-100}>
        <img className="w-36 md:w-40 hover:cursor-pointer" src="images/success-three-logo-black.png" alt="logo of the company Success Three " />
      </Link>
    </motion.div>
  );
}
