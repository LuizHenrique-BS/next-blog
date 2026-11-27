import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

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
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={"2025-04-08T00:24:38.616Z"}
        excerpt="O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
        title={"Rotina matinal de pessoas altamente eficazes"}
      />
    </section>
  );
}
