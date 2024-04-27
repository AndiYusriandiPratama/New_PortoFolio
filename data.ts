import { IExperience, IProject, IService, ISkill } from "./type";
import {
  GrPersonalComputer,
  GrPaint,
  GrDatabase,
  GrSystem,
  GrBusinessService,
} from "react-icons/gr";
import UpworkLogo from "./public/logo_upwork.webp";
import PurwadhikaLogo from "./public/logo_purwadhika.webp";
import DicodingLogo from "./public/logo_dicoding.webp";
import CodepolitanLogo from "./public/Codepolitan.webp";
import ProjectLogo from "./public/project.webp";
import UnhasLogo from "./public/logo_unhas.png";
import HtmlLogo from "./public/logo_skill/html.svg";
import CssLogo from "./public/logo_skill/css.svg";
import JsLogo from "./public/logo_skill/javascript.svg";
import NodeLogo from "./public/logo_skill/node.svg";
import ReactLogo from "./public/logo_skill/react.svg";
import ReduxLogo from "./public/logo_skill/redux.svg";
import ExpressLogo from "./public/logo_skill/express.svg";
import MongoDbLogo from "./public/logo_skill/mongodb.svg";
import MySqlLogo from "./public/logo_skill/mysql.svg";
import TailwindLogo from "./public/logo_skill/tailwind.svg";
import BootstrapLogo from "./public/logo_skill/bootstrap.svg";
import PythonLogo from "./public/logo_skill/python.svg";
import BakulanImage from "./public/Project_image/Bakulan.png";
import RenafinImage from "./public/Project_image/Renafin.png";
import EventopiaImage from "./public/Project_image/Eventopia.png";
import DandelionImage from "./public/Project_image/Dandelion.png";

export const services: IService[] = [
  {
    Icon: GrPersonalComputer,
    title: "Front-End",
    about:
      "I Use <b>NextJs</b>, <b>Tailwind</b>, and <b>State Management</b> for make a Project.",
  },
  {
    Icon: GrDatabase,

    title: "Back-End",
    about:
      "I Use <b>ExpressJs</b>, <b>Mysql</b>, <b>MongoDb</b>, <b>Firebase</b>, <b>Sequelize</b>, and <b>Midtrans</b>.",
  },
  {
    Icon: GrSystem,
    title: "Machine Learning",
    about:
      "I understand a little about machine learning, especially <b>SVM</b> and <b>K-NN</b>.",
  },
  {
    Icon: GrPaint,
    title: "Designer",
    about:
      "Skill Design with <b>Photoshop</b>, <b>Corel Draw</b>, and <b>Figma</b>.",
  },
  {
    Icon: GrBusinessService,
    title: "Other",
    about:
      "I work with data processing such as <b>Excel</b>, <b>Word</b>, and <b>Python</b>.",
  },
];

export const skills: ISkill[] = [
  {
    Icon: HtmlLogo,
  },
  {
    Icon: CssLogo,
  },
  {
    Icon: JsLogo,
  },
  {
    Icon: NodeLogo,
  },
  {
    Icon: ReactLogo,
  },
  {
    Icon: TailwindLogo,
  },
  {
    Icon: BootstrapLogo,
  },
  {
    Icon: ReduxLogo,
  },
  {
    Icon: ExpressLogo,
  },
  {
    Icon: MongoDbLogo,
  },
  {
    Icon: MySqlLogo,
  },
  {
    Icon: PythonLogo,
  },
];

export const experiences: IExperience[] = [
  {
    Logo: UnhasLogo,
    company: "Hasanuddin University",
    position: "Pyhsics",
    year: "2015 - 2022",
  },
  {
    Logo: PurwadhikaLogo,
    company: "Purwadhika Digital Tech School",
    position: "Fullstack Web Developer Student Intership",
    year: "July 2023 - Jan 2024",
  },
  {
    Logo: CodepolitanLogo,
    company: "Codepolitan",
    position: "Kelas Fullstack",
    year: "Oct 2022 - Present",
  },
  {
    Logo: DicodingLogo,
    company: "BDT Dicoding FE and BE",
    position: "Web Developer Student",
    year: "Feb 2024 - Present",
  },
  {
    Logo: DicodingLogo,
    company: "Dicoding X DBS Foundation",
    position: "Machine Learning Developer Student",
    year: "Jan 2024 - April 2024",
  },
  {
    Logo: UpworkLogo,
    company: "Upword",
    position: "Web Developer & Data Entry/Analis",
    year: "July 2023 - Present",
  },
  {
    Logo: ProjectLogo,
    company: "Project.co.id",
    position: "Web Developer & Data Entry/Analis",
    year: "Oct 2023 - Present",
  },
];

export const projects: IProject[] = [
  {
    name: "Bakulan App",
    description:
      "Bakulan App: Modern cashier solution for efficient and seamless.",
    tech: [
      "NextJS",
      "TailwindCSS",
      "ExpressJS",
      "TypeScript",
      "Mysql/Sequelize",
    ],
    image_path: BakulanImage,
    frond_end_url: "https://github.com/DANG-Coorporation/bakulan-web",
    back_end_url: "https://github.com/DANG-Coorporation/bakulan-api",
  },
  {
    name: "Eventopia",
    description: "Eventopia: Your all-in-one web event management solution.",
    tech: [
      "NextJS",
      "TailwindCSS",
      "ExpressJS",
      "TypeScript",
      "Mysql/Sequelize",
    ],
    image_path: EventopiaImage,
    frond_end_url: "https://github.com/DANG-Coorporation/eventopia-web",
    back_end_url: "https://github.com/DANG-Coorporation/eventopia-api",
  },
  {
    name: "Renafin App",
    description:
      "Renafin App: Booking App with Oauth2 and Midrans for transaction",
    tech: [
      "NextJS",
      "TailwindCSS",
      "ExpressJS",
      "Midtrans",
      "Oauth2",
      "Mysql/Sequelize",
    ],
    image_path: RenafinImage,
    frond_end_url:
      "https://github.com/AndiYusriandiPratama/JCWDOL01105/tree/main/packages/client",
    back_end_url:
      "https://github.com/AndiYusriandiPratama/JCWDOL01105/tree/main/packages/server",
  },
  {
    name: "Dandelion Shop",
    description: "online musical instrument shop",
    tech: ["ReactJS", "boostrap", "ExpressJS"],
    image_path: DandelionImage,
    frond_end_url: "https://github.com/AndiYusriandiPratama/client-dandelion",
    back_end_url: "https://github.com/AndiYusriandiPratama/server-dandelion",
  },
];
