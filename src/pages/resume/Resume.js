import ExperienceTimeline from "../../components/ExperienceTimeline";
import PageHeader from "../../components/PageHeader";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Experience" />
      {/* Button/Link for Resume */}
      {/* <p className="brand">{brand}</p> */}
      <ExperienceTimeline />
    </section>
  );
};

export default Resume;
