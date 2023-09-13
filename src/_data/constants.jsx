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
