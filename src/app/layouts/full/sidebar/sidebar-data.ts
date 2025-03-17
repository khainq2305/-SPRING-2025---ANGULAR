import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Danh mục',
    iconName: 'list-details',
    route: '/ui-components/category',
    children: [
      {
        displayName: 'Danh sách',
        iconName: 'point',
        route: '/ui-components/category/list',
      },
      {
        displayName: 'Thêm mới',
        iconName: 'point',
        route: '/ui-components/category/add',
      },
    ],
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
