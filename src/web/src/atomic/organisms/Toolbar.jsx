import React from "react";
import styled from "styled-components";

import SelectDefaultLanguage from "@molecules/SelectDefaultLanguage";
import PrimaryButton from "@atoms/PrimaryButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const StyledSelectDefaultLanguage = styled(SelectDefaultLanguage)`
  width: 60%;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  height: 40px;
`;

const SelectLanguageFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width:40%;
`;

const Toolbar = ({languageOption, onChangeDefaultLanguage, onClickRun}) => {
  return (
    <Wrapper>
      <SelectLanguageFieldWrapper>
        <h3>実行言語の選択：</h3>
        <StyledSelectDefaultLanguage
          value={languageOption}
          onChange={onChangeDefaultLanguage}
        />
      </SelectLanguageFieldWrapper>
      <StyledPrimaryButton onClick={onClickRun}>
        実行
      </StyledPrimaryButton>
    </Wrapper>
  );
};

export default Toolbar;
