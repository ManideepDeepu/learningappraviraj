import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component'
import { DepartmentComponent } from './department/department.component'
import { DepartmentformComponent } from './departmentform/departmentform.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginpageComponent,
  },

  {
    path: 'login/dept',
    component: DepartmentComponent,
  },
  
  {
    path: 'login/dept/form',
    component: DepartmentformComponent,
  },
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);