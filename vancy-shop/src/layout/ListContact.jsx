import styled from "styled-components";
import fblogo from "../assets/fblogo.png";
import phonelogo from "../assets/phone-call.png";
import zalologo from "../assets/zalologo.svg";

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  & img {
    object-fit: contain;
    width: 45px;
    margin: 10px;
    background-color: #f1f1f1;
    padding: 3px;
    border-radius: 25px;
    box-shadow: 0 0px 10px rgb(255, 255, 255);
  }
  & img:hover {
    scale: 1.2;
  }
`;
const ListContact = () => {
  return (
    <>
      <Container>
        <a href="https://www.facebook.com/vancan042510">
          <img src={fblogo} alt="" />
        </a>
        <a href="https://zalo.me/0868486095">
          <img src={zalologo} alt="" />
        </a>
        <a href="tel:0868486095">
          <img src={phonelogo} alt="" />
        </a>
      </Container>
    </>
  );
};

export default ListContact;
