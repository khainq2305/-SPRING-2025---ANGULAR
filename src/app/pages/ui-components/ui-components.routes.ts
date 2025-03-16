import { Routes } from '@angular/router';

// ui
import { AppChipsComponent } from './chips/chips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
<<<<<<< HEAD
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
=======

// Thêm import mới tại đây
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
>>>>>>> 8d7d95c ([ADMIN-UI]-create admin user management interface)
export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category/list',
        component: ListComponent,
      },
      {
        path: 'category/add',
        component: AddComponent,
      },
      {
        path: 'category/edit/:id',
        component: EditComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
  
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      { path: 'user/user-create', component: UserCreateComponent },
      { path: 'user/user-list', component: UserListComponent },
    ],
    
  },
];
