import React, { useEffect, useState } from "react";
import { Row, Col, Card, Pagination, Image as ImageAnt } from "antd";
import ListProducts from "../data/ListMatcha";
import styled from "styled-components";
import banner2 from "../assets/banner3.jpg";
import CardProduct from "../components/Card/CardProduct";
import useWindowSize from "../hooks/useWindowSize";

const ContainProduct = styled.div`
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
    transition: opacity 1.5s ease-in;
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

function expandProductVariants(productsArray) {
  return productsArray.flatMap((product) => {
    return product.weight.map((weightValue, index) => {
      return {
        ...product,
        id: `${product.id}-${weightValue}`,
        weight: weightValue,
        price: product.price[index],
      };
    });
  });
}

const ListDetailProducts = expandProductVariants(ListProducts);

function ProductPage() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Tính toán sản phẩm cần hiển thị cho trang hiện tại
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = ListDetailProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [isLoaded, setIsLoaded] = useState(false);

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
        <Title>VANCY SHOP MATCHA</Title>
        <img
          src={banner2}
          alt=""
          className={`fade-in-image ${isLoaded ? "visible" : ""}`}
        />
      </ContainerTitle>

      <Row gutter={[16, 24]}>
        {currentProducts.map((product) => (
          <Col key={product.id} xs={12} sm={8} md={8} lg={4}>
            <CardProduct
              key={product.id}
              src={product.src}
              name={`${product.name} - ${product.weight}g`}
              weight={product.weight}
              price={product.price}
            />
          </Col>
        ))}
      </Row>

      <Row justify="center" style={{ marginTop: "32px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={ListDetailProducts.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>
    </ContainProduct>
  );
}

export default ProductPage;
