import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";

export default function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:bg-slate-900 dark:text-slate-100">
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </div>
  );
}
