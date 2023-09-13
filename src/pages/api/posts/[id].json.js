export async function GET({ params }) {
  const posts = await fetch("http://localhost:4321/api/posts.json");
  const json = await posts.json();
  const id = params.id - 1;
  return {
    body: JSON.stringify([
      {
        post: json[0].data[id],
      },
    ]),
  };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:4321/api/posts.json");
  const dataJson = await data.json();
  return dataJson.posts.map((post, i) => {
    return {
      params: { id: post.id },
    };
  });
}
