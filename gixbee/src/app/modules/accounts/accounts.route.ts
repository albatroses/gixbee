import { Routes } from "@angular/router";
export const accountsRoutes: Routes =[
    {
        path: "",
        loadComponent: () =>
          import("./accounts/accounts.component").then(
            (c) => c.AccountsComponent
          ),
      },
]