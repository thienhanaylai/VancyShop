import { useEffect, useReducer, useState } from "react";
import { Row, Col, Select, Space, Pagination, Image as ImageAnt } from "antd";
import ListProducts from "../data/ListMatcha";
import styled, { keyframes } from "styled-components";
import banner2 from "../assets/banner8.jpg";
import CardProduct from "../components/Card/CardProduct";
import useWindowSize from "../hooks/useWindowSize";
import FillterListProduct from "../utils/FillterListProduct";
import expandProductVariants from "../utils/expandProductVariants";

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

const ContainProduct = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  padding: 30px 7rem;
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

const Title = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 700;
  padding: 35px;
  position: absolute;
  z-index: 1;
`;

const FillterSelection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 30px;
  & p {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-align: end;
  }
`;

const ListDetailProducts = expandProductVariants(ListProducts); //danh sách sản phẩm ban đầu

const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS":
      switch (action.payload) {
        case "price-asc":
          return FillterListProduct(ListDetailProducts, "price", "ascending");
        case "price-desc":
          return FillterListProduct(ListDetailProducts, "price", "descending");
        case "name-asc":
          return FillterListProduct(ListDetailProducts, "name", "ascending");
        case "name-desc":
          return FillterListProduct(ListDetailProducts, "name", "descending");
        case "none":
          return ListProducts;
        default:
          return state;
      }
    default:
      return state;
  }
};

function ProductPage() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const pageSize = 12; //hiển thị 12 sản phẩm 1 trang

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;

  const [productListState, dispatch] = useReducer(productReducer, ListProducts);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (value) => {
    dispatch({ type: "SORT_PRODUCTS", payload: value });
  };

  useEffect(() => {
    const img = new Image();
    img.src = banner2;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [banner2]);

  return (
    <ContainProduct
      style={isMobile ? { padding: "0 20px" } : { padding: "20px 7rem" }}
    >
      <ContainerTitle>
        <Title>SẢN PHẨM</Title>
        <img
          src={banner2}
          alt=""
          className={`fade-in-image ${isLoaded ? "visible" : ""}`}
        />
      </ContainerTitle>
      <FillterSelection>
        <p>Sắp xếp: &nbsp;</p>
        <Space wrap>
          <Select
            defaultValue="none"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              { value: "none", label: "Mặc định" },
              { value: "name-asc", label: "A - Z" },
              { value: "name-desc", label: "Z - A" },
              { value: "price-asc", label: "Giá tăng dần" },
              { value: "price-desc", label: "Giá giảm dần" },
            ]}
          />
        </Space>
      </FillterSelection>
      <Row gutter={[16, 16]}>
        {productListState
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((product) => (
            <Col key={product.id} xs={12} sm={8} md={8} lg={4}>
              <CardProduct
                key={product.id}
                id={product.id}
                src={product.src}
                name={`${product.name} ${
                  product.weight.length > 1 ? "" : ` - ${product.weight}g`
                }`}
                weight={
                  product.weight.length > 1 ? product.weight[0] : product.weight
                }
                price={
                  product.price.length > 1 ? product.price[0] : product.price
                }
              />
            </Col>
          ))}
      </Row>

      <Row justify="center" style={{ marginTop: "32px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={productListState.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>
    </ContainProduct>
  );
}

export default ProductPage;
