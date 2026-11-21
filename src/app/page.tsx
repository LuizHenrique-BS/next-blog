import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            src: "/images/bryen_6.png",
            width: 1280,
            height: 720,
            alt: "Alt da imagem",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2026-11-20">
            20/11/2026 10:00
          </time>

          <PostHeading url="#" as="h1">
            Lorem ipsum dolor sit amet.
          </PostHeading>

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
