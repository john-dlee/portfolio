import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground mx-auto max-w-xl px-6 py-20 flex flex-col gap-16">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
