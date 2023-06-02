import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav id="main-nav">
        <div id="pg-head">
          <Link to="/">
            <span className="acronym">T</span>ailored{" "}
            <span className="acronym">E</span>ducation{" "}
            <span className="lite">through</span>{" "}
            <span className="acronym">A</span>ccountability,{" "}
            <span className="acronym">M</span>entoring{" "}
            <span className="lite">and</span> <span className="acronym">S</span>
            ervice
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/who-we-are">Who We Are</Link>
          </li>
          <li>
            <Link to="/what-were-doing">What We're Doing</Link>
          </li>
          <li>
            <Link to="/make-a-difference">Make A Difference</Link>
          </li>
        </ul>
      </nav>

      <div id="content-container">
        <Outlet />
      </div>

      <footer>
        <div id="footer-container">
          <nav id="footer-nav">
            <ul>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/what-were-doing">What We're Doing</Link>
              </li>
              <li>
                <Link to="/make-a-difference">Make A Difference</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="org-info">
            &copy; 2023 | Our TEAMS Inc
            <br />A 501&#40;c&#41;&#40;3&#41; Organization
          </div>
        </div>
      </footer>
    </>
  );
}
