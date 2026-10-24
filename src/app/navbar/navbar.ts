import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Navbar {
  private readonly el = inject(ElementRef);

  readonly companyName = 'Freelancing IT Pravin';

  readonly menuOpen = signal(false);
  readonly servicesOpen = signal(false);

  readonly links: readonly NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly services: readonly NavLink[] = [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile App Development', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'UI / UX Design', href: '#services' },
    { label: 'Business Solutions', href: '#services' },
  ];

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  toggleServices() {
    this.servicesOpen.update((open) => !open);
  }

  // Close the mobile menu and the dropdown (used when a link is clicked)
  closeMenu() {
    this.menuOpen.set(false);
    this.servicesOpen.set(false);
  }

  // Close the dropdown when clicking outside the navbar
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.servicesOpen.set(false);
    }
  }
}