import React, { FunctionComponent } from "react";
import { IService } from "../../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="p-2 flex items-center space-x-4 px-6 dark:text-black">
      <Icon className="w-12 h-12 text-blue-500" />
      <div>
        <h4 className="font-bold  text-left">{title}</h4>
        <p className="text-justify" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
