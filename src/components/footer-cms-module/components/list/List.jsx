import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import { ListProvider } from 'context/table-list/ListProvider';
import { FOOTER_CMS } from '../../constant';
import React from 'react';
import { FOOTER_MENU as FOOTER_MENU_API } from 'api/apiEndPoints';
import useFooterCMS from 'components/footer-cms-module/hooks/useFooterCMS';
import { BiPlusCircle } from 'react-icons/bi';

const List = () => {
  const { handleAddFooterCms } = useFooterCMS();
  return (
    <PageContainer
      heading={FOOTER_CMS.HEADING}
      subHeading={FOOTER_CMS.SUB_HEADING}
      hasButton={true}
      buttonProps={{
        text: FOOTER_CMS.ADD.BUTTON,
        suffix: <BiPlusCircle size={20} />,
        onClick: handleAddFooterCms,
      }}
    >
      <ListProvider value={{ api_endpoint: FOOTER_MENU_API.LIST, isPaginate: false }}>
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;
