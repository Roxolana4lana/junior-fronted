import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.lg};
  margin: 10rem auto;
  max-width: 48rem;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 4rem 0 rgba(21, 20, 50, 0.1);
`;
