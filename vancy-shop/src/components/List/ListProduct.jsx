import styled from "styled-components";
import ListProducts from "../../data/ListMatcha";
import CardProduct from "../Card/CardProduct";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
const ListProduct = () => {
  return (
    <Container>
      {ListProducts.map((product) => {
        return (
          <CardProduct
            key={product.id}
            src={product.src}
            name={product.name}
            weight={product.weight}
            price={product.price}
          />
        );
      })}
    </Container>
  );
};

export default ListProduct;
