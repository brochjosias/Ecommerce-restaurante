"use client"; // Marca o arquivo como Client Component

import styles from "./Header.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../sanity";

const Header = ({ header }) => {
  // Chama o hook diretamente dentro do componente
  const imageProps = useNextSanityImage(client, header.image);

  if (!imageProps?.src) return null;

  // Definindo valores padrão para width e height, caso não sejam fornecidos
  const width = imageProps?.width || 580; // Largura padrão
  const height = imageProps?.height || 277; // Altura padrão

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          alt={header.title} // Adiciona o alt para acessibilidade
          width={width} // Define a largura
          height={height} // Define a altura
          style={{ objectFit: "contain" }} // Substitui a propriedade "objectFit"
        />
      </div>
    </header>
  );
};

export default Header;
