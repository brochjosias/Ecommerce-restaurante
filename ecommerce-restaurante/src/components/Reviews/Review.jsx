import styles from "./Review.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/sanity";
import Image from "next/image";

const Review = ({ name, review, image }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div id="reviews" className={styles.review}>
      <div className={styles.avatar}>
        <Image
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.height}
          alt={image}
        />
      </div>
      <span>{name}</span>
      <p>"{review}"</p>
    </div>
  );
};

export default Review;
