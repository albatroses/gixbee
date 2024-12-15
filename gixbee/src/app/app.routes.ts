import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      },
    { path: "app", component: LayoutComponent,
        children: [
            {
                path: "home",
                loadChildren: () =>
                  import("./modules/home/home.route").then((c) => c.homeRoutes),
              },
              {
                path: "orders",
                loadChildren: () =>
                  import("./modules/order/orders.route").then((c) => c.ordersRoutes),
              },
              {
                path: "accounts",
                loadChildren: () =>
                  import("./modules/accounts/accounts.route").then((c) => c.accountsRoutes),
              },
              {
                path: "categories",
                loadChildren: () =>
                  import("./modules/categories/categorie.route").then((c) => c.categoriesRoutes),
              },
        ]
     },

    { path: "login", component: LoginComponent },
];
