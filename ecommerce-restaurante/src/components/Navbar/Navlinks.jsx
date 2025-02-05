import styles from "./Navlinks.module.scss";

const scrollToSection = (event, id, toggleMenu) => {
  event.preventDefault();
  const target = document.getElementById(id);
  if (target) {
    const offset = 130;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
  // Fecha o menu se a função existir
  if (toggleMenu) toggleMenu();
};

const Navlinks = ({ toggleMenu }) => {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "about", toggleMenu)}
        >
          Sobre Nós
        </a>
      </li>
      <li>
        <a
          href="#reviews"
          onClick={(e) => scrollToSection(e, "reviews", toggleMenu)}
        >
          Depoimentos
        </a>
      </li>
      <li>
        <a
          href="#location"
          onClick={(e) => scrollToSection(e, "location", toggleMenu)}
        >
          Localização
        </a>
      </li>
      <li>
        <a href="#menu" onClick={(e) => scrollToSection(e, "menu", toggleMenu)}>
          Menu
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
