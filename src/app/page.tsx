import { Button } from "@/components/ui/button";
import { Combine, Globe, Truck } from "lucide-react";

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

      <section className="container pt-10">
        <h1 className="md:hidden text-lg mb-5">Nexton® always with you</h1>
        <div className="flex items-center gap-4 overflow-x-scroll scrollbar-hide md:overflow-x-auto md:border md:p-6 md:rounded-xl">
          <div className="flex flex-1 items-center gap-2 whitespace-nowrap">
            <div className="mr-1">
              <Truck />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold">
                Free shipping
              </h2>
              <p className="hidden md:block font-light text-gray-800 dark:text-gray-200">
                On orders over $50.00
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 whitespace-nowrap md:border-l md:border-gray-200 md:pl-5">
            <div className="mr-1">
              <Combine />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold">
                Very easy to return
              </h2>
              <p className="hidden md:block font-light text-gray-800 dark:text-gray-200">
                Just phone number
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 whitespace-nowrap md:border-l md:border-gray-200 md:pl-5">
            <div className="mr-1">
              <Globe />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold">
                Worldwide delivery
              </h2>
              <p className="hidden md:block font-light text-gray-800 dark:text-gray-200">
                Fast delivery worldwide
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 whitespace-nowrap md:border-l md:border-gray-200 md:pl-5">
            <div className="mr-1">
              <Truck />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold">
                Refunds policy
              </h2>
              <p className="hidden md:block font-light text-gray-800 dark:text-gray-200">
                60 days return for any reason
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
