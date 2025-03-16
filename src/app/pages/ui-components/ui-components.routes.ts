import { Routes } from '@angular/router';

// ui
import { AppChipsComponent } from './chips/chips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
=======

// Thêm import mới tại đây
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
>>>>>>> 8d7d95c ([ADMIN-UI]-create admin user management interface)
=======
// Import các component Product
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {DeletedProductsComponent } from './product/deleted-products/deleted-products.component'; // 🔥 Thêm component này
>>>>>>> bac9ede ([Admin - UI] Implement product CRUD interface)
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
<<<<<<< HEAD
      { path: 'user/user-create', component: UserCreateComponent },
      { path: 'user/user-list', component: UserListComponent },
=======
      // Route cho Product
      {
        path: 'product/product-list',
        component: ProductListComponent,
      },
      {
        path: 'product/product-create',
        component: ProductCreateComponent,
      },
      {
        path: 'product/product-edit',
        component: ProductEditComponent,
      },
      {
        path: 'product/deleted-products',  // 🔥 Route cho sản phẩm đã xóa
        component: DeletedProductsComponent,
      },
      
>>>>>>> bac9ede ([Admin - UI] Implement product CRUD interface)
    ],
    
  },
];
