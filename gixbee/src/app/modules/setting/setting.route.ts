import { Routes } from "@angular/router";
export const settingRoutes: Routes =[
    {
        path: "",
        loadComponent: () =>
          import("./settings/settings.component").then(
            (c) => c.SettingsComponent
          ),
      },
]