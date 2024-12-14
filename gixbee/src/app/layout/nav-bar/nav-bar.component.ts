import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],  // Ensure it's styleUrls
  standalone: true
})
export class NavBarComponent implements OnInit {
  isMobile = false;
  selectedIndex: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
    }
  }

  navItems = [
    { label: 'Home', icon: 'home', route: '/app/home' },
    { label: 'Settings', icon: 'setting', route: '/app/setting' },
    { label: 'Orders', icon: 'orders', route: '/app/orders' },
    { label: 'Categories', icon: 'categories', route: '/app/categories' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
    }
  }

  private checkWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  @HostListener('window:resize', [])
  updateView() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
    }
  }

  setActiveIndex(index: number): void {
    this.selectedIndex = index;
  }
}
