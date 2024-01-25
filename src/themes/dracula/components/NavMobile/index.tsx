import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import styles from "./navMobile.module.css";

interface NavProps {
  items: Array<MenuItemProps>;
  onClick: () => void;
}

const Nav = ({items, onClick}: NavProps) => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.route}
          className={router.pathname === item.route ? styles.active : ""}
        >
          {item.name}
        </Link>
      ))}
      <div>
        <X size={32} onClick={onClick} />
      </div>
    </nav>
  );
};

export default function NavMobile({ items = [] }: MenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleIcon = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navMobile}>
      {!isOpen && <List size={32} onClick={handleToggleIcon} />}
      {isOpen && <Nav items={items} onClick={handleToggleIcon} />}
    </div>
  );
}
