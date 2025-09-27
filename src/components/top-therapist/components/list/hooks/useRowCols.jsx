import { THERAPIST, therapistStatusLabels } from 'components/top-therapist/constant';
import { THERAPIST as THERAPIST_API } from 'api/apiEndPoints';
import useGlobalHook from 'hooks/useGlobalHook';
import { StatusBadge, SwitchButton } from 'components/core';
import React from 'react';
import { useGetStatus } from 'hooks/useGetStatus';

const columnFields = [
  { key: 'sequence', title: THERAPIST.FORM.SEQUENCE_LABEL },
  { key: 'isTopTherapist', title: THERAPIST.FORM.STATUS_LABEL },
  { key: 'userFullName', title: THERAPIST.FORM.USER_FULL_NAME_LABEL },
  { key: 'username', title: THERAPIST.FORM.USER_NAME_LABEL },
  { key: 'designation', title: THERAPIST.FORM.DESIGNATION_LABEL },
  { key: 'qualification', title: THERAPIST.FORM.QUALIFICATION_LABEL },
  { key: 'rating', title: THERAPIST.FORM.RATING_LABEL },
  { key: 'specialisation', title: THERAPIST.FORM.SPECIALISATION_LABEL },
];

/**
 * Custom hook to format row and column data for the therapist list table.
 *
 * @param {Array} data - The raw therapist data.
 * @param {Function} refetchList - Function to refetch the list after status change.
 * @returns {Object} - An object containing the formatted rows and columns.
 * @property {Array} rows - The formatted row data.
 * @property {Array} columns - The formatted column data.
 */
export default function useRowCols(data, refetchList) {
  const { changeStatus } = useGetStatus(
    THERAPIST_API.CHANGE_TOP_THERAPIST_STATUS,
    refetchList,
    false
  );

  const columns = columnFields.map(({ key, title }) => ({
    field: key,
    headerName: title,
  }));

  /**
   * Transform the data to include properties from partnerMeta
   *
   * @param {Object} data - The therapist data with nested partnerMeta object
   * @returns {Object} - Flattened data with relevant properties
   */
  const rows = data?.map((item) => {
    return {
      id: item.id,
      userFullName: `${item.firstName || ''} ${item.lastName || ''}`.trim(),
      username: item.partnerMeta?.username || '',
      designation: item.partnerMeta?.designation || '',
      qualification: item.partnerMeta?.qualification || '',
      rating: item.partnerMeta?.rating || 0,
      specialisation: item.partnerMeta?.specialisation || '',
      service: Array.isArray(item.partnerMeta?.service) 
        ? item.partnerMeta.service.join(', ') 
        : '',
      sequence: item.partnerMeta?.sequence || 0,
      ...changeStatus(item.isTopTherapist, item.id),
    };
  })/* .sort((a, b) => {
    // Treat 0 as "last"
    if (!a.sequence) return 1; // 0 or null/undefined → push down
    if (!b.sequence) return -1;
    return a.sequence - b.sequence; // Sort ascending for non-zero
  }) */;

  return { rows, columns };
}
