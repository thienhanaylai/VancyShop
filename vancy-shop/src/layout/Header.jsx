import { NavLink } from "react-router";
import logo from "../assets/logovancy.png";
import styled from "styled-components";
import {
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import useWindowSize from "../hooks/useWindowSize";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
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
const NavbarMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0;
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
    margin: 0;
  }
  & img {
    object-fit: contain;
    width: 20%;
    margin: 10px;
  }
`;

const LogoMobile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  & p {
    font-family: "Story Script", sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #62a85a;
    margin: 0;
  }
  & img {
    object-fit: contain;
    width: 48px;
    margin: 5px 5px 0 5px;
  }
`;

const BergerButton = styled.a`
  margin-left: 20px;
  left: 0;
  position: absolute;
`;

const ListNav = styled.div`
  & ul {
    list-style: none;
    display: flex;

    & li {
      & a {
        color: #000000;
        padding: 20px 20px 25px 20px;
      }
      & a:hover {
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

const DropdownLink = styled.div`
  display: flex;
  justify-content: space-between;
  & a {
    text-align: start;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: black;
  }
  & .right-arrow {
    font-size: 12px;
  }
`;

const items = [
  {
    key: "1",
    label: (
      <DropdownLink>
        <a target="_blank" rel="" href="">
          Bột Matcha
        </a>
        <RightOutlined className="right-arrow" />
      </DropdownLink>
    ),
  },
  {
    key: "2",
    label: (
      <DropdownLink>
        <a target="_blank" rel="" href="">
          Bột Trà Rang
        </a>
        <RightOutlined className="right-arrow" />
      </DropdownLink>
    ),
  },
  {
    key: "3",
    label: (
      <DropdownLink>
        <a target="_blank" rel="" href="">
          Dụng Cụ
        </a>
        <RightOutlined className="right-arrow" />
      </DropdownLink>
    ),
  },
];

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Màu đen với độ mờ 50% */
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
const MenuBerger = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out; /* Hiệu ứng trượt */

  & ul {
    list-style: none;
    padding: 0;
    margin: 25px 0;
  }
  & li {
    padding: 15px 20px;
  }
  & li:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  & a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    padding-bottom: 5px;
    width: 100%;
  }
  .active {
    color: #60af57;
  }
`;

const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <>
      {isMobile ? (
        <NavbarMobile>
          <BergerButton
            onClick={handleClick}
            style={{ color: "#60af57", fontSize: "20px" }}
          >
            <MenuOutlined onClick={handleClick} />
          </BergerButton>
          <Overlay
            className={`overlay ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          />
          <MenuBerger className={`menu ${isOpen ? "open" : ""}`}>
            <LogoMobile href="/" style={{ height: "auto" }}>
              <img src={logo} alt="logo" />
              <p>MATCHA VANCY</p>
            </LogoMobile>
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
          </MenuBerger>

          <LogoMobile href="/">
            <img src={logo} alt="logo" />
            <p>MATCHA VANCY</p>
          </LogoMobile>
        </NavbarMobile>
      ) : (
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
                <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
                  <NavLink to="/product">
                    SẢN PHẨM &nbsp;
                    <DownOutlined />
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink to="/contact">LIÊN HỆ</NavLink>
              </li>
            </ul>
          </ListNav>
        </Navbar>
      )}
    </>
  );
};

export default Header;
