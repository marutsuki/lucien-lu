import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen font-text">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 pt-16">{children}</main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}
