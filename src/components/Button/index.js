import React from 'react'
import { StyledButton } from './ButtonStyled';
function Button({text}) {
  return (
    <StyledButton>
        {text}
    </StyledButton>
  )
}

export default Button