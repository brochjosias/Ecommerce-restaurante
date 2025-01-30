import styles from "./Item.module.scss";

const Item = () => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3>A receita</h3>
        <h4>ingrediente1, ingrediente 2</h4>
      </div>
      <div className={styles.divisor} />
      <h5>R$49,90</h5>
    </li>
  );
};

export default Item;
