import { PageContainer } from 'components/core';
import TableList from './components/table-list/TableList';
import { ListProvider } from 'context/table-list/ListProvider';
import { SLIDER } from '../../constant';
import React from 'react';
import { SLIDER as SLIDER_API } from 'api/apiEndPoints';
import useSlider from 'components/slider/hooks/useSlider';
import { BiPlusCircle } from 'react-icons/bi';

const List = () => {
  const { handleAddSlider } = useSlider();
  return (
    <PageContainer
      heading={SLIDER.HEADING}
      subHeading={SLIDER.SUB_HEADING}
      hasButton={true}
      buttonProps={{
        text: SLIDER.ADD.BUTTON,
        suffix: <BiPlusCircle size={20} />,
        onClick: handleAddSlider,
      }}
    >
      <ListProvider
        value={{ api_endpoint: SLIDER_API.LIST, isPaginate: false }}
      >
        <TableList />
      </ListProvider>
    </PageContainer>
  );
};

export default List;
