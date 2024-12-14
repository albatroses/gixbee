import { Routes } from "@angular/router";
export const categoriesRoutes: Routes =[
    {
        path: "",
        loadComponent: () =>
          import("./categories/categories.component").then(
            (c) => c.CategoriesComponent
          ),
      },
]