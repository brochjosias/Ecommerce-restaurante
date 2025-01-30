import Item from "./Item";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <section className={styles["menu-wrapper"]}>
      <div className={styles.menu}>
        <h2 className="gold">Menu</h2>
        <ul className={styles.list}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    </section>
  );
};

export default Menu;
