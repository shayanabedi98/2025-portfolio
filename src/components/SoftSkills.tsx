export default function SoftSkills() {
  return (
    <div className="margin relative">
      <ScrollTo targetId="soft" />
      <SubHeading content="Soft Skills" />
      <div className="flex gap-4">
        <SoftSkillItem
          description="Strong communicator who works seamlessly across tech and non-tech teams. Experienced in balancing business needs with scalable technical execution."
          title="Communication & Collaboration"
        />
        <SoftSkillItem
          description="Highly adaptive and thrives in fast-changing stacks and Agile environments. Honest, direct, and detail-oriented problem solver."
          title="Adaptability & Problem Solving"
        />
      </div>
    </div>
  );
}

import ScrollTo from "./ScrollTo";
import SubHeading from "./SubHeading";

function SoftSkillItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="item flex flex-col gap-3">
      <h3>{title}</h3>
      <p className="text-neutral">{description}</p>
    </div>
  );
}
