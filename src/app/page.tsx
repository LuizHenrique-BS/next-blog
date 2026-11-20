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
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2026-11-20">
            20/11/2026 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet consectetur.</Link>
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            necessitatibus soluta, ipsa explicabo voluptatum ducimus
            reprehenderit nobis, sequi possimus aliquam tempore, facere numquam
            quia? Dolore impedit accusamus sunt iusto atque.
          </p>
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
