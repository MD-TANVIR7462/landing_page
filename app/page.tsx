import Banner from "@/components/Banner/Banner";
import { Reviews } from "@/components/Reviews/Reviews";

import Showcase from "@/components/ShowCase";

export default function Home() {
  return (
    <main className="max-w-6xl  mx-auto px-3 " >
      <Banner />
      <Showcase/>
      <Reviews/>
    </main>
  );
}