import Link from "next/link";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={classes.header}>
        <Link href="/">
          <h1 style={{ cursor: "pointer" }}>HOME</h1>
        </Link>
        <Link href="/ports/1">
          <h1 style={{ cursor: "pointer" }}>PORTS</h1>
        </Link>
        <Link href="/hscodes/1">
          <h1 style={{ cursor: "pointer" }}>HS CODES</h1>
        </Link>
      </div>
      {children}
    </div>
  );
};
export default Layout;
