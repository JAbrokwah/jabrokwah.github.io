import { motion } from "framer-motion";
import SkillElement from "./SkillElement";
import Stack from "@mui/material/Stack";

const SkillSection = ({ title, skills }) => {
  return (
    <motion.div className="skills">
      <p>{title}</p>
      <Stack direction="row" spacing={2}>
        {Object.keys(skills).map((skill) => {
          return (
            <SkillElement
              Icon={skills[skill].Icon}
              display={skills[skill].display}
              key={skills[skill].display}
            />
          );
        })}
      </Stack>
    </motion.div>
  );
};

export default SkillSection;
