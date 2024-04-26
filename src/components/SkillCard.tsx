import React, { FunctionComponent } from "react";
import { ISkill } from "../../type";
import Image from "next/image";

const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { Icon },
}) => {
  return (
    <div className="flex gap-2 justify-center mb-4">
      <Image src={Icon} alt="icon" width={48} height={48} />
    </div>
  );
};

export default SkillCard;
