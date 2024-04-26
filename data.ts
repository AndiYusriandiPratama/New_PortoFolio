import { IService } from "./type";
import {
  GrPersonalComputer,
  GrPaint,
  GrDatabase,
  GrSystem,
  GrBusinessService,
} from "react-icons/gr";

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
