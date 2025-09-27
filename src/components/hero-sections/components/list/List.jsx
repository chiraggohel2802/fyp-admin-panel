import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import { ListProvider } from 'context/table-list/ListProvider';
import { HERO_SECTION } from '../../constant';
import React from 'react';
import { HERO_SECTION as HERO_SECTION_API } from 'api/apiEndPoints';

const List = () => {
  return (
    <PageContainer
      heading={HERO_SECTION.HEADING}
      subHeading={HERO_SECTION.SUB_HEADING}
      hasButton={false}
    >
      <ListProvider
        value={{ api_endpoint: HERO_SECTION_API.LIST, isPaginate: false }}
      >
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;