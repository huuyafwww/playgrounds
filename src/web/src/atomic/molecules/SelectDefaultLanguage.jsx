import React from "react";
import Select from 'react-select'

import { options, defaultOption } from '@models/LanguageModel';

const SelectDefaultLanguage = ({className, value, onChange}) => {
  return (
    <Select
      className={className}
      defaultValue={defaultOption}
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};

export default SelectDefaultLanguage;
