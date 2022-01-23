import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-height: auto;
`;

const PrimaryButton = ({ onClick, children, className = "" }) => {
  return (
    <StyledButton
      className={`btn btn-success ${className}`}
      role="button"
      aria-pressed="true"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
