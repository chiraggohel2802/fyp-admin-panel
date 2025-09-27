import { SLIDER } from 'components/slider/constant';
import { TABLE } from 'constants/config.constants';
import useGlobalHook from 'hooks/useGlobalHook';
import React from 'react';

const columnFields = [
  { key: 'title', title: SLIDER.FORM.TITLE_LABEL },
  { key: 'description', title: SLIDER.FORM.DESCRIPTION_LABEL },
  { key: 'image', title: SLIDER.FORM.IMAGE_LABEL },
  { key: 'backgroundImage', title: SLIDER.FORM.BACKGROUND_IMAGE_LABEL },
  { key: 'mobileImage', title: SLIDER.FORM.MOBILE_IMAGE_LABEL },
  { key: 'mobileBackgroundImage', title: SLIDER.FORM.BACKGROUND_MOBILE_IMAGE_LABEL },
  { key: 'buttonText', title: SLIDER.FORM.BUTTON_TEXT_LABEL },
  { key: 'sequenceNo', title: SLIDER.FORM.SEQUENCE_NO_LABEL },
  ...TABLE.LIST_COMMON_COLUMN,
];

/**
 * Custom hook to format row and column data for the role list table.
 *
 * @param {Array} data - The raw role data.
 * @returns {Object} - An object containing the formatted rows and columns.
 * @property {Array} rows - The formatted row data.
 * @property {Array} columns - The formatted column data.
 */
export default function useRowCols(data) {
  const { tableListCommonColumns } = useGlobalHook();

  const columns = columnFields.map(({ key, title }) => ({
    field: key,
    headerName: title,
  }));

  /**
   * ransform the data to include new fields and edit fields
   *
   * @param {Array} permission - selected permission oprions with label and value key
   * @param {string} description - descriptions add the text limit 30 with ... continue sign
   * @param {string} createdAt - update createdAt field for show the registerd date
   */
  const rows = data?.map((data) => {
    return {
      ...data,
      image: data.image ? (
        <img
          src={data.image}
          alt="slider"
          style={{ width: 60, height: 40, objectFit: 'cover' }}
        />
      ) : null,
      backgroundImage: data.backgroundImage ? (
        <img
          src={data.backgroundImage}
          alt="background"
          style={{ width: 60, height: 40, objectFit: 'cover' }}
        />
      ) : null,
      mobileImage: data.mobileImage ? (
        <img
          src={data.mobileImage}
          alt="slider"
          style={{ width: 60, height: 40, objectFit: 'cover' }}
        />
      ) : null,
      mobileBackgroundImage: data.mobileBackgroundImage ? (
        <img
          src={data.mobileBackgroundImage}
          alt="background"
          style={{ width: 60, height: 40, objectFit: 'cover' }}
        />
      ) : null,
      ...tableListCommonColumns(data),
    };
  });

  return { rows, columns };
}
