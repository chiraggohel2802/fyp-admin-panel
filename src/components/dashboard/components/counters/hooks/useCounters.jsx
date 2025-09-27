import { BiDollar } from 'react-icons/bi';
import React from 'react';

const useCounters = () => {
  const countersData = [
    {
      title: 'Users',
      count: 20,
      iconClass: 'bgWarning bgIconWarning',
      icon: <BiDollar />,
    },
    {
      title: 'Customers',
      count: 20,
      iconClass: 'bgPrimary bgIconPrimary',
      icon: <BiDollar />,
    },
    {
      title: 'Roles',
      count: 20,
      iconClass: 'bgSuccess bgIconSuccess',
      icon: <BiDollar />,
    },
    {
      title: 'Bookings',
      count: 20,
      iconClass: 'bgPurple bgIconPurple',
      icon: <BiDollar />,
    },
    {
      title: 'Payment',
      count: 20,
      iconClass: 'bgPrimary bgIconPrimary',
      icon: <BiDollar />,
    },
  ];
  return { countersData };
};

export default useCounters;
