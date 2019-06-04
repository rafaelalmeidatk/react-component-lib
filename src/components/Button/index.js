import React from 'react'
import styled from 'styled-components';

import * as colors from '../../colors';

const StyledButton = styled.button`
  border: 2px solid ${colors.black};
  padding: 8px 10px;
  background: #fafafa;
  border-radius: 3px;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default Button;