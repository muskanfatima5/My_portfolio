import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <br />
      <ul>
        <li className="list-1">
          <Link href="/About">About</Link>
        </li>

        <br />
        <li className="list-2">
          <Link href="/Education">Education</Link>
        </li>

        <br />
        <li className="list-3">
          <Link href="/Skills">Skills</Link>
        </li>

        <br />
        <li className="list-4">
          <Link href="/Contact">Contact</Link>
        </li>

        <br />
        <li className="list-5">
          <Link href="/Projects">My Work</Link>
        </li>

        {/* <br />
        <li className="list-6">
          <Link href="/Websites">Accounts</Link>
        </li> */}
      </ul>
    </div>
  );
}
export default Navbar;
