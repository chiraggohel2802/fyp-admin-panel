import './DropDown.css';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Label from '../label/Label';
import Option from './components/Option';
import ValueContainer from './components/ValueContainer';
import Error from '../error/Error';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  field,
  dropdownLabel,
  error,
  controllerStyles = {},
  className = '',
  required = false,
  isMulti = false,
  isSearchable = true,
  disabled = false,
  variant = 'basic',
  isLoading = false,
  onChange,
  onBlur,
  setFieldValue,
  setFieldTouched,
  hideErrorSpace = false,
  value,
  menuListClass = '',
  onScrollPaginate,
  onInputChange,
  ...props
}) => {
  const defaultOnChange = (selected) => setFieldValue?.(field, selected);

  const defaultOnBlur = () => setFieldTouched?.(field);

  const dropDownProps = {
    ...props,
    id: field,
    name: field,
    value: value,
    closeMenuOnSelect: !isMulti,
    isDisabled: disabled,
    hideSelectedOptions: false,
    backspaceRemovesValue: variant !== 'totalItemsCount',
    menuPosition: 'fixed',
    className: variant,
    components: { Option, ValueContainer },
    onChange: onChange || defaultOnChange,
    onBlur: onBlur || defaultOnBlur,
    noOptionsMessage: () =>
      variant === 'creatable' || variant === 'creatable-chip'
        ? 'Type and Hit Enter to create new entry'
        : 'No Option Found.',
    isMulti,
    isLoading,
    isSearchable,
    theme: (theme) => ({
      ...theme,
      borderRadius: 6,
      colors: {
        ...theme.colors,
        primary25: 'var(--default-theme-color-200)',
        primary: 'var(--default-theme-color)',
      },
    }),
    styles: {
      control: (baseStyles, state) => ({
        ...baseStyles,
        border: 'none',
        boxShadow: 'none',
        backgroundColor: state.isDisabled
          ? 'var(--disabled-state, #f3f4f6)'
          : 'var(--pure-white, #fff)',
        padding: '0rem',
        fontSize: '0.9rem',
        maxHeight: !isMulti ? '2.5rem' : '',
        outline: state.isFocused
          ? '0.063rem solid var(--default-theme-color)'
          : '0.063rem solid var(--gray-gray-200, #E5E7EB)',
        ...controllerStyles,
      }),
      indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        display: isMulti ? 'block' : 'none',
      }),
      placeholder: (baseStyles) => ({
        ...baseStyles,
        fontSize: '.875rem',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        color: 'var(--color-grey-500, #8B96A2)',
      }),
      multiValue: (baseStyles) => ({
        ...baseStyles,
        background: 'var(--upload-file-bg-color)',
        color: 'var(--default-theme-color)',
      }),
      multiValueLabel: (baseStyles) => ({
        ...baseStyles,
        fontSize: '.9rem',
        fontWeight: 500,
        color: 'var(--default-theme-color)',
        borderRadius: '.5rem',
        padding: '0rem 0.3125rem',
      }),
      menuList: (baseStyles) => ({
        ...baseStyles,
        maxHeight: '10rem',
        fontSize: '0.9rem',
        marginBottom: '0rem',
        ...menuListClass,
      }),
      multiValueRemove: (baseStyles) => ({
        ...baseStyles,
        fontSize: '.9rem',
        fontWeight: 500,
        color: 'var(--default-theme-color)',
        borderRadius: '0rem .375rem .375rem 0rem',
        padding: '0rem 0.3125rem',
      }),
      menu: (baseStyles) => ({
        ...baseStyles,
        margin: '.25rem 0rem',
      }),
      menuPortal: (baseStyles) => ({
        ...baseStyles,
        zIndex: 9,
      }),
      option: (baseStyles, state) => {
        const { isDisabled } = state;
        const customStyles = state.data?.styles || {};
        return {
          ...baseStyles,
          borderRadius: isDisabled ? 0 : '0.375rem',
          display: 'flex',
          background: isMulti ? 'transparent' : '',
          cursor: isDisabled ? 'default' : 'pointer',
          ...customStyles,
        };
      },
    },
  };

  const select =
    variant === 'creatable' || variant === 'creatable-chip' ? (
      <CreatableSelect {...dropDownProps} />
    ) : (
      <Select
        {...dropDownProps}
        onMenuScrollToBottom={onScrollPaginate}
        onInputChange={onInputChange}
      />
    );

  return (
    <div className={`dropdown-container ${className}`}>
      {dropdownLabel && <Label required={required} text={dropdownLabel} />}
      {select}
      {!hideErrorSpace && <Error error={error} />}
    </div>
  );
};

DropDown.propTypes = {
  field: PropTypes.string.isRequired,
  dropdownLabel: PropTypes.string,
  error: PropTypes.string,
  controllerStyles: PropTypes.object,
  className: PropTypes.string,
  required: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
  hideErrorSpace: PropTypes.bool,
  value: PropTypes.any,
  menuListClass: PropTypes.string,
  onScrollPaginate: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default memo(DropDown);
