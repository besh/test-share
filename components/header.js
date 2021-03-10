import Link from "next/link";

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/post/[id]" as="/post/177ac07d-1d66-45e0-8ae6-06a88804275b">
          <a>First</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
