import React, { Suspense } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import useSidebar from './hooks/useSidebar';
import classNames from 'classnames';
import { PageLoader } from 'components/core';
import { Outlet } from 'react-router-dom';

const MasterPage = () => {
  const { getSidebarClass, toggleSidebar, toggleHoverSidebar, isHoverSidebar } =
    useSidebar();

  return (
    <div className={classNames(getSidebarClass(), 'main-wrapper')}>
      <Header toggleSidebar={toggleSidebar} getSidebarClass={getSidebarClass} />
      <Sidebar
        getSidebarClass={getSidebarClass}
        toggleHoverSidebar={toggleHoverSidebar}
        isHoverSidebar={isHoverSidebar}
      />
      <article>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </article>
    </div>
  );
};
export default MasterPage;
