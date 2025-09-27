import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import useRole from 'components/user-management/role/hooks/useRole';
import { BiPlusCircle } from 'react-icons/bi';
import { ListProvider } from 'context/table-list/ListProvider';
import { ROLE, roleListConfigurations } from '../../constant';
import React from 'react';
import { useAuth } from 'context/auth/AuthContext';
import { PERMISSIONS } from 'constants/config.constants';

const List = () => {
  const { handleAddRole } = useRole();
  const { checkPermission } = useAuth();

  return (
    <PageContainer
      heading={ROLE.HEADING}
      subHeading={ROLE.SUB_HEADING}
      hasButton={checkPermission([PERMISSIONS.USER_MANAGEMENT.ROLE.CREATE])}
      buttonProps={{
        text: ROLE.ADD_ROLE_BUTTON_TEXT,
        suffix: <BiPlusCircle size={20} />,
        onClick: handleAddRole,
      }}
    >
      <ListProvider value={roleListConfigurations}>
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;
