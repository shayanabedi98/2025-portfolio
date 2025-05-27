import ScrollTo from "./ScrollTo";
import SubHeading from "./SubHeading";

function CertItem({
  image,
  title,
  description,
  institution,
}: {
  image: string;
  title: string;
  description: string;
  institution: string;
}) {
  return (
    <div className="item flex items-center gap-3">
      <img
        src={image}
        alt={`Institution logo - ${institution}`}
        className="rounded-full object-cover h-9 w-9"
      />
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p className="text-neutral">{description}</p>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <div className="margin relative">
      <ScrollTo targetId="certifications" />
      <SubHeading content="Certifications" />
      <div className="flex max-sm:flex-col gap-4">
        <CertItem
          description="Certified Associate in Project Management • 2024"
          title="PMI CAPM"
          institution="PMI"
          image="https://images.credly.com/images/31da017a-a50c-48a8-8012-c4811063581f/blob.png"
        />
        <CertItem
          description="Professional Certificate • Codecademy • 2024"
          title="Frontend Engineer"
          institution="Codecademy"
          image="https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/CC-logo-short.png?w=1000"
        />
      </div>
    </div>
  );
}
