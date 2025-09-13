import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  width: auto;
  min-width: auto;
  border: #cacaca solid 1px;
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
          <p style={{ color: "#d32000" }}>
            {product.price.toLocaleString("vi-VN", {
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
