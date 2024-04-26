import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  Icon: string | StaticImageData;
}

export interface IExperience {
  Logo: string | StaticImageData;
  company: string;
  position: string;
  year: string;
}
