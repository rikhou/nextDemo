import Link from "next/link";
import styles from "./Layout.module.css";

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/user">
          <a>User</a>
        </Link>
      </li>
      <li>
        <Link href="/people">
          <a>People</a>
        </Link>
      </li>
      <li>
        <Link href="/show" scroll={false}>
          <a>Show</a>
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: "/about",
            query: { name: "test" },
          }}
          replace
        >
          <a>About Us</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
