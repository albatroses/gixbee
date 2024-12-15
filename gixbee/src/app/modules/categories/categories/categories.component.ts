import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Category {
  name: string;  // This property must match what you use in the HTML template.
  services: Service[];
}

interface Service {
  name: string;
  iconClass: string;
}

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      name: "Home Maintenance",
      services: [
        { name: "Painter", iconClass: "icon-painter" },
        { name: "Plumber", iconClass: "icon-plumber" },
        { name: "Electrician", iconClass: "icon-electrician" },
        { name: "Carpenter", iconClass: "icon-carpenter" }
      ]
    },
    {
      name: "Home Appliance Repairs",
      services: [
        { name: "AC Service", iconClass: "icon-ac-service" },
        { name: "Washing Machine", iconClass: "icon-washing-machine" },
        { name: "Refrigerator", iconClass: "icon-refrigerator" },
        { name: "Microwave", iconClass: "icon-microwave" }
      ]
    },
    {
      name: "Personal Care",
      services: [
        { name: "Haircut", iconClass: "icon-haircut" },
        { name: "Manicure", iconClass: "icon-manicure" },
        { name: "Massage", iconClass: "icon-massage" }
      ]
    },
    {
      name: "Cleaning Services",
      services: [
        { name: "House Cleaning", iconClass: "icon-house-cleaning" },
        { name: "Office Cleaning", iconClass: "icon-office-cleaning" },
        { name: "Car Wash", iconClass: "icon-car-wash" },
        { name: "Window Cleaning", iconClass: "icon-window-cleaning" }
      ]
    }
  ];
  
  
}
