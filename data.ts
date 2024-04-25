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
    title: "Front-End",
    about: "I Use NextJs, Tailwind, and State Management for make a Project",
    Icon: GrPersonalComputer,
  },
  {
    title: "Back-End",
    about:
      "I Use ExpressJs, Mysql, MongoDb, Firebase, Sequelize, Midtrans, and other popular framewors for handle databases",
    Icon: GrDatabase,
  },
  {
    title: "Machine Learning",
    about:
      "I understand a little about machine learning, especially SVM and KNN methods",
    Icon: GrSystem,
  },
  {
    title: "Designer",
    about: "Skill Design with Photoshop, Corel Draw, and Figma",
    Icon: GrPaint,
  },
  {
    title: "Other",
    about:
      "I have worked several times with data processing such as Excel, Word, Python",
    Icon: GrBusinessService,
  },
];
