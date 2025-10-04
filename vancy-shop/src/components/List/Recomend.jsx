import { Divider, Col, Row } from "antd";
import styled from "styled-components";
import CardProduct from "../Card/CardProduct";
import { useMemo } from "react";
const RecommendStyled = styled.div`
  & .title-recommned {
    text-align: center;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 24px;
    margin: 15px 0px;
  }
`;

function getRandomItemsFromArray(arr, numItems) {
  const shuffled = [...arr];
  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }
  return shuffled.slice(0, numItems);
}

const Recomend = ({ ListProducts }) => {
  const randomList = useMemo(() => {
    return getRandomItemsFromArray(ListProducts, 6);
  }, [ListProducts]);

  return (
    <>
      <RecommendStyled>
        <Divider style={{ borderColor: "#7cb305" }} className="title-recommned">
          Các sản phẩm khác
        </Divider>
        <Row gutter={[16, 24]}>
          {randomList.map((product) => (
            <Col key={product._id} xs={12} sm={8} md={8} lg={4}>
              <CardProduct
                key={product._id}
                id={product._id}
                src={product.images[0]}
                name={`${product.name}`}
                price={product.prices[0].price}
              />
            </Col>
          ))}
        </Row>
      </RecommendStyled>
    </>
  );
};
export default Recomend;
