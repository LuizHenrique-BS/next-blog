import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
          />
        </Link>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          doloremque corrupti dignissimos neque beatae et itaque eius iusto
          facilis quia. Non in repellendus harum voluptates obcaecati sint
          accusamus corrupti ex corporis nostrum voluptate ipsum autem sed
          reiciendis, iusto aliquam eaque delectus veritatis beatae accusantium
          odio deleniti pariatur vel nulla? Dolorum?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
