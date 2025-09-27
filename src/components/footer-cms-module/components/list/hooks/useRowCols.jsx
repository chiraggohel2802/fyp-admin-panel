import { FOOTER_CMS } from 'components/footer-cms-module/constant';
import { TABLE } from 'constants/config.constants';
import useGlobalHook from 'hooks/useGlobalHook';

const columnFields = [
  { key: 'title', title: FOOTER_CMS.FORM.FOOTER_TITLE_LABEL },
  { key: 'url_link', title: FOOTER_CMS.FORM.FOOTER_URL_LABEL },
  { key: 'category', title: FOOTER_CMS.FORM.FOOTER_CATEGORY_LABEL },
  ...TABLE.LIST_COMMON_COLUMN,
];

const CATEGORY_LABELS = {
  1: 'How We Can Help',
  2: 'Therapy Services',
  3: 'About',
  4: 'Contact Us',
};

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
      category: CATEGORY_LABELS[data.category] || data.category,
      ...tableListCommonColumns(data),
    };
  });

  return { rows, columns };
}
