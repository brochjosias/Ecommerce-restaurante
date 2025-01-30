import styles from "./ImageText.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/sanity";

const ImageText = ({ data }) => {
  const imageProps = useNextSanityImage(client, data.image);

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          width={imageProps.width} // Adicionando largura
          height={imageProps.height} // Adicionando altura
          alt={data.title || "Imagem"} // Garantindo um alt válido
        />
      </div>
      <div className={styles.content}>
        <span>{data.top_title}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <a href={data.url} className="btn btn-primary">
          {data.button} &rarr;
        </a>
      </div>
    </section>
  );
};

export default ImageText;
