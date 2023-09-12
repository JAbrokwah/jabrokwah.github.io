import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/mdyeates/my-portfolio">
        <p>
          <span>▷</span> Designed and built by Michael Yeates &copy; {currentYear}
        </p>
      </a>
    </footer>
  );
};

export default Footer;
