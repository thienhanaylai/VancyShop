import { useLocation, useParams } from "react-router";
import {
  Breadcrumb,
  Carousel,
  Col,
  Divider,
  Radio,
  Rate,
  Row,
  Spin,
} from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import GetBreadcrumItem from "../utils/GetBreadcrumItem";
import useWindowSize from "../hooks/useWindowSize";
import Recomend from "../components/List/Recomend";
import ProductService from "../services/ProductService";

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

const DetailProduct = () => {
  const { width } = useWindowSize();
  const isMobie = width <= 768;
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [list, setList] = useState([]);
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const location = useLocation();

  // const breadcrumItem = GetBreadcrumItem(location.pathname);
  const handleSelectWeight = (e) => {
    setWeight(e.target.value);
    setPrice(product.prices[e.target.value].price);
  };
  useEffect(() => {
    const getListProducts = async () => {
      try {
        const response = await ProductService.getProduct(id);
        const ListProduct = (await ProductService.getAllProduct()).data;
        console.log(ListProduct);
        setProduct(response.data);
        setList(ListProduct);
        setPrice(response.data.prices[0].price);
        setWeight(0);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    getListProducts();
  }, []);

  if (!product) {
    return (
      <>
        <Spin></Spin>
      </>
    );
  }

  return (
    <>
      <DetailProductPage style={isMobie ? { padding: "1rem" } : {}}>
        <Breadcrumb className="breadcrum" items={[]} />
        <ContainerInfoProduct className={isMobie ? "mobile" : ""}>
          <Carousel
            arrows
            infinite={true}
            autoplay={(true, { dotDuration: true })}
            autoplaySpeed={3000}
            className={isMobie ? "Carousel-mobile" : ""}
          >
            {product.images.map((item) => {
              return (
                <div key={product.images[0].indexOf(item)}>
                  <StyledImage src={`${item}`} alt="" />
                </div>
              );
            })}
          </Carousel>
          <Info className={isMobie ? "info-mobile" : ""}>
            <h3>{`${product.name} - ${product.prices[weight].weight}`}</h3>
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
              {product.prices.map((item, index) => {
                return (
                  <Radio.Button key={index} value={index}>
                    {item.weight}
                  </Radio.Button>
                );
              })}
            </Radio.Group>

            <a className="contact-btn" href="tel:0868486095">
              Liên hệ
            </a>
          </Info>
        </ContainerInfoProduct>
        <Recomend ListProducts={list} />
      </DetailProductPage>
    </>
  );
};

export default DetailProduct;
