import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export async function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: "/images/bryen_6.png",
          width: 1280,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2026-11-20"
        >
          20/11/2026 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet.
        </PostHeading>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          necessitatibus soluta, ipsa explicabo voluptatum ducimus reprehenderit
          nobis, sequi possimus aliquam tempore, facere numquam quia? Dolore
          impedit accusamus sunt iusto atque.
        </p>
      </div>
    </section>
  );
}
