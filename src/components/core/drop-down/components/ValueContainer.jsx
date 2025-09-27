import { components } from 'react-select';
import PropTypes from 'prop-types';
import React from 'react';

const ValueContainer = ({ children, ...props }) => {
  const variant = props.selectProps.className;
  let renderedChildren = children;

  if (variant === 'totalItemsCount') {
    const count = children?.[0]?.length || 0;

    if (count) {
      renderedChildren = (
        <>
          {count} {'Items'}
          {children?.[1]}
        </>
      );
    }
  } else if (variant === 'value-string') {
    const values =
      children?.[0] instanceof Array &&
      // eslint-disable-next-line react/prop-types
      children?.[0]?.map(({ props }) => props?.data?.label);

    const valueString = values && values?.join(', ');

    if (valueString) {
      renderedChildren = (
        <>
          {valueString && valueString}
          {children?.[1]}
        </>
      );
    }
  }

  return (
    <components.ValueContainer {...props}>
      {renderedChildren}
    </components.ValueContainer>
  );
};

ValueContainer.propTypes = {
  children: PropTypes.node.isRequired,
  selectProps: PropTypes.shape({
    className: PropTypes.string,
    data: PropTypes.object,
  }).isRequired,
};

export default ValueContainer;
