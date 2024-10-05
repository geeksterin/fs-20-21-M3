import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul
        style={{
          width: "100%",
          gap: "2rem",
          display: "flex",
          justifyContent: "evenly",
          listStyle: "none",
        }}
      >
        <li>
          {/* <a href="/">Home</a> */}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          {/* <a href="/about-us">About Us</a> */}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/about-us"
          >
            About Us
          </NavLink>
        </li>

        <li>
          {/* <a href="/contact-us"> Contact Us</a> */}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
