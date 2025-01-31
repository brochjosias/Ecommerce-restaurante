import Benefits from "@/components/Benefits/Benefits";
import Cardapio from "@/components/Cardapio/Cardapio";
import Header from "@/components/Header/Header";
import ImageText from "@/components/ImageText/ImageText";
import Menu from "@/components/Menu/Menu";
import Reviews from "@/components/Reviews/Reviews";
import Footer from "@/components/Footer/Footer";
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
  const fetchMenu = await client.fetch(`*[_type == "menu"][0..19]`);
  const fetchFooter = await client.fetch(`
    *[_type == "footer"][0] {
      text,
      instagram,
      facebook,
      linkedin,
      links[] {
        _id,
        title,
        url
      },
      contato[] {
        _id,
        text
      }
    }
  `);

  return (
    <>
      <Header header={fetchedHeader} />
      <main>
        <Benefits benefits={fetchedBenefits} />
        <ImageText data={fetchedAbout} />
        <Cardapio cardapio={fetchedCardapio} />
        <Reviews reviews={fetchedReviews} />
        <ImageText data={fetchLocation} />
        <Menu menu={fetchMenu} />
        <Footer footer={fetchFooter} />
      </main>
    </>
  );
}
