import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutMeImg from "../assets/images/memoji-wave.png";
import { SKILLS } from "../_data/constants";
import SkillSection from "./SkillSection";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // shortcut for highlighting text
  const specialText =  (text) => {
    return <span style={{ color: "var(--hl-color)" }}>{text}</span>
  };

  return (
    <section className="about" id="about-me">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                Welcome to my website! 👋🏾
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                I'm a Software Engineer.
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  My name is Justin Abrokwah and I'm on this journey called life. By profession, 
                  I do {specialText("full-stack software development")} and enjoy innovation in the tech space. The problem-solving aspect of coding is my favourite thing
                  about it; there are multiple ways to do the same thing and that allows for a plethora of solutions to various problems. My career started when I
                  took an intro to CS course in grade 11 and I haven't looked back since. In 2021, I graduated from the {specialText("University of Toronto")} with an undergraduate degree in 
                  {specialText(" Computer Science")} with a {specialText("specialization in Software Engineering")}.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  I'm planning to start my Masters journey in Fall 2024 with a focus on {specialText("Machine Learning")}. This field piques
                  my interest because of the potential of innovation it provides, and due to its ability to turn data into
                  something useful. Machine Learning is and will be an influential concept within our society.
                  <br />
                  At the moment, I'm unsure of what my end goal is but I want to equip myself as well as possible for whatever I pursue. I love to learn
                  and experiment with new techonologies and ideas, which is leading to contributing via {specialText("open-source development")} or side projects of my own
                  or with friends/colleagues.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Outside of work, I am a huge fan of professional sports. I have been coaching tennis in the Jane/Finch community in Toronto since 2014,
                  it's a pleasure to give back to the community program that helped mold me for success. My favourite sports are
                  {specialText(" Basketball")}, {specialText("Tennis")} and {specialText("Soccer")}!
                  Big fan of playing and watching each sport. Huge {specialText("Toronto Raptors")} and {specialText("Arsenal ")}
                  fan, #WeTheNorth #COYG.<br />
                  Favourite TV Shows 📺: Atlanta, The Wire, and Ted Lasso.<br />
                  Favourite Movies 🎞️: Inception, John Q, and all the Spider-Man films.<br />
                  Favourite Video Games 🎮: Football Manager, FIFA, Spider-Man video games, and TellTale games.<br />
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            className="col"
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div className="contentContainer" variants={staggerVariants}>
              <motion.h5 variants={paragraphVariants}>Skills</motion.h5>
              {Object.keys(SKILLS).map((category) => {
                return (
                  <SkillSection
                    title={category}
                    skills={SKILLS[category]}
                    key={category}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
