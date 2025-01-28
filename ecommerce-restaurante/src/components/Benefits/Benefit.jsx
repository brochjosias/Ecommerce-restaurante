import { useNextSanityImage } from "next-sanity-image"; // Importe o hook
import client from "../../sanity"; // Importe o cliente do Sanity
import Image from "next/image";
import styles from "./Benefit.module.scss";

const Benefit = ({ title, subtitle, icon }) => {
  // Utilizando o hook para pegar os dados da imagem do Sanity
  const iconProps = useNextSanityImage(client, icon);

  return (
    <div className={styles.benefit}>
      {iconProps?.src ? (
        <Image
          src={iconProps.src} // Usando a URL da imagem obtida pelo hook
          alt={iconProps.alt}
          width={56}
          height={56}
        />
      ) : (
        <p>No icon available</p> // Caso não tenha ícone
      )}
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Benefit;
