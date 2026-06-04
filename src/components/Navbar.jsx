import "../styles/Navbar.css";
function Navbar() {
  return (
    // so basicallly using the <nav> tag to create a navigation bar and then using <h1> for the logo and <ul> for the navigation links.
    // the className is used to apply CSS Styles to the elements. The CSS file will contain the styles for the navbar,logo and nav-links.
    <nav className="navbar">
      <h1 className="logo">Campus Placement Portal</h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Experiences</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
export default Navbar;
