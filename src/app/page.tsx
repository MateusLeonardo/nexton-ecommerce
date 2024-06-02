import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="h-[70vh] bg-none md:bg-cover md:bg-center md:bg-[url('/homebg.png')] flex justify-start items-center">
        <div className="container">
          <span className="block text-lg font-semibold mb-2">
            Starting from: $49.99
          </span>
          <h1 className="text-2xl md:text-6xl font-bold mb-4 max-w-2xl">
            Exclusive collection for everyone
          </h1>
          <Button className="py-4 px-6">Explore now</Button>
        </div>
      </section>
    </main>
  );
}
