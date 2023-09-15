import { ReactComponent as PythonIcon } from "../assets/images/skills/python.svg";
import { ReactComponent as JavaIcon } from "../assets/images/skills/java.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/images/skills/javascript.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/images/skills/typescript.svg";
import { ReactComponent as ReactIcon } from "../assets/images/skills/react.svg";
import { ReactComponent as GraphQLIcon } from "../assets/images/skills/graphql.svg";
import { ReactComponent as NodejsIcon } from "../assets/images/skills/nodejs.svg";
import { ReactComponent as BackbonejsIcon } from "../assets/images/skills/backbone.svg";
import { ReactComponent as GitIcon } from "../assets/images/skills/git.svg";
import { ReactComponent as PostmanIcon } from "../assets/images/skills/postman.svg";
import { ReactComponent as CircleCIIcon } from "../assets/images/skills/circleci.svg";
import { ReactComponent as TravisCIIcon } from "../assets/images/skills/travisci.svg";
import { ReactComponent as MongoDBIcon } from "../assets/images/skills/mongodb.svg";
import { ReactComponent as MySQLIcon } from "../assets/images/skills/mysql.svg";
import { ReactComponent as PostgreSQLIcon } from "../assets/images/skills/postgresql.svg";
import { ReactComponent as MSOfficeIcon } from "../assets/images/skills/msoffice.svg";
import { ReactComponent as TennisIcon } from "../assets/images/skills/tennis.svg";

import { ReactComponent as OktaIcon } from "../assets/images/companies/okta.svg";
import { ReactComponent as LTIIcon } from "../assets/images/companies/lti.svg";
import { ReactComponent as UHNIcon } from "../assets/images/companies/uhn.svg";
import { ReactComponent as RBCIcon } from "../assets/images/companies/rbc.svg";
import { ReactComponent as JFCTAIcon } from "../assets/images/skills/tennis.svg";
import { ReactComponent as UoftIcon } from "../assets/images/companies/uoft.svg";

export const SKILLS = {
  "Languages & Frameworks": {
    python: {
      display: "Python",
      Icon: PythonIcon,
    },
    java: {
      display: "Java",
      Icon: JavaIcon,
    },
    javascript: {
      display: "JavaScript",
      Icon: JavaScriptIcon,
    },
    typescript: {
      display: "TypeScript",
      Icon: TypeScriptIcon,
    },
    react: {
      display: "React",
      Icon: ReactIcon,
    },
    graphql: {
      display: "GraphQL",
      Icon: GraphQLIcon,
    },
    nodejs: {
      display: "Node.js",
      Icon: NodejsIcon,
    },
    backbonejs: {
      display: "Backbone.js",
      Icon: BackbonejsIcon,
    },
  },
  Tools: {
    git: {
      display: "git",
      Icon: GitIcon,
    },
    postman: {
      display: "Postman",
      Icon: PostmanIcon,
    },
    circleci: {
      display: "CircleCI",
      Icon: CircleCIIcon,
    },
    travisci: {
      display: "Travis CI",
      Icon: TravisCIIcon,
    },
  },
  Databases: {
    mongodb: {
      display: "MongoDB",
      Icon: MongoDBIcon,
    },
    mysql: {
      display: "MySQL",
      Icon: MySQLIcon,
    },
    postgresql: {
      display: "PostgreSQL",
      Icon: PostgreSQLIcon,
    },
  },
  Other: {
    msoffice: {
      display: "Microsoft Office",
      Icon: MSOfficeIcon,
    },
    tennis: {
      display: "Tennis Coaching",
      Icon: TennisIcon,
    },
  },
};

export const EXPERIENCES = {
  okta: {
    Icon: OktaIcon,
    company: "Okta, Inc.",
    title: "Software Engineer II",
    location: "Toronto, ON",
    description: "Operating as a full-stack developer to aid delivery of new features and bug fixes for Okta customers. Some features include: Progressive Profile Enrolment, MyAccount API.",
    dates: "May 2021 - Present",
    category: "fulltime",
    skills: ["Full-Stack Development", "Java", "Python", "Agile", "JavaScript"],
  },
  uoft: {
    Icon: UoftIcon,
    company: "University of Toronto",
    title: "Honours Bachelor of Science, High Distinction",
    location: "Toronto, ON",
    description:
      "Undergraduate Degree in Computer Science, Specialist in Software Engineering. cGPA: 3.5/4.0.",
    dates: "September 2016 - June 2021",
    category: "education",
    skills: [],
  },
  oktaInternship: {
    Icon: OktaIcon,
    company: "Okta, Inc.",
    title: "Software Engineer Internship",
    location: "Toronto, ON",
    description: "Built Python SDK for the Okta Management API, released in October 2020. Incorporates OpenAPI spec used to keep API Endpoints updated, and Handlebars.js for code generation.",
    link: {
      label: "Okta Python Management SDK • Github",
      url: "https://github.com/okta/okta-sdk-python",
    },
    dates: "May 2020 - August 2020",
    category: "internship",
    skills: [
      "Python",
      "OpenAPI Specification (OAS)",
      "Open-Source Software",
      "SDK development",
      "JavaScript",
    ],
  },
  lti: {
    Icon: LTIIcon,
    company: "Larsen & Toubro Infotech Canada",
    title: "Software Engineer II",
    location: "Mississauga, ON",
    description:
      "Migrated & developed RESTful API’s using MuleSoft; Mule 4 and RESTful API Modeling Language (RAML). Designed & implemented a JSON wrapper for existing SOAP web services used by clients to update their customer information",
    dates: "May 2019 - August 2019",
    category: "internship",
    skills: [
      "Mulesoft",
      "RAML",
      "API Development",
      "REST APIs",
      "SOAP APIs",
      "Python",
    ],
  },
  uhn: {
    Icon: UHNIcon,
    company: "University Health Network",
    title: "Software Developer Coop",
    location: "Toronto, ON",
    description:
      "Developed RESTful and web services in Java using Spring Boot (JAX-RS and JAX-WS) for production use. Produced RESTful web service using Apache Camel, deployed into JBoss Fuse Utilized SOAPUI and Postman to test web services",
    dates: "September 2018 - December 2018",
    category: "internship",
    skills: [
      "Java",
      "REST API Development",
      "Clojure",
      "Spring Boot",
      "Postman",
    ],
  },
  rbc: {
    Icon: RBCIcon,
    company: "Royal Bank of Canada",
    title: "QE Automation Analyst Coop",
    location: "Toronto, ON",
    description:
      "Scheduled automated test builds with Jenkins while maintaining & reforming automation scripts in Python. Performed upkeep on internal web application for Automation team using Python & Django, integrated with MongoDB.",
    dates: "January 2018 - April 2018",
    category: "internship",
    skills: ["Python", "Selenium", "SOAPUI", "Jenkins"],
  },
  jfcta: {
    Icon: JFCTAIcon,
    company: "Jane/Finch Community Tennis Association",
    title: "Summer/Winter League Head Coach",
    location: "Toronto, ON",
    description:
      "Coach kids from ages 6-17, adults as well. Develop lesson plans based on strengths/weaknesses of participants. Mentor assistant coaches by providing them opportunities to lead drills/activities, and providing feedback to improve their coaching.",
    dates: "March 2014 - Present",
    category: "other",
    skills: [
      "Tennis Instruction",
      "Lesson Planning",
      "Working With Children",
      "Team Management",
    ],
  },
};
