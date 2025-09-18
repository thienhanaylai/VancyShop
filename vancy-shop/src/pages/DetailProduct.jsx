import { useLocation, useParams } from "react-router";
import ListProducts from "../data/ListMatcha";
import { Breadcrumb, Carousel, Col, Divider, Radio, Rate, Row } from "antd";
import styled from "styled-components";
import expandProductVariants from "../utils/expandProductVariants";
import { useState } from "react";
import GetBreadcrumItem from "../utils/GetBreadcrumItem";
import useWindowSize from "../hooks/useWindowSize";
import CardProduct from "../components/Card/CardProduct";

const ListDetailProducts = [
  ...ListProducts,
  expandProductVariants(ListProducts),
].flat(1); //danh sách sản phẩm ban đầu

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

function getByid(ListPrd, id) {
  return ListPrd.find((product) => {
    return product.id.toString().localeCompare(id, "vi") === 0; //so sanh 2 id
  });
}

const DetailProductPage = styled.div`
  padding: 1rem 7rem;
  display: flex;
  align-items: self-start;
  flex-direction: column;
  & .breadcrum {
    padding: 1rem 0;
  }
  & {
    & {
      & .ant-radio-button-wrapper-checked {
        color: #77aa4a;
        border-color: #77aa4a !important;
      }
      & .ant-radio-button-wrapper:hover {
        color: #77aa4a;
        border-color: #77aa4a;
      }
    }
  }
  & .mobile {
    flex-direction: column;
    & .ant-carousel {
      width: 100%;
    }
    & .info-mobile {
      align-items: center;
      padding-left: 0;
      & h3 {
        margin: 10px 10px 10px 0px;
      }
      & ul {
        margin-left: 10px;
      }
    }
  }
`;

const ContainerInfoProduct = styled.div`
  display: flex;
  width: 100%;
  & .ant-carousel {
    width: 35%;
  }
  & .slick-arrow {
    scale: 2;
    opacity: 0.5;
    margin: 10px;
  }
  & .slick-arrow:hover {
    opacity: 1;
  }
`;
const Info = styled.div`
  display: flex;
  padding-left: 30px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  & h3 {
    text-align: start;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 5px 10px 20px 0px;
    scale: 1;
    transition: scale 0.2s ease-in-out;
  }
  & p {
    font-family: "Be Vietnam Pro", sans-serif;
    margin: 20px 25px 10px 5px;
    font-weight: 500;
    font-size: 24px;
    color: #da2828;
  }
  & .rating {
    color: black;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid #555;
  }
  & .contact-btn {
    color: white;
    width: fit-content;
    padding: 15px;
    background-color: #77aa4a;
    border-radius: 25px;
    border: #77aa4a solid 1px;
    transition: background-color 200ms ease-in;
    margin-left: 10px;
  }
  & .contact-btn:hover {
    color: #77aa4a !important;
    background-color: #fff;
  }
  & .radio-group {
    margin: 20px 10px;
  }
`;

const InfoProduct = styled.div`
  & ul {
    list-style: outside;
  }
  & p {
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0 10px 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Recommend = styled.div`
  & .title-recommned {
    text-align: center;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 500;
    font-size: 24px;
    margin: 15px 0px;
  }
`;

const DetailProduct = () => {
  const { width } = useWindowSize();
  const isMobie = width <= 768;
  const { id } = useParams();
  const product = getByid(ListDetailProducts, id);
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(product.price[0]);
  const location = useLocation();
  const breadcrumItem = GetBreadcrumItem(location.pathname);
  const handleSelectWeight = (e) => {
    setWeight(e.target.value);
    setPrice(product.price[e.target.value]);
  };
  return (
    <>
      <DetailProductPage style={isMobie ? { padding: "1rem" } : {}}>
        <Breadcrumb className="breadcrum" items={breadcrumItem} />
        <ContainerInfoProduct className={isMobie ? "mobile" : ""}>
          <Carousel
            arrows
            infinite={true}
            autoplay={(true, { dotDuration: true })}
            autoplaySpeed={3000}
            className={isMobie ? "Carousel-mobile" : ""}
          >
            {product.imgList[0].map((item) => {
              return (
                <div key={product.imgList[0].indexOf(item)}>
                  <StyledImage src={`${item}`} alt="" />
                </div>
              );
            })}
          </Carousel>
          <Info className={isMobie ? "info-mobile" : ""}>
            <h3>{`${product.name}`}</h3>
            <div style={{ display: "flex" }}>
              <p className="rating">
                {product.rate.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                })}
              </p>
              <Rate
                style={{ marginLeft: "10px" }}
                allowHalf
                disabled
                defaultValue={product.rate}
              />
            </div>
            <p>
              {price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <InfoProduct>
              <ul>
                <li>
                  <p>Thành phần: {product.ingredient}</p>
                </li>
                <li>
                  <p>Màu sắc: {product.color}</p>
                </li>
                <li>
                  <p>Độ mịn: {product.smoothness}</p>
                </li>
                <li>
                  <p>Mùi vị: {product.taste}</p>
                </li>
              </ul>
            </InfoProduct>
            <Radio.Group
              className="radio-group"
              value={weight}
              onChange={handleSelectWeight}
            >
              {product.weight.map((item, index) => {
                return (
                  <Radio.Button key={index} value={index}>
                    {item}g
                  </Radio.Button>
                );
              })}
            </Radio.Group>

            <a className="contact-btn" href="tel:0868486095">
              Liên hệ
            </a>
          </Info>
        </ContainerInfoProduct>
        <Recommend>
          <Divider
            style={{ borderColor: "#7cb305" }}
            className="title-recommned"
          >
            Các sản phẩm khác
          </Divider>
          <Row gutter={[16, 24]}>
            {getRandomItemsFromArray(
              expandProductVariants(ListProducts),
              6
            ).map((product) => (
              <Col key={product.id} xs={12} sm={8} md={8} lg={4}>
                <CardProduct
                  key={product.id}
                  id={product.id}
                  src={product.src}
                  name={`${product.name} ${
                    product.weight.length > 1 ? "" : ` - ${product.weight}g`
                  }`}
                  weight={
                    product.weight.length > 1
                      ? product.weight[0]
                      : product.weight
                  }
                  price={
                    product.price.length > 1 ? product.price[0] : product.price
                  }
                />
              </Col>
            ))}
          </Row>
        </Recommend>
      </DetailProductPage>
    </>
  );
};

export default DetailProduct;
