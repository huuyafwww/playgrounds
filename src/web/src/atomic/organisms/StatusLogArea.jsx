import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const Textarea = styled.textarea`
  height: calc(100vh - 70vh - 60px);
`

const StatusLogArea = ({value}) => {
  return (
    <Wrapper>
      <Textarea className="textarea w-full" value={value} readOnly></Textarea>
    </Wrapper>
  );
};

export default StatusLogArea;
