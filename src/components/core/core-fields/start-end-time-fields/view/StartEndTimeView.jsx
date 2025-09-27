import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './startEndTimeView.module.css';
import { CORE_FIELDS } from 'constants/pages.constants';

const StartEndTimeView = ({
  data,
  label = [
    CORE_FIELDS.START_END_TIME_FIELDS.START_TIME_TEXTFIELD_LABEL,
    CORE_FIELDS.START_END_TIME_FIELDS.END_TIME_TEXTFIELD_LABEL,
  ],
}) => {
  const [startTimeLabel, endTimeLabel] = label;
  const [startTimeData, endTimeData] = data;
  return (
    <React.Fragment>
      {/* startTime View */}
      <div className={styles.dataRowDataRow}>
        <label className={styles.dataRowDataRowLabel}>{startTimeLabel}</label>
        <label className={styles.dataRowDataRowValue}>{startTimeData}</label>
      </div>

      {/* endTime View */}
      <div className={styles.dataRowDataRow}>
        <label className={styles.dataRowDataRowLabel}>{endTimeLabel}</label>
        <label className={styles.dataRowDataRowValue}>{endTimeData}</label>
      </div>
    </React.Fragment>
  );
};

StartEndTimeView.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.array,
};

export default memo(StartEndTimeView);
