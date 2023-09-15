import DownloadResumeButton from "../../components/DownloadResumeButton";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import PageHeader from "../../components/PageHeader";

const Resume = () => {
  return (
    <section className="resume container">
      <PageHeader title="Experience" />
      {/* Button/Link for Resume */}
      <DownloadResumeButton />
      {/* Vertical Timeline of Experiences */}
      <ExperienceTimeline />
    </section>
  );
};

export default Resume;
