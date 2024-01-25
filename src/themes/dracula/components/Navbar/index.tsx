import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ items = [] }: MenuProps) {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        {items &&
          items.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className={router.pathname === item.route ? styles.active : ""}
            >
              {item.name}
            </Link>
          ))}
      </nav>
    </>
  );
}
