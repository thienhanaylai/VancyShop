import React, { useRef, useEffect, useState } from "react";
import { List, Avatar } from "antd";
import CardProduct from "../Card/CardProduct";
import styled from "styled-components";
import ProductService from "../../services/ProductService";

const HorizontalListContainer = styled.div`
  & .ant-spin-container {
    display: flex;
    padding-bottom: 16px;
  }

  & .ant-list-items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  & .ant-list-item {
    padding: 25px 5px !important;
  }

  & ::-webkit-scrollbar {
    display: none;
  }
`;

const HorizontalScrollList = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollableElement = container.querySelector(".ant-list-items");
    if (!scrollableElement) return;
    const onWheel = (e) => {
      e.preventDefault();
      scrollableElement.scrollLeft += e.deltaY;
    };

    scrollableElement.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      scrollableElement.removeEventListener("wheel", onWheel);
    };
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const getListProducts = async () => {
      try {
        const response = (await ProductService.getAllProduct()).data;
        const ListProduct = [];
        response.map((item) => {
          if (item.catalog.includes("product")) ListProduct.push(item);
        });
        setDataSource(ListProduct);
      } catch (err) {
        console.log(err);
        message.error("Không thể tải dữ liệu sản phẩm.");
      } finally {
      }
    };
    getListProducts();
  }, []);

  return (
    <HorizontalListContainer ref={containerRef}>
      <List
        dataSource={dataSource}
        renderItem={(product) => (
          <List.Item>
            <CardProduct
              key={product._id}
              src={product.images[0]}
              id={product._id}
              name={product.name}
              price={product.prices[0].price}
            />
          </List.Item>
        )}
      />
    </HorizontalListContainer>
  );
};

export default HorizontalScrollList;
