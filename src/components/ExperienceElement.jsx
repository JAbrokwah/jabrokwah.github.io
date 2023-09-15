import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceStyles, IconStyles } from "./ExperienceTimeline";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ExperienceElement = ({
  Icon,
  company,
  title,
  location,
  description,
  dates,
  category,
  skills = [],
  link = undefined,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={ExperienceStyles}
      contentArrowStyle={{ borderRight: "7px solid  rgb(72, 163, 198)" }}
      date={dates}
      iconStyle={IconStyles}
      icon={<Icon />}
    >
      {/* Skills per work experience */}
      {skills.length > 0 ? (
        <Grid
          container
          spacing={2}
          columns={skills.length / 2 + 1}
          justifyContent="flex-start"
          marginBottom="1%"
        >
          {skills.map((skill) => {
            return (
              <Grid item key={company + title + skill}>
                <Chip label={skill} title={skill} style={{ color: "white" }} />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
      {/* Experience details */}
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {company} • {location}
      </h4>
      <p>{description}</p>
      {link !== undefined ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Button
            href={link.url}
            target="_blank"
            variant="outlined"
            color="inherit"
            rel="noreferrer"
            style={{ margin: "5%" }}
          >
            {link.label}
          </Button>
        </div>
      ) : null}
    </VerticalTimelineElement>
  );
};

export default ExperienceElement;
