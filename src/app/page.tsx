import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
          ut incidunt officia explicabo libero praesentium, aliquid dolore
          recusandae cumque sapiente, ipsam delectus soluta ex nobis sit quam,
          quod assumenda? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit animi ut incidunt officia explicabo libero praesentium,
          aliquid dolore recusandae cumque sapiente, ipsam delectus soluta ex
          nobis sit quam, quod assumenda? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Velit animi ut incidunt officia explicabo libero
          praesentium, aliquid dolore recusandae cumque sapiente, ipsam delectus
          soluta ex nobis sit quam, quod assumenda?
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
