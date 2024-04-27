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

export interface IProject {
  name: string;
  description: string;
  tech: string[];
  image_path: string | StaticImageData;
  frond_end_url: string;
  back_end_url: string;
}
