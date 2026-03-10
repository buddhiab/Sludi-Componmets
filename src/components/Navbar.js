
import PropTypes from "prop-types";


const Navbar = ({ logo, links, backgroundColor }) => {
  return (
    <nav
      style={{
        backgroundColor: backgroundColor || "#eb56ad",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        {logo}
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  backgroundColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};



export default Navbar;