import resumePDF from "../assets/files/resume.pdf";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadResumeButton = () => {
  return (
    <Button
      href={resumePDF}
      target="_blank"
      variant="contained"
      rel="noreferrer"
      startIcon={<DownloadIcon />}
      size="large"
      style={{ marginBottom: "5%" }}
    >
      View Resume
    </Button>
  );
};

export default DownloadResumeButton;
