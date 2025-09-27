import { TABLE } from 'constants/config.constants';
import useGlobalHook from 'hooks/useGlobalHook';
import { SEO } from 'components/seo/constant';

const columnFields = [
  { key: 'metaTitle', title: SEO.FORM.META_TITLE_LABEL },
  { key: 'metaDescription', title: SEO.FORM.META_DESCRIPTION_LABEL },
  { key: 'metaKeywords', title: SEO.FORM.META_KEYWORDS_LABEL },
  { key: 'canonicalLink', title: SEO.FORM.CANONICAL_LINK_LABEL },
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
      ...tableListCommonColumns(data),
    };
  });

  return { rows, columns };
}
