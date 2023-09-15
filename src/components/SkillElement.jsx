import { motion } from "framer-motion";

const SkillElement = ({ Icon, display }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className="tooltip">
      <Icon className="skill" />
      <span className="tooltiptext">{display}</span>
    </motion.div>
  );
};

export default SkillElement;
