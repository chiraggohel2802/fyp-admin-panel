import { components } from 'react-select';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../check-box/CheckBox';

const Option = ({ children, ...props }) => {
  const { isSelected, selectProps, isDisabled } = props;
  const { isMulti } = selectProps;

  const [selected, setSelected] = useState(isSelected);

  const handleCheckBoxClick = () => setSelected((prev) => !prev);

  return isMulti && !isDisabled ? (
    <div onClick={handleCheckBoxClick}>
      <components.Option {...props}>
        <Checkbox
          readOnly
          label={children}
          checked={selected}
          useInternalState={false}
        />
      </components.Option>
    </div>
  ) : (
    <components.Option {...props}>{children}</components.Option>
  );
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  selectProps: PropTypes.shape({
    isMulti: PropTypes.bool,
  }),
  isDisabled: PropTypes.bool,
};

export default Option;
