import { NavLink } from "react-router";
import logo from "../assets/logovancy.png";
import styled from "styled-components";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
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
    </>
  );
};

export default Header;
