import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 15.5%;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  min-width: 200px;
  & img {
    margin: 15px 10px;
    border-radius: 5px;
    object-fit: contain;
    width: 90%;
    scale: 1;
    transition: scale 0.2s ease-in-out;
  }
  & h3 {
    text-align: start;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin: 5px 10px 20px 10px;
    scale: 1;
    transition: scale 0.2s ease-in-out;
  }
  & p {
    font-family: "Be Vietnam Pro", sans-serif;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 16px;
    color: #a31a1a;
    text-align: end;
  }
  & img:hover,
  h3:hover {
    scale: 1.05;
  }
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardProduct = (product) => {
  return (
    <>
      <Card>
        <img src={product.src} alt={product.name} />
        <Content>
          <h3>{product.name}</h3>
          <p>
            {product.price[0].toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </p>
        </Content>
      </Card>
    </>
  );
};

export default CardProduct;
