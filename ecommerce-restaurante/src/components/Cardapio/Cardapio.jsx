import styles from "./Cardapio.module.scss";
import Item from "./Item";

const Cardapio = ({ cardapio }) => {
  const renderItems = cardapio.map((item) => (
    <Item
      key={item._id}
      image={item.image}
      category={item.category}
      title={item.title}
    />
  ));

  console.log("Cardápio recebido:", cardapio);

  return (
    <section className={styles["cardapio-wrapper"]}>
      <div className={styles.cardapio}>
        <h2 className="gold">No Cardápio</h2>
        <div className={styles.items}>{renderItems}</div>
      </div>
    </section>
  );
};

export default Cardapio;
