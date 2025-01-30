import Benefits from "@/components/Benefits/Benefits";
import Cardapio from "@/components/Cardapio/Cardapio";
import Header from "@/components/Header/Header";
import ImageText from "@/components/ImageText/ImageText";
import Reviews from "@/components/Reviews/Reviews";
import client from "@/sanity";

export default async function Home() {
  // Buscando os dados diretamente dentro da função async
  const fetchedHeader = await client.fetch(`*[_type == "header"][0]`);
  const fetchedBenefits = await client.fetch(`*[_type == "benefits"][0..2]`);
  const fetchedAbout = await client.fetch(`*[_type == "about"][0]`);
  const fetchedCardapio = await client.fetch(`
    *[_type == "cardapio"][0..3]{
      _id,
      title,
      category,
      "image": image.asset->url
    }
  `);
  const fetchedReviews = await client.fetch(`*[_type == "reviews"][0..2]`);
  const fetchLocation = await client.fetch(`*[_type == "location"][0]`);

  return (
    <>
      <Header header={fetchedHeader} />
      <main>
        <Benefits benefits={fetchedBenefits} />
        <ImageText data={fetchedAbout} />
        <Cardapio cardapio={fetchedCardapio} />
        <Reviews reviews={fetchedReviews} />
        <ImageText data={fetchLocation} />
      </main>
    </>
  );
}
