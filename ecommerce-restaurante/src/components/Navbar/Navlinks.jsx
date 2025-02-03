import styles from "./Navlinks.module.scss";

const scrollToSection = (event, id) => {
  event.preventDefault();
  const target = document.getElementById(id);
  if (target) {
    const offset = 150; // Ajuste conforme a altura da navbar
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

const Navlinks = ({ toggleMenu }) => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          Sobre Nós
        </a>
      </li>
      <li>
        <a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")}>
          Depoimentos
        </a>
      </li>
      <li>
        <a href="#location" onClick={(e) => scrollToSection(e, "location")}>
          Localização
        </a>
      </li>
      <li>
        <a href="#menu" onClick={(e) => scrollToSection(e, "menu")}>
          Menu
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
