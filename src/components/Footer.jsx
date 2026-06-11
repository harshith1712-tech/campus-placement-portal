import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Campus Placement Portal</h2>
          <p>Helping students prepare smarter and land their dream jobs.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Experiences</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li>DSA Tracker</li>
            <li>Interview Prep</li>
            <li>Company List</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Campus Placement Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
