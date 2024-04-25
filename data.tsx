import { IconType } from "react-icons";
import { GrPersonalComputer } from "react-icons/gr";

interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    title: "Front-End",
    about: "lorem....",
    Icon: GrPersonalComputer,
  },
  {
    title: "123",
    about: "lorem....",
    Icon: GrPersonalComputer,
  },
];
