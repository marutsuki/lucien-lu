import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Snippet,
} from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center">
        <Card>
          <CardHeader className="flex flex-col items-start">
            <h1 className="text-xl">Lucien Lu</h1>
            <h2>marutsuki</h2>
          </CardHeader>
          <CardBody>
            <Divider />
            <Image
              alt="logo"
              className="dark:invert"
              src="/marutsuki.png"
              width={240}
            />
            <h2 className="font-semibold">Email</h2>
            <Snippet>lucien.7789@gmail.com</Snippet>
            <h2 className="font-semibold">Phone</h2>
            <Snippet>+61 468435818</Snippet>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
