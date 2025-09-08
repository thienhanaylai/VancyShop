import { NavLink } from "react-router";
import logo from "../assets/logovancy.png";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;
  z-index: 100;
  height: 80px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  & p {
    font-family: "Story Script", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: #62a85a;
  }
  & img {
    object-fit: contain;
    width: 20%;
    margin: 10px;
  }
`;

const ListNav = styled.div`
  & ul {
    list-style: none;
    display: flex;
    & li {
      & a {
        color: #000000;
        padding: 20px;
      }
      & :hover {
        color: #60af57;
        border-bottom: #60af57 solid 5px;
      }
    }
    .active {
      color: #60af57;
      border-bottom: #60af57 solid 5px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo>
          <img src={logo} alt="logo" />
          <p>MATCHA VANCY</p>
        </Logo>
        <ListNav>
          <ul>
            <li>
              <NavLink to="/">TRANG CHỦ</NavLink>
            </li>
            <li>
              <NavLink to="/about">GIỚI THIỆU</NavLink>
            </li>
            <li>
              <NavLink to="/product">SẢN PHẨM</NavLink>
            </li>
            <li>
              <NavLink to="/contact">LIÊN HỆ</NavLink>
            </li>
          </ul>
        </ListNav>
      </Navbar>
    </>
  );
};

export default Header;
