import Label from '../label/Label';
import styles from './Phone.module.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import useHandleChange from './hooks/useHandleChange';
import Error from '../error/Error';
import usePhoneInput from './hooks/usePhoneInput';
import PropTypes from 'prop-types';
import React from 'react';

const PhoneInputs = (props) => {
  const {
    value,
    placeholder,
    name,
    error,
    label,
    required,
    suffix,
    suffixCustomStyles,
    suffixOnClick,
  } = props;

  const { suffixClasses, defaultSuffixIcon, defaultSuffixOnClick } =
    usePhoneInput(props);

  const { handleChange } = useHandleChange(name);

  return (
    <div className="className">
      <div className={styles.textFieldContainer}>
        {label && <Label required={required} text={label} />}

        <div className={styles.textFieldRow}>
          <div className={styles.paddingTop}>
            <div className={styles.suffixContainer}>
              <PhoneInput
                defaultCountry="US"
                value={value}
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
                className={styles.phoneNumberContainer}
              />

              {/* Suffix */}
              {(!!suffix || !!defaultSuffixIcon) && (
                <span
                  className={suffixClasses}
                  style={suffixCustomStyles}
                  onClick={suffixOnClick || defaultSuffixOnClick}
                >
                  {suffix || defaultSuffixIcon}
                </span>
              )}
            </div>

            {/* Error */}
            <Error error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

PhoneInputs.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  suffix: PropTypes.node,
  suffixCustomStyles: PropTypes.object,
  suffixOnClick: PropTypes.func,
};

export default PhoneInputs;
