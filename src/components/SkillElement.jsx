import { motion } from "framer-motion";

const SkillElement = ({ Icon, display }) => {
  return (
    // <img
    //   key={display}
    //   src={`../assets/images/skills/${skill}.svg`}
    //   alt={display}
    //   className="skill"
    // //   initial="closed"
    // //   animate="open"
    // //   whileHover={{ scale: 1.05 }}
    // />
    <motion.div whileHover={{ scale: 1.2 }}>
      <Icon className="skill" />
    </motion.div>
  );
};

export default SkillElement;
