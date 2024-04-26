import React, { FunctionComponent } from "react";
import { IExperience } from "../../type";
import Image from "next/image";

const ExperienceCard: FunctionComponent<{ experience: IExperience }> = ({
  experience: { Logo, company, position, year },
}) => {
  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 mb-4 sm:mb-0 text-left">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4 flex-shrink-0">
          <Image src={Logo} alt={company} width={48} height={48} />
        </div>
        <div>
          <h2 className="text-base font-semibold">{company}</h2>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">{year}</p>
    </div>
  );
};

export default ExperienceCard;
