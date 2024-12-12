import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Snippet,
} from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import { Logo } from "@/components/icons";
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
            <Logo size={240} />
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
