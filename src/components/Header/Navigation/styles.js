import styled from "styled-components";

export const Ul = styled.ul`
  color: ${({ theme }) => theme.color.black};
  list-style-type: none;
  margin-top: 1.5rem;
`;
export const Li = styled.ul`
  color: ${({ theme }) => theme.color.black};
  display: inline;
  margin-left: 20px;
  & a {
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    font-size: 16px;
  }
`;
