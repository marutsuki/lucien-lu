import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center">
        <h1 className="font-display text-5xl mb-2">Lucien Lu</h1>
        <h4 className="font-bold text-sm">24, Male, He/Him</h4>
        <p className="text-tiny uppercase font-bold">East Asian</p>
        <small className="text-default-500">Software Engineer</small>
        <Image
          alt="main card photo"
          className="object-cover rounded-xl my-8"
          src="/photos/photo_1.jpeg"
          width={270}
        />
        <div>
          <p className="text-center">5&apos;9&quot; • 65kg</p>
          <small className="text-sm text-default-500">
            B: 83cm • W: 65cm • H: 82cm
          </small>
        </div>
        <Link className="mt-12 text-xl underline" to="/gallery">
          Gallery
        </Link>
      </section>
    </DefaultLayout>
  );
}
