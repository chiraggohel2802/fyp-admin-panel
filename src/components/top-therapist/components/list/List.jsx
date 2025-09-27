import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import { ListProvider } from 'context/table-list/ListProvider';
import React from 'react';
import { THERAPIST as THERAPIST_API } from 'api/apiEndPoints';
import QueryString from 'qs';
import { THERAPIST } from 'components/top-therapist/constant';

const List = () => {
  const params = {
    /* page: 1,
    pageSize: 9,
    reviewCount: { min: 0, max: 1000 },
    rating: { min: 4.5, max: 5 },
    superSpecialization: 'all',
    sortBy: 'top-rated', */
  };

  const queryString = QueryString.stringify(params, { encode: false });

  return (
    <PageContainer
      heading={THERAPIST.HEADING}
      subHeading={THERAPIST.SUB_HEADING}
      hasButton={false}
    >
      <ListProvider
        value={{
          api_endpoint: `${THERAPIST_API.LIST}?${queryString}`,
        }}
      >
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;
