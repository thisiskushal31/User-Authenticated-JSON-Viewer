import React from 'react';
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const Sidebar = [
  {
    title: 'About',
    path: '/',
    icon: <RiIcons.RiDashboardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Editor',
    path: '/editor',
    icon: <BsIcons.BsFillKanbanFill />,
    cName: 'nav-text'
  },
];

