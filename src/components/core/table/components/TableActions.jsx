import {
  DocumentCopy,
  EditOutline,
  Eye,
  TrashOutline,
} from 'assets/iconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from '../table.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const tooltip = (text) => (
  <Tooltip id="tooltip" className={styles.tooltipAction}>
    {text}
  </Tooltip>
);

const TableActions = ({
  id,
  onView,
  onEdit,
  onDelete,
  hideViewButton = false,
  hideDeleteButton = false,
  hideEditButton = false,
  showCopyButton = false,
  rowSpan,
}) => (
  <td
    key={`table-body-action-${id}`}
    className={styles.fixedActionsColumn}
    rowSpan={rowSpan}
  >
    <div className={styles.buttonsBox}>
      {/* Hide Copy Button */}
      {showCopyButton && (
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          overlay={tooltip('Copy')}
        >
          <button type="button" onClick={() => onEdit?.(id)}>
            <DocumentCopy width="1.00144rem" height="1rem" />
          </button>
        </OverlayTrigger>
      )}

      {/* Edit Button with tooltip */}
      {!hideEditButton && (
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          overlay={tooltip('Edit')}
        >
          <button type="button" onClick={() => onEdit?.(id)}>
            <EditOutline width="1.00144rem" height="1rem" />
          </button>
        </OverlayTrigger>
      )}

      {/* Delete Button with tooltip */}
      {!hideDeleteButton && (
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          overlay={tooltip('Delete')}
        >
          <button type="button" onClick={() => onDelete?.(id)}>
            <TrashOutline width="0.97563rem" height="1rem" />
          </button>
        </OverlayTrigger>
      )}

      {/* View Button with tooltip */}
      {!hideViewButton && (
        <OverlayTrigger
          trigger={['click', 'hover']}
          placement="bottom"
          overlay={tooltip('View')}
        >
          <button type="button" onClick={() => onView?.(id)}>
            <Eye width="0.97563rem" height="1rem" />
          </button>
        </OverlayTrigger>
      )}
    </div>
  </td>
);

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  hideViewButton: PropTypes.bool,
  hideDeleteButton: PropTypes.bool,
  hideEditButton: PropTypes.bool,
  showCopyButton: PropTypes.bool,
  rowSpan: PropTypes.number,
};

export default TableActions;
