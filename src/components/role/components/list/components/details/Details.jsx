import React from 'react';
import PropTypes from 'prop-types';
import ModalComponent from 'components/core/modal/Modal';
import styles from './details.module.css';
import useGetDetail from './hooks/useGetDetails';
import { StatusBadge } from 'components/core';
import { ROLE } from 'components/user-management/role/constant';

const Details = ({ isOpen, id, handleCloseBtn }) => {
  const { roleDetails, isLoadingRoleDetails } = useGetDetail(id);

  return (
    <ModalComponent
      modalHeadingTitle={ROLE.TITLE}
      handleClose={handleCloseBtn}
      hideFooterCloseBtn
      isOpen={isOpen}
      isLoading={isLoadingRoleDetails}
    >
      <div className={styles.dataRow}>
        {/* Role Name */}
        <div className={styles.dataRowDataRow}>
          <label className={styles.dataRowDataRowLabel}>
            {ROLE.FORM.NAME_FIELD_LABEL}
          </label>
          <label className={styles.dataRowDataRowValue}>
            {roleDetails?.name}
          </label>
        </div>

        {/* Role Status */}
        <div className={styles.dataRowDataRow}>
          <label className={styles.dataRowDataRowLabel}>Status</label>
          {roleDetails?.status}
        </div>

        {/* Role Description */}
        <div className={styles.dataRowDataRow}>
          <label className={styles.dataRowDataRowLabel}>
            {ROLE.FORM.DESCRIPTION_FIELD_LABEL}
          </label>
          <label className={styles.dataRowDataRowValue}>
            {roleDetails?.description}
          </label>
        </div>

        {/* Role Permissions */}
        <div className={styles.permissionRow}>
          <label className={styles.dataRowDataRowLabel}>
            {ROLE.FORM.PERMISSIONS_FIELD_LABEL}
          </label>
          <label className={styles.dataRowDataRowValue}>
            <div className="d-flex flex-wrap gap-2">
              {roleDetails?.permissions?.length > 0
                ? roleDetails?.permissions?.map((item) => (
                    <StatusBadge
                      key={`role-details-permission-key-${item?.id}`}
                      badge="Info"
                      label={item?.name}
                    />
                  ))
                : '-'}
            </div>
          </label>
        </div>
      </div>
    </ModalComponent>
  );
};

Details.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleCloseBtn: PropTypes.func.isRequired,
};

export default Details;
