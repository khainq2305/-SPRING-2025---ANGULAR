import { Routes } from '@angular/router';

// ui
import { AppChipsComponent } from './chips/chips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
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
    ],
    
  },
];
