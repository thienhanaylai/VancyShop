import { Link, useRouteError } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const matchaColors = {
  background: "#2C3E2B",
  primary: "#6B8E23",
  primaryHover: "#556B2F",
  accent: "#A5C1A3",
  textPrimary: "#F5F5DC",
  textSecondary: "#D3D3D3",
};

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

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${matchaColors.background};
  color: ${matchaColors.textPrimary};
  padding: 1rem;
  font-family: "Inter", sans-serif;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCode = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${matchaColors.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${matchaColors.textSecondary};
  margin-bottom: 2.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 16px */
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const BaseButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem; /* 12px 24px */
  font-size: 1rem; /* 16px */
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${matchaColors.primary};
  color: white;

  &:hover {
    background-color: ${matchaColors.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(BaseButton)`
  color: ${matchaColors.textPrimary};
  border-color: ${matchaColors.accent};

  &:hover {
    background-color: rgba(165, 193, 163, 0.1);
    border-color: ${matchaColors.textPrimary};
    color: ${matchaColors.textPrimary};
  }
`;

function ErrorPage() {
  const error = useRouteError();

  return (
    <NotFoundContainer>
      <ContentWrapper>
        <ErrorCode>{error?.status || "404"}</ErrorCode>
        <Title>Page not found</Title>
        <Description>
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
        </Description>
        <ButtonContainer>
          <PrimaryButton to="/">Quay về trang chủ</PrimaryButton>
          <SecondaryButton to="/contact">
            Contact support <span className="ml-2">&rarr;</span>
          </SecondaryButton>
        </ButtonContainer>
      </ContentWrapper>
    </NotFoundContainer>
  );
}

export default ErrorPage;
