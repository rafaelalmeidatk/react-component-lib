import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid #131313;
  padding: 8px 10px;
  background: #fafafa;
  border-radius: 3px;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default Button;