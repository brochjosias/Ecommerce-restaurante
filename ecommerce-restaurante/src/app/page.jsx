import Header from "@/components/Header/Header";
import client from "@/sanity";

export default async function Home({ header }) {
  const fetchedHeader = await client.fetch(`*[_type == "header"][0]`);

  console.log(fetchedHeader);

  return (
    <main>
      <Header header={fetchedHeader} />
    </main>
  );
}
