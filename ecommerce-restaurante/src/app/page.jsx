import Benefits from "@/components/Benefits/Benefits";
import Header from "@/components/Header/Header";
import client from "@/sanity";

export default async function Home() {
  // Buscando os dados diretamente dentro da função async
  const fetchedHeader = await client.fetch(`*[_type == "header"][0]`);
  const fetchedBenefits = await client.fetch(`*[_type == "benefits"][0..2]`);

  // Verifique os dados no console
  console.log("Fetched Header:", fetchedHeader);
  console.log("Fetched Benefits:", fetchedBenefits);

  return (
    <>
      {/* Passando os dados para o componente Header */}
      <Header header={fetchedHeader} />
      <main>
        {/* Passando os dados para o componente Benefits */}
        <Benefits benefits={fetchedBenefits} />
      </main>
    </>
  );
}
