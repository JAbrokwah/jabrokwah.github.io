import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "../_data/constants";
import ExperienceElement from "./ExperienceElement";
import StarIcon from '@mui/icons-material/Star';

export const ExperienceStyles = { background: "rgb(72, 163, 198)", color: "#fff" };
export const IconStyles = { background: "#fff", color: "#fff" };
/**
 * Represents the timeline component containing work experience.
 *
 * @component
 */
const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      {Object.keys(EXPERIENCES).map((exp) => {
        const value = EXPERIENCES[exp];

        return (
          <ExperienceElement
            key={exp}
            Icon={value.Icon}
            company={value.company}
            title={value.title}
            location={value.location}
            description={value.description}
            dates={value.dates}
            category={value.category}
            skills={value.skills}
            link={value.link}
          />
        );
      })}
      <VerticalTimelineElement
        iconStyle={ExperienceStyles}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
