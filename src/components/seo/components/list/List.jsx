import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import { ListProvider } from 'context/table-list/ListProvider';
import { SEO } from '../../constant';
import React from 'react';
import { SEO as SEO_API } from 'api/apiEndPoints';

const List = () => {
  return (
    <PageContainer
      heading={SEO.HEADING}
      subHeading={SEO.SUB_HEADING}
      hasButton={false}
    >
      <ListProvider value={{ api_endpoint: SEO_API.LIST, isPaginate: false }}>
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;
