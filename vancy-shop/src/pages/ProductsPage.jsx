import { useEffect, useReducer, useState } from "react";
import { Row, Col, Select, Space, Pagination, Spin, message } from "antd"; // Thêm Spin và message
import styled, { keyframes } from "styled-components";
import banner2 from "../assets/banner8.jpg";
import CardProduct from "../components/Card/CardProduct";
import useWindowSize from "../hooks/useWindowSize";
import FillterListProduct from "../utils/FillterListProduct";
import ProductService from "../services/ProductService";

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

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        originalList: action.payload,
        displayList: action.payload,
      };

    case "SORT_PRODUCTS":
      const listToSort = [...state.originalList];
      let sortedList;

      switch (action.payload) {
        case "price-asc":
          sortedList = FillterListProduct(
            listToSort,
            "prices[0].price",
            "ascending"
          );
          break;
        case "price-desc":
          sortedList = FillterListProduct(
            listToSort,
            "prices[0].price",
            "descending"
          );
          break;
        case "name-asc":
          sortedList = FillterListProduct(listToSort, "name", "ascending");
          break;
        case "name-desc":
          sortedList = FillterListProduct(listToSort, "name", "descending");
          break;
        case "none":
        default:
          sortedList = listToSort; // Trả về danh sách gốc
          break;
      }
      return { ...state, displayList: sortedList };

    default:
      return state;
  }
};

function ProductPage() {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const pageSize = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const initialState = {
    originalList: [],
    displayList: [],
  };
  const [productListState, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const getListProducts = async () => {
      try {
        setLoading(true);
        const response = (await ProductService.getAllProduct()).data;
        dispatch({ type: "SET_PRODUCTS", payload: response });
      } catch (err) {
        console.log(err);
        message.error("Không thể tải dữ liệu sản phẩm.");
      } finally {
        setLoading(false);
      }
    };
    getListProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleChange = (value) => {
    dispatch({ type: "SORT_PRODUCTS", payload: value });
    setCurrentPage(1);
  };

  useEffect(() => {
    const img = new Image();
    img.src = banner2;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = productListState.displayList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          colorAdjust: "#6B8E23",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ContainProduct
      style={isMobile ? { padding: "0 20px" } : { padding: "20px 7rem" }}
    >
      <ContainerTitle>
        <Title>SẢN PHẨM</Title>
        <img
          src={banner2}
          alt="Product Banner"
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
        {/* 5. Dùng `currentProducts` đã được phân trang để map */}
        {currentProducts.map((product) => (
          <Col key={product._id} xs={12} sm={8} md={8} lg={4}>
            <CardProduct
              id={product._id}
              src={product.images[0]}
              name={`${product.name}`}
              price={product.prices[0].price}
            />
          </Col>
        ))}
      </Row>
      <Row justify="center" style={{ marginTop: "32px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={productListState.displayList.length} // Tổng số sản phẩm
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>
    </ContainProduct>
  );
}

export default ProductPage;
