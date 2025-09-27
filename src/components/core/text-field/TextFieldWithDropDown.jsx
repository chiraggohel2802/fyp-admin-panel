/* eslint-disable react/prop-types */
import TextField from './TextField';
import DropDown from '../drop-down/DropDown';
import React from 'react';

const TextFieldWithDropDown = ({ dropDownProps, ...props }) => {
  const { controllerStyles } = dropDownProps || {};

  return (
    <TextField
      {...props} // custom props
      suffixCustomStyles={{ padding: 0 }}
      suffix={
        <div style={{ display: 'flex' }}>
          <span
            style={{
              height: '1.3rem',
              alignSelf: 'center',
              border: '0.063rem solid var(--gray-200)',
            }}
          />
          <DropDown
            {...dropDownProps}
            hideErrorSpace
            controllerStyles={{
              outline: 'none',
              minWidth: '6.5rem',
              ...controllerStyles,
            }}
          />
        </div>
      }
    />
  );
};

export default TextFieldWithDropDown;
