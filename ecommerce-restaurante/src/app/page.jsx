import Benefits from "@/components/Benefits/Benefits";
import Cardapio from "@/components/Cardapio/Cardapio";
import Header from "@/components/Header/Header";
import ImageText from "@/components/ImageText/ImageText";
import Menu from "@/components/Menu/Menu";
import Reviews from "@/components/Reviews/Reviews";
import Footer from "@/components/Footer/Footer";
import client from "@/sanity";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  const fetchedHeader = await client.fetch(`*[_type == "header"][0]`, {
    cache: "no-store",
    next: { revalidate: 3 },
  });
  const fetchedBenefits = await client.fetch(`*[_type == "benefits"][0..2]`, {
    cache: "no-store",
    next: { revalidate: 3 },
  });
  const fetchedAbout = await client.fetch(`*[_type == "about"][0]`, {
    cache: "no-store",
    next: { revalidate: 3 },
  });
  const fetchedCardapio = await client.fetch(
    `
    *[_type == "cardapio"][0..3]{
      _id,
      title,
      category,
      "image": image.asset->url
    }
  `,
    {
      cache: "no-store",
      next: { revalidate: 3 },
    }
  );
  const fetchedReviews = await client.fetch(`*[_type == "reviews"][0..9]`, {
    cache: "no-store",
    next: { revalidate: 4 },
  });
  const fetchLocation = await client.fetch(`*[_type == "location"][0]`, {
    cache: "no-store",
    next: { revalidate: 3 },
  });
  const fetchMenu = await client.fetch(`*[_type == "menu"][0..19]`, {
    cache: "no-store",
    next: { revalidate: 3 },
  });
  const fetchFooter = await client.fetch(
    `
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
  `,
    {
      cache: "no-store",
      next: { revalidate: 3 },
    }
  );

  return (
    <>
      <Navbar />
      <Header header={fetchedHeader} />
      <main>
        <Benefits benefits={fetchedBenefits} />
        <ImageText data={fetchedAbout} id="about" />
        <Cardapio cardapio={fetchedCardapio} />
        <div id="reviews">
          <Reviews reviews={fetchedReviews} />
        </div>
        <ImageText data={fetchLocation} id="location" />
        <Menu menu={fetchMenu} />
        <Footer footer={fetchFooter} />
      </main>
    </>
  );
}
