import * as React from "react";
import { motion } from "framer-motion";
import SkillElement from "./SkillElement";
import Grid from "@mui/material/Grid";

const SkillSection = ({ title, skills }) => {
  return (
    <motion.div className="skills">
      <p className="skillsTitle">{title}</p>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.keys(skills).map((skill) => {
          return (
            <Grid item xs={2} md={2} key={skills[skill].display}>
              <SkillElement
                key={skills[skill].display}
                Icon={skills[skill].Icon}
                display={skills[skill].display}
              />
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
};

export default SkillSection;
