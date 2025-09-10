import styled from "styled-components";
import banner1 from "../assets/banner1.png";
import { useEffect, useState } from "react";
import ListProduct from "../components/List/ListProduct";
import CardProduct from "../components/Card/CardProduct";

const Section1 = styled.div`
  width: 100%;
  background-color: white;

  & img {
    object-fit: cover;
    width: 100%;
    height: 555px;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }
  .fade-in-image.visible {
    opacity: 1;
  }
`;

const About = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 26px;
    padding: 25px 0;
  }
  & p {
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 5px 0;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Content = styled.div`
  width: 50%;
  text-align: center;
  padding-bottom: 30px;
`;

const Section2 = styled.div`
  background-image: url("/src/assets/banner2.jpg");
  background-position: center;
  background-color: rgba(255, 255, 255, 0.7);
  background-blend-mode: lighten;
  background-size: cover;
  padding: 2rem 7rem;
  & p,
  h3 {
    color: black;
  }
`;

const Section3 = styled.div`
  padding: 15px 20px 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 26px;
    padding: 10px 0;
  }
  & p {
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 5px 0;
    font-weight: 300;
    font-size: 20px;
  }
`;
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = banner1;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [banner1]);
  return (
    <>
      <Section1>
        <img
          src={banner1}
          alt="banner1"
          className={`fade-in-image ${isLoaded ? "visible" : ""}`}
        />
        <About>
          <h3>VANCY MATCHA</h3>
          <Content>
            <p>Lá trà Nhật, được xay tại Việt Nam</p>
            <p>
              Tại Vancy Matcha, chúng tôi nhập trực tiếp lá trà và công nghệ xay
              từ Nhật, sau đó xay và đóng gói tại Công Ty Happy Life Tea theo
              quy trình chuẩn.
            </p>
          </Content>
        </About>
      </Section1>
      <Section2>
        <About>
          <h3>CÁC DÒNG SẢN PHẨM NỔI BẬT</h3>
          <Content>
            <p>Các sản phẩm tiêu biểu bán chạy nhất.</p>
          </Content>
        </About>
        <ListProduct />
      </Section2>
      <Section3>
        <h3>HOTLINE</h3>
        <p>0868-486-095</p>
        <p>Liên hệ ngay để có giá ưu đãi nhất.</p>
      </Section3>
    </>
  );
};

export default HomePage;
