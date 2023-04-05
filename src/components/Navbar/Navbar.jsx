import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div>
        <img
          className={styles.img}
          src="https://res.cloudinary.com/dlgplr1on/image/upload/v1680641718/2898735_xnawlq.png"
          alt=""
        />
        <h3>MediFlow</h3>
      </div>
      <ul className={styles.ul}>
        <li className={styles.list}>Medidores</li>
        <li className={styles.list}>Materiales redes de Agua</li>
        <li className={styles.list}>Materiales redes de Cloaca</li>
        <li className={styles.list}></li>
      </ul>
      <CartWidget />
    </div>
  );
};
