import React, { useRef, useEffect } from "react";
import { List, Avatar } from "antd";
import CardProduct from "../Card/CardProduct";
import data from "../../data/ListMatcha";
import styled from "styled-components";

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
    padding: 25px 10px !important;
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

  return (
    <HorizontalListContainer ref={containerRef}>
      <List
        dataSource={data}
        renderItem={(product) => (
          <List.Item>
            <CardProduct
              key={product.id}
              src={product.src}
              name={product.name}
              weight={product.weight}
              price={product.price[0]}
            />
          </List.Item>
        )}
      />
    </HorizontalListContainer>
  );
};

export default HorizontalScrollList;
