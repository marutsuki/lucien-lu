import { Divider } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center">
        <h2 className="text-lg font-semibold">Background</h2>
        <p>East Asian, Chinese</p>
        <p>Moved to Melbourne, Australia at the age of 3</p>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Occupation</h2>
        <p>Software Engineer</p>
        <p>Full-stack Developer</p>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Education</h2>
        <p>Camberwell Grammar</p>
        <p>The University of Melbourne</p>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Languages</h2>
        <ul className="flex flex-col items-center">
          <li>English • Native proficiency</li>
          <li>Japanese • Elementary proficiency</li>
          <li>Chinese • Elementary proficiency</li>
        </ul>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Interests</h2>
        <p>Digital Art, Art & Design</p>
        <p>Music, Singing, Guitar/Piano</p>
        <p>Fashion</p>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Measurements</h2>
        <p className="text-center">5&apos;9&quot; • 65kg</p>
        <p className="text-center">B: 83cm • W: 65cm • H: 82cm</p>
        <Divider className="m-4" />
        <h2 className="text-lg font-semibold">Fashion & Style</h2>
        <p className="text-center">Korean Streetwear</p>
        <p className="text-center">Japanese Streetwear</p>
      </section>
    </DefaultLayout>
  );
}
