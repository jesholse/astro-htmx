export const prerender = false;
export async function GET({ params }) {
  const posts = await fetch("http://localhost:4321/api/posts");
  const json = await posts.json();
  const id = params.id - 1;
  console.log(params)
  return new Response(JSON.stringify({
          post: json,
  }))
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:4321/api/posts");
  const dataJson = await data.json();
  console.log(slug)
  return dataJson.posts.map((post, i) => {
    return {
      params: { slug: post.slug },
    };
  });
}
