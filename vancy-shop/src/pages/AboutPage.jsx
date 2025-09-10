import { useEffect, useState } from "react";
import styled from "styled-components";
import banner2 from "/src/assets/banner3.jpg";
import chungnhan from "/src/assets/chungnhan1.png";
const Section1 = styled.div`
  margin: auto;
  background: #fff;
  padding: 10px 7rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Container = styled.div`
  width: 100%;
  & h1 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 26px;
    padding: 10px 0;
  }
  & h2 {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding: 10px 0;
  }
  & P {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding: 15px 0;
    padding-left: 15px;
    line-height: 35px;
    text-indent: 30px;
  }
  & li {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding: 5px 0;
    padding-left: 25px;
    list-style: none;
    line-height: 35px;
  }
  & img {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    object-fit: contain;
    width: 80%;
    margin: 10px 0;
  }
`;

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = banner2;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [banner2]);

  return (
    <>
      <Section1>
        <ContainerTitle>
          <Title>VANCY SHOP MATCHA</Title>
          <img
            src={banner2}
            alt=""
            className={`fade-in-image ${isLoaded ? "visible" : ""}`}
          />
        </ContainerTitle>
        <Container>
          <h1>Chào mừng đến với Vancy - Nơi Tinh Hoa Matcha Nhật Bản Hội Tụ</h1>
          <p>
            Tại Vancy, chúng tôi mang trong mình niềm đam mê và khát khao lan
            tỏa văn hóa thưởng thức matcha đích thực đến với mọi người. Chúng
            tôi tin rằng một tách matcha chất lượng không chỉ là một thức uống
            thơm ngon, mà còn là nguồn năng lượng cho tinh thần sảng khoái, giúp
            bạn thư giãn và tập trung hơn.
          </p>
          <h2>Nguồn Gốc và Chất Lượng Vượt Trội</h2>

          <p>
            Sản phẩm bột matcha và houjicha của Vancy tự hào được sản xuất tại
            Việt Nam trên dây chuyền công nghệ kỹ thuật tiên tiến, siêu mịn từ
            Nhật Bản. Toàn bộ quy trình sản xuất và quản lý chất lượng đều được
            giám sát chặt chẽ bởi các chuyên gia hàng đầu từ Nhật Bản, đảm bảo
            mỗi sản phẩm đều giữ trọn vẹn hương vị tinh túy nhất.
          </p>

          <p>
            Chúng tôi cam kết mang đến cho bạn sản phẩm{" "}
            <strong>100% nguyên chất</strong>, được làm từ những lá trà xanh hữu
            cơ tươi ngon nhất, hoàn toàn không pha độn, không chất bảo quản.
            Chất lượng sản phẩm đã được khẳng định qua hàng loạt các chứng nhận
            uy tín như ISO, FDA, VSATTP, HALLA và đủ tiêu chuẩn để xuất khẩu
            sang thị trường Châu Âu khắt khe.
          </p>
          <h2>Đa Dạng Sản Phẩm cho Mọi Nhu Cầu</h2>
          <p>
            Vancy hiểu rằng mỗi người có một gu thưởng thức matcha riêng. Vì
            vậy, chúng tôi mang đến một danh mục sản phẩm phong phú để đáp ứng
            mọi nhu cầu của bạn, từ pha chế chuyên nghiệp đến sử dụng tại nhà:
          </p>
          <ul>
            <li>
              <strong>- Matcha Uji Yano:</strong> Dành cho những ai yêu thích
              hương vị nguyên bản, đậm đà.
            </li>

            <li>
              <strong>- Matcha Ceremonial Grade (Dùng cho nghi lễ):</strong>{" "}
              Loại trà thượng hạng với chất lượng cao nhất.
            </li>

            <li>
              <strong>- Matcha Latte Grade:</strong> Sự lựa chọn hoàn hảo để pha
              những ly latte thơm béo.
            </li>

            <li>
              <strong>- Matcha Culinary (Dùng trong ẩm thực):</strong> Lý tưởng
              cho việc làm bánh, làm kem và chế biến các món ăn sáng tạo.
            </li>

            <li>
              <strong>- Matcha Jasmine (Hương nhài):</strong> Sự kết hợp tinh tế
              giữa matcha và hương hoa nhài thanh khiết.
            </li>

            <li>
              <strong>- Bột Houjicha (Bột trà rang):</strong> Mang hương vị trà
              rang độc đáo, ấm áp.
            </li>
          </ul>
          <h2>Cam Kết của Vancy</h2>
          <ul>
            <li>
              <strong>- Chất lượng hảo hạng:</strong> Sản phẩm có màu xanh diệp
              lục chuẩn Nhật, độ mịn cao, tơi đều, dễ dàng hòa tan mà không vón
              cục. Hương thơm dịu nhẹ đặc trưng và hậu vị ngọt thanh, ít đắng
              chát.
            </li>

            <li>
              <strong>- An toàn tuyệt đối:</strong> Sản phẩm có đầy đủ giấy tờ
              chứng nhận an toàn vệ sinh thực phẩm, đảm bảo sức khỏe cho người
              tiêu dùng.
            </li>

            <li>
              <strong>- Nguồn gốc rõ ràng:</strong> Toàn bộ sản phẩm của Vancy
              được cung cấp bởi{" "}
              <strong>CÔNG TY TNHH HAPPY LIFE TEA VIỆT NAM</strong>, đơn vị uy
              tín hàng đầu trong lĩnh vực sản xuất matcha công nghệ Nhật Bản.
            </li>
          </ul>
          <img src={chungnhan} alt="" />
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Chứng nhận đã qua kiểm định
          </p>
          <p>
            Hãy để Vancy đồng hành cùng bạn trên hành trình khám phá hương vị
            matcha đích thực. Khám phá ngay các sản phẩm của chúng tôi để cảm
            nhận sự khác biệt!
          </p>
        </Container>
      </Section1>
    </>
  );
};

export default AboutPage;
