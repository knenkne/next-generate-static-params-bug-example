export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default async function Page({ params }: { params: { id: string } }) {
  console.count(`generateStaticParams ${params.id}`);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 10 } },
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div>
        {data.title}
        {data.body}
    </div>
  );
}