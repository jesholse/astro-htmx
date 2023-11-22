

export const prerender = true;
const res = await fetch("https://dumpen.se/wp-json/wp/v2/posts")
const posts = await res.json()
console.log(posts)
export async function GET({ params }) {
  return new Response(JSON.stringify([
      {
        data: posts,
      },
    ]),
  );
}
