import styles from "./ImageText.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/sanity";

const ImageText = ({ data, id }) => {
  const imageProps = useNextSanityImage(client, data.image);

  return (
    <section id={id} className={styles.section}>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.height}
          alt={data.title || "Imagem"}
        />
      </div>
      <div className={styles.content}>
        <span>{data.top_title}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {data.email && <p>{data.email}</p>}
        {data.number && <p>{data.number}</p>}
        <a href={data.url} className="btn btn-primary">
          {data.button} &rarr;
        </a>
      </div>
    </section>
  );
};

export default ImageText;
