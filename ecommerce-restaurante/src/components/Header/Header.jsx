import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Josias Massas alguma coisa</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum
          placerat lorem vitae aliquam. Nunc non vehicula odio. Donec
          scelerisque molestie justo non bibendum. Donec ac ex eu dui ultrices
          venenatis. Aliquam ac tellus luctus, elementum ex vitae, hendrerit
          ante. Curabitur congue fringilla lacus. Sed et risus nec turpis varius
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.image}></div>
    </header>
  );
};

export default Header;
