import React from 'react';
import styles from './statusBadge.module.css';
import PropTypes from 'prop-types';

/**
 * Renders a badge with a label that changes style based on the status prop
 *
 * @param {StatusBadgePropsTypes} props - The props for the component
 * @param {string} [props.key] - The text key for the badge background
 * @param {string} props.label - The label to display inside the badge
 */
const StatusBadge = ({ badge, label }) => {
  const badges = [
    { type: 'Primary', color: '#4a5a8f', backgroundColor: '#ebedf3' },
    { type: 'Secondary', color: '#3f7def', backgroundColor: '#eaf1fe' },
    { type: 'Success', color: '#0ab39c', backgroundColor: '#e6f7f5' },
    { type: 'Info', color: '#299cdb', backgroundColor: '#e9f5fc' },
    { type: 'Warning', color: '#f7b84b', backgroundColor: '#fff8ec' },
    { type: 'Danger', color: '#f06548', backgroundColor: '#feefec' },
    { type: 'Dark', color: '#212529', backgroundColor: '#e8e8e9' },
    { type: 'Light', color: '#212529', backgroundColor: '#fff' },
  ];

  const findBadge = badges.find((item) => badge === item.type);

  return (
    <div className={styles.badge} style={findBadge}>
      <label>{label}</label>
    </div>
  );
};

StatusBadge.propTypes = {
  badge: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatusBadge;
