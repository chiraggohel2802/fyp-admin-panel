import { AiFillHome } from 'react-icons/ai';
import ROUTES_ENUMS from 'routes/url.enum';
import { SIDEBAR_MENU_TYPE } from '../sidebar.constants';
import { SIDE_MENU } from 'constants/pages.constants';
import { AiOutlinePoweroff, AiOutlineSetting } from 'react-icons/ai';

// import { FaUserFriends } from 'react-icons/fa';
import React from 'react';

const useSidebarItems = () => {
  const sidebarItems = [
    {
      type: SIDEBAR_MENU_TYPE.TITLE,
      label: SIDE_MENU.MAIN_TITLE,
      to: '',
      icon: undefined,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.DASHBOARD.INDEX,
      label: SIDE_MENU.DASHBOARD,
      icon: <AiFillHome fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.TITLE,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.TITLE,
      to: '',
      icon: undefined,
      permissions: ['*'],
    },
    /* {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.SEO_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.INDEX,
      icon: <FaUserFriends fontSize={20} />,
      permissions: ['*'],
      subMenuItems: [
        {
          label: SIDE_MENU.FRONTEND_MANAGEMENT.SEO,
          to: ROUTES_ENUMS.SEO_MANAGEMENT.INDEX,
          permissions: ['*'],
        },
        {
          label: SIDE_MENU.FRONTEND_MANAGEMENT.SLIDER,
          to: ROUTES_ENUMS.SLIDER_MANAGEMENT.INDEX,
          permissions: ['*'],
        },
        {
          label: SIDE_MENU.FRONTEND_MANAGEMENT.TOP_THERAPIST,
          to: ROUTES_ENUMS.THERAPIST_MANAGEMENT.INDEX,
          permissions: ['*'],
        },
      ],
    }, */
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.SEO_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.SEO,
      icon: <AiOutlineSetting fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.HERO_SECTION_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.HERO_SECTION,
      icon: <AiOutlineSetting fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.SLIDER_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.SLIDER,
      icon: <AiOutlineSetting fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.THERAPIST_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.TOP_THERAPIST,
      icon: <AiOutlineSetting fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.FOOTER_CMS_MANAGEMENT.INDEX,
      label: SIDE_MENU.FRONTEND_MANAGEMENT.FOOTER,
      icon: <AiOutlineSetting fontSize={20} />,
      permissions: ['*'],
    },
    {
      type: SIDEBAR_MENU_TYPE.ITEM,
      to: ROUTES_ENUMS.LOGOUT,
      label: SIDE_MENU.LOGOUT,
      icon: <AiOutlinePoweroff fontSize={20} />,
      optionalPermission: true,
    },
  ];

  return { sidebarItems };
};
export default useSidebarItems;
