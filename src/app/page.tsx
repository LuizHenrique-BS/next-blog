import { Suspense } from "react";
import { postRepository } from "@/repositories/post";
import { SpinLoader } from "@/components/SpinLoader";

async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </>
  );
}
