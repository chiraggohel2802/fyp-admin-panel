import React, { memo } from 'react';
import { PageContainer } from 'components/core';
import { PAGES } from 'constants/pages.constants';
// const Counters = lazy(() => import('./components/counters/Counters'));

const Dashboard = () => {
  return (
    <PageContainer
      heading={PAGES.DASHBOARD.HEADING}
      subHeading={PAGES.DASHBOARD.SUB_HEADING}
    >
      {/* <Counters /> */}
    </PageContainer>
  );
};

export default memo(Dashboard);
