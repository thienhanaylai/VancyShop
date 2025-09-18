import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import banner2 from "../assets/banner7.jpg";
import styled, { keyframes } from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    
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

const Container = styled.div`
  display: flex;
  padding: 25px 7rem;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out;
  & iframe {
    width: 60%;
    height: 400px;
  }
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 130px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    object-fit: cover;
    object-position: 90% 60%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
  .fade-in-image.visible {
    opacity: 0.5;
  }
`;

const ContainerContent = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 700;
  padding: 35px;
  position: absolute;
  z-index: 1;
`;

const ContactPage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = banner2;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [banner2]);
  return (
    <>
      <Container
        style={isMobile ? { padding: "0 20px" } : { padding: "20px 7rem" }}
      >
        <ContainerTitle>
          <Title>LIÊN HỆ</Title>
          <img
            src={banner2}
            alt=""
            className={`fade-in-image ${isLoaded ? "visible" : ""}`}
          />
        </ContainerTitle>
        <ContainerContent
          style={isMobile ? { flexDirection: "column-reverse" } : {}}
        >
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
          <iframe
            style={isMobile ? { width: "100%", height: "300px" } : {}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.029002298844!2d106.68378827485738!3d10.802149989348136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528da94cc43d3%3A0xdcf46aa70cd736fc!2zMjgvNTUgUGhhbiBUw6J5IEjhu5MsIFBoxrDhu51uZyA3LCBQaMO6IE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oIDAwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1757790211693!5m2!1svi!2s"
          ></iframe>
        </ContainerContent>
      </Container>
    </>
  );
};

export default ContactPage;
