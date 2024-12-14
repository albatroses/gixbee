import { Routes } from "@angular/router";
export const ordersRoutes: Routes =[
    {
        path: "",
        loadComponent: () =>
          import("./orders/orders.component").then(
            (c) => c.OrdersComponent
          ),
      },
]