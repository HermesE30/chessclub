import Logo from "../Logo";
import NavMobile from "../NavMobile";
import Navbar from "../Navbar";
import styles from "./styles.module.css";

export default function HeaderComponent({
  clubName,
  image,
  menu,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {image && <Logo image={image} clubName={clubName}/>}
          <h1 className={styles.siteName}>{clubName}</h1>
        </div>
        {menu && <Navbar items={menu.items} />}
        {menu && <NavMobile items={menu.items} />}
      </div>
    </header>
  );
}
