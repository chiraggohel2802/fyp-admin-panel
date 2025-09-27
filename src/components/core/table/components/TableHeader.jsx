/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../table.module.css';
import { InfoCircleFill } from '../../../../assets/iconComponents';
import Tooltip from 'components/core/tool-tip/Tooltip';

const TableHeader = ({
  columns,
  editable = false,
  headerStyles,
  sr,
  srTitle,
}) => {
  return (
    <thead>
      <tr>
        {editable && (
          <th className={styles.fixedActionsColumnHeader} style={headerStyles}>
            {'Actions'}
          </th>
        )}
        {sr && <th style={{ ...headerStyles }}>{srTitle}</th>}
        {columns?.map(({ headerName, toolTipText, minWidth }, index) => (
          <th
            key={index}
            style={{ ...headerStyles, width: minWidth, zIndex: 1 }}
          >
            {headerName}{' '}
            {toolTipText && (
              <Tooltip
                text={
                  <InfoCircleFill
                    style={{ marginBottom: '0.125rem' }}
                    width="1rem"
                    height="1rem"
                  />
                }
                items={[{ text: toolTipText }]}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
