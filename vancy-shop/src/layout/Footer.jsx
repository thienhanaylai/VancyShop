import styled from "styled-components";
import logo from "../assets/logovancy.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import useWindowSize from "../hooks/useWindowSize";

const FooterContainer = styled.div`
  height: 360px;
  display: flex;
  background-color: #f1ebe1;
  padding: 0 7rem;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  & h3 {
    font-family: "Story Script", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: #62a85a;
  }
  & img {
    object-fit: contain;
    width: 25%;
    margin: 10px;
  }
`;

const ContainerInfo = styled.div`
  & p {
    padding: 10px 0;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  & p {
    padding: 3px 5px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
`;

const Content = styled.div`
  padding: 5px 25px;
  & h3 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    padding-bottom: 15px;
  }
  & ul {
    list-style: none;
    & li {
      padding: 5px 0px;
    }
  }
  & a {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: #000;
  }
  & a:hover {
    color: #60af57;
    scale: 1.1;
  }
`;

const Container = styled.div`
  display: flex;
`;

const FooterContainerMobile = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  background-color: #f1ebe1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ContainerMobile = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Footer = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? (
        <>
          <FooterContainerMobile>
            <Logo>
              <img src={logo} alt="" />
              <ContainerInfo>
                <p>
                  <IoLocationSharp size={20} style={{ paddingRight: "10px" }} />{" "}
                  28/55 Phan Tây Hồ, P7, Phú Nhận, TP HCM
                </p>
                <p>
                  <FaPhoneAlt size={20} style={{ paddingRight: "10px" }} /> +84
                  868-486-095
                </p>
                <p>
                  <IoMail size={20} style={{ paddingRight: "10px" }} />{" "}
                  doanvancan1402@gmail.com
                </p>
              </ContainerInfo>
            </Logo>
            <ContainerMobile>
              <Content>
                <h3>VANCY SHOP</h3>
                <ul>
                  <li>
                    <a href="">Thông tin cửa hàng</a>
                  </li>
                  <li>
                    <a href="">Tin tức</a>
                  </li>
                  <li>
                    <a href="">Liên hệ</a>
                  </li>
                </ul>
              </Content>
              <Content>
                <h3>SẢN PHẨM</h3>
                <ul>
                  <li>
                    <a href="">Matche UJI YANO GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha JASMINE hương Nhài</a>
                  </li>
                  <li>
                    <a href="">Matcha LATTE GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha CEREMONIAL GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha CULINARY GRADE</a>
                  </li>
                  <li>
                    <a href="">Trà Rang HOUJICHA </a>
                  </li>
                </ul>
              </Content>
              <Content>
                <h3>CHÍNH SÁCH</h3>
                <ul>
                  <li>
                    <a href="">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="">Chính sách đổi trả</a>
                  </li>
                </ul>
              </Content>
            </ContainerMobile>
          </FooterContainerMobile>
          <Copyright>
            <p>Copyright 2025 © VancyShop Design by Paoo</p>
          </Copyright>
        </>
      ) : (
        <>
          <FooterContainer>
            <Logo>
              <img src={logo} alt="" />
              <ContainerInfo>
                <p>
                  <IoLocationSharp size={20} style={{ paddingRight: "10px" }} />{" "}
                  28/55 Phan Tây Hồ, P7, Phú Nhận, TP HCM
                </p>
                <p>
                  <FaPhoneAlt size={20} style={{ paddingRight: "10px" }} /> +84
                  868-486-095
                </p>
                <p>
                  <IoMail size={20} style={{ paddingRight: "10px" }} />{" "}
                  doanvancan1402@gmail.com
                </p>
              </ContainerInfo>
            </Logo>
            <Container>
              <Content>
                <h3>VANCY SHOP</h3>
                <ul>
                  <li>
                    <a href="">Thông tin cửa hàng</a>
                  </li>
                  <li>
                    <a href="">Tin tức</a>
                  </li>
                  <li>
                    <a href="">Liên hệ</a>
                  </li>
                </ul>
              </Content>
              <Content>
                <h3>SẢN PHẨM</h3>
                <ul>
                  <li>
                    <a href="">Matche UJI YANO GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha JASMINE hương Nhài</a>
                  </li>
                  <li>
                    <a href="">Matcha LATTE GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha CEREMONIAL GRADE</a>
                  </li>
                  <li>
                    <a href="">Matcha CULINARY GRADE</a>
                  </li>
                  <li>
                    <a href="">Trà Rang HOUJICHA </a>
                  </li>
                </ul>
              </Content>
              <Content>
                <h3>CHÍNH SÁCH</h3>
                <ul>
                  <li>
                    <a href="">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <a href="">Chính sách đổi trả</a>
                  </li>
                </ul>
              </Content>
            </Container>
          </FooterContainer>
          <Copyright>
            <p>Copyright 2025 © VancyShop Design by Paoo</p>
          </Copyright>
        </>
      )}
    </>
  );
};

export default Footer;
