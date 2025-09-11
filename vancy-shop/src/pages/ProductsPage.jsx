import React, { useState } from "react";
import { Row, Col, Card, Pagination, Image } from "antd";

// Dữ liệu giả lập - bạn có thể tạo một mảng dài hơn
const allProducts = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Sản phẩm ${i + 1}`,
  // Sử dụng placeholder cho ảnh
  imageUrl: `https://picsum.photos/id/${i + 10}/300/200`,
}));

const { Meta } = Card;

function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Hiển thị 8 sản phẩm mỗi trang

  // Tính toán sản phẩm cần hiển thị cho trang hiện tại
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Sản phẩm của chúng tôi</h1>

      {/* Lưới sản phẩm */}
      <Row gutter={[16, 24]}>
        {currentProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <Image
                  alt={product.name}
                  src={product.imageUrl}
                  preview={false} // Tắt tính năng xem trước ảnh khi click
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <Meta title={product.name} description="Mô tả ngắn gọn" />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Phân trang */}
      <Row justify="center" style={{ marginTop: "32px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={allProducts.length}
          onChange={handlePageChange}
          showSizeChanger={false} // Ẩn tùy chọn thay đổi pageSize
        />
      </Row>
    </div>
  );
}

export default ProductPage;
