import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoriesComponent } from './modules/categories/categories/categories.component';
import { SettingsComponent } from './modules/setting/settings/settings.component';
import { OrdersComponent } from './modules/order/orders/orders.component';
import { HomeComponent } from './modules/home/home/home.component';

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
                path: "setting",
                loadChildren: () =>
                  import("./modules/setting/setting.route").then((c) => c.settingRoutes),
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
