import styles from './statisticsCounter.module.css';
import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const StatisticsCounter = (props) => {
  const { title, count, icon, iconClass } = props;
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.dashWidgetHeader}>
          <span className={classNames(iconClass, styles.dashWidgetIcon)}>
            {icon}
          </span>
          <div className={styles.dashCount}>
            <div className={styles.dashTitle}>{title}</div>
            <div className={styles.dashCounts}>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StatisticsCounter.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node,
  iconClass: PropTypes.string,
};

export default memo(StatisticsCounter);
