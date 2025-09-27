import { useMutation } from '@tanstack/react-query';
import { putRequest } from 'api/apiRequest';
import { StatusBadge, SwitchButton } from 'components/core';
import { STATUS_LABEL_OPTIONS } from 'constants/config.constants';
import { toast } from 'react-toastify';
import { Confirmation } from 'utils/SweetAlert';
import { GenerateRoute } from 'utils/CommonFun';
import useError from './useError';
import React from 'react';

export const useGetStatus = (url, refetchList, disabled) => {
  const { triggerError } = useError();
  const updateStatusMutation = useMutation({
    mutationFn: ({ id }) => putRequest(GenerateRoute(url ?? '', { ':id': id })),
    onSuccess: (response) => {
      if (typeof refetchList !== 'undefined') {
        refetchList(); // refetch list when status is changed
      }
      toast.success(response?.message); // Show success toast notification
    },
    onError: (error) => triggerError(error), // Trigger error handling
  });
  // Memoize the getStatusObject function to preserve its reference across renders
  // The function will only be recreated if memoizedStatusLabels changes
  const getStatusObject = (params) => {
    const { statusLabels, status } = params;
    return statusLabels.find((item) => item.status === status);
  };

  const getStatusLabel = (status) => {
    const isStatus = getStatusObject({
      status,
      statusLabels: STATUS_LABEL_OPTIONS,
    });
    return {
      status: <StatusBadge badge={isStatus?.type} label={isStatus?.label} />,
    };
  };

  /**
   * Function to handle the change event for the SwitchButton component.
   *
   * @param {boolean} isChecked - The new value of the switch.
   * @param {string} id - The id of the driver.
   */
  const handleChange = async (id) => {
    Confirmation('Are you sure you want to change this status?').then(
      async (changeConfirmation) => {
        if (changeConfirmation.isConfirmed) {
          await updateStatusMutation.mutateAsync({ id });
        }
      }
    );
  };

  const changeStatus = (status, id) => {
    return {
      isTopTherapist: (
        <SwitchButton
          label=""
          value={status}
          name={`isTopTherapist-${id}`}
          onChange={() => handleChange(id)}
          disabled={disabled}
        />
      ),
    };
  };

  return { getStatusObject, getStatusLabel, changeStatus };
};
