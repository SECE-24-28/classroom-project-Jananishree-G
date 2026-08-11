import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/product">About</NavLink>
      {" | "}
      <NavLink to="/cart">Contact</NavLink>
    </div>
  );
}