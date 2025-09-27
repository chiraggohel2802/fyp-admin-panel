import { HERO_SECTION } from 'components/hero-sections/constant';
import { TABLE } from 'constants/config.constants';
import useGlobalHook from 'hooks/useGlobalHook';
import React from 'react';

const columnFields = [
  { key: 'page', title: HERO_SECTION.FORM.PAGE_LABEL },
  { key: 'title', title: HERO_SECTION.FORM.TITLE_LABEL },
  { key: 'subtitle', title: HERO_SECTION.FORM.SUBTITLE_LABEL },
  { key: 'description', title: HERO_SECTION.FORM.DESCRIPTION_LABEL },
  { key: 'image', title: HERO_SECTION.FORM.IMAGE_LABEL },
  { key: 'buttonText', title: HERO_SECTION.FORM.BUTTON_TEXT_LABEL },
  ...TABLE.LIST_COMMON_COLUMN,
];

/**
 * Custom hook to format row and column data for the hero section list table.
 *
 * @param {Array} data - The raw hero section data.
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
   * Transform the data to include new fields and edit fields
   *
   * @param {string} description - descriptions add the text limit 30 with ... continue sign
   * @param {string} createdAt - update createdAt field for show the registered date
   */
  const rows = data?.map((data) => {
    return {
      ...data,
      description: data.description?.length > 50 ? `${data.description.substring(0, 50)}...` : data.description,
      image: data.image ? (
        <img
          src={data.image}
          alt={data.imageAltText || "hero section"}
          style={{ width: 60, height: 40, objectFit: 'cover' }}
        />
      ) : null,
      ...tableListCommonColumns(data),
    };
  });

  return { rows, columns };
}