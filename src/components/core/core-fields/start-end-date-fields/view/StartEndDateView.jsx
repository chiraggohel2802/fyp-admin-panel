import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './startEndDateView.module.css';
import { CORE_FIELDS } from 'constants/pages.constants';

const StartEndDateView = ({
  data,
  label = [
    CORE_FIELDS.START_END_DATE_FIELDS.START_DATE_TEXTFIELD_LABEL,
    CORE_FIELDS.START_END_DATE_FIELDS.END_DATE_TEXTFIELD_LABEL,
  ],
}) => {
  const [startDateLabel, endDateLabel] = label;
  const [startDateData, endDateData] = data;
  return (
    <React.Fragment>
      {/* startDate View */}
      <div className={styles.dataRowDataRow}>
        <label className={styles.dataRowDataRowLabel}>{startDateLabel}</label>
        <label className={styles.dataRowDataRowValue}>{startDateData}</label>
      </div>

      {/* endDate View */}
      <div className={styles.dataRowDataRow}>
        <label className={styles.dataRowDataRowLabel}>{endDateLabel}</label>
        <label className={styles.dataRowDataRowValue}>{endDateData}</label>
      </div>
    </React.Fragment>
  );
};

StartEndDateView.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.array,
};

export default memo(StartEndDateView);
