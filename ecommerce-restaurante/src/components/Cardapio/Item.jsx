import styles from "./Item.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/sanity";

const Item = ({ image, title = "Sem título", category = "Sem categoria" }) => {
  // Se `image` for uma URL, usa diretamente. Se for um objeto, processa com useNextSanityImage
  const imageProps =
    image && typeof image === "object" && image.asset
      ? useNextSanityImage(client, image)
      : { src: image || "", width: 200, height: 200 }; // Fallback para URL direta

  return (
    <div className={styles.item}>
      {imageProps.src ? (
        <Image
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.height}
          alt={title} // Garante que o alt sempre tenha um valor
        />
      ) : (
        <div className={styles.placeholder}>Imagem não disponível</div>
      )}
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Item;
