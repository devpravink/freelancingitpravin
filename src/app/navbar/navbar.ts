
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal
} from '@angular/core';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeMenu()'
  }
})
export class Navbar {

  private readonly el = inject(ElementRef);

  readonly companyName = 'Freelancing IT Pravin';

  readonly menuOpen = signal(false);
  readonly servicesOpen = signal(false);
  readonly productsOpen = signal(false);

  // ALL SERVICES
  readonly services: readonly NavItem[] = [

    {
      label: 'Website Development',
      href: '#services',
      icon: '🌐',
      description: 'Modern and responsive websites'
    },
    {
      label: 'Web Application',
      href: '#services',
      icon: '💻',
      description: 'Custom web-based applications'
    },
    {
      label: 'E-Commerce Development',
      href: '#services',
      icon: '🛒',
      description: 'Online shopping solutions'
    },
    {
      label: 'Mobile App Development',
      href: '#services',
      icon: '📱',
      description: 'Android and cross-platform apps'
    },
    {
      label: 'Custom Software',
      href: '#services',
      icon: '⚙️',
      description: 'Business-specific software'
    },
    {
      label: 'UI / UX Design',
      href: '#services',
      icon: '🎨',
      description: 'Creative and modern interfaces'
    },
    {
      label: 'Backend & API Development',
      href: '#services',
      icon: '🔗',
      description: 'APIs and backend integration'
    },
    {
      label: 'Database Development',
      href: '#services',
      icon: '🗄️',
      description: 'Database design and management'
    },
    {
      label: 'Website Maintenance',
      href: '#services',
      icon: '🛠️',
      description: 'Updates and technical support'
    },
    {
      label: 'SEO & Performance',
      href: '#services',
      icon: '📈',
      description: 'Website speed and search optimization'
    },
    {
      label: 'Cloud & Deployment',
      href: '#services',
      icon: '☁️',
      description: 'Hosting and deployment solutions'
    },
    {
      label: 'Business Automation',
      href: '#services',
      icon: '🚀',
      description: 'Automate business workflows'
    }

  ];

  // PRODUCTS / DIGITAL SOLUTIONS

readonly products: readonly NavItem[] = [

  // SOFTWARE PRODUCTS
  {
    label: 'Business Management Software',
    href: '#products',
    icon: '📊',
    description: 'Complete business management systems'
  },
  {
    label: 'CRM Software',
    href: '#products',
    icon: '👥',
    description: 'Customer relationship management'
  },
  {
    label: 'Billing & Invoice Software',
    href: '#products',
    icon: '🧾',
    description: 'Smart billing and invoice systems'
  },
  {
    label: 'ERP Software',
    href: '#products',
    icon: '🏢',
    description: 'Enterprise resource planning'
  },
  {
    label: 'Inventory Management',
    href: '#products',
    icon: '📦',
    description: 'Stock and inventory tracking'
  },
  {
    label: 'School & College Management',
    href: '#products',
    icon: '🎓',
    description: 'Education management systems'
  },
  {
    label: 'Admin Dashboard',
    href: '#products',
    icon: '📋',
    description: 'Custom admin dashboards'
  },

  // AI VIDEO & MOVIE CREATION
  {
    label: 'AI Video Generator',
    href: '#ai-solutions',
    icon: '🎬',
    description: 'Create videos using AI prompts'
  },
  {
    label: 'YouTube Animation Videos',
  href: '/youtube-studio',
    icon: '🎥',
    description: 'Animated videos for YouTube channels'
  },
  {
    label: 'AI Movie Creation',
    href: '#ai-solutions',
    icon: '🎞️',
    description: 'Create cinematic stories using prompts'
  },
  {
    label: 'AI Cartoon Videos',
    href: '#ai-solutions',
    icon: '🎨',
    description: 'Cartoon and animated storytelling'
  },
  {
    label: 'AI Character Animation',
    href: '#ai-solutions',
    icon: '🤖',
    description: 'Create and animate digital characters'
  },
  {
    label: 'Text-to-Video Creation',
    href: '#ai-solutions',
    icon: '✍️',
    description: 'Convert text prompts into videos'
  },

  // SOCIAL MEDIA CONTENT
  {
    label: 'YouTube Thumbnails',
    href: '#creative-services',
    icon: '🖼️',
    description: 'Professional YouTube thumbnails'
  },
  {
    label: 'YouTube Intro & Outro',
    href: '#creative-services',
    icon: '▶️',
    description: 'Custom channel intro and outro'
  },
  {
    label: 'Instagram Reels',
    href: '#creative-services',
    icon: '📱',
    description: 'Short-form social media videos'
  },
  {
    label: 'Social Media Posts',
    href: '#creative-services',
    icon: '📸',
    description: 'Creative promotional designs'
  },
  {
    label: 'Video Editing',
    href: '#creative-services',
    icon: '✂️',
    description: 'Professional video editing'
  },

  // AI IMAGE & DESIGN
  {
    label: 'AI Image Generation',
    href: '#ai-solutions',
    icon: '🪄',
    description: 'Generate images using text prompts'
  },
  {
    label: 'AI Logo Design',
    href: '#creative-services',
    icon: '💎',
    description: 'Creative brand identity concepts'
  },
  {
    label: 'AI Poster & Banner Design',
    href: '#creative-services',
    icon: '🎨',
    description: 'Marketing posters and banners'
  },
  {
    label: 'Product Mockup Design',
    href: '#creative-services',
    icon: '📦',
    description: 'Professional product presentations'
  },

  // WEB & DIGITAL PRODUCTS
  {
    label: 'Portfolio Website',
    href: '#products',
    icon: '🌐',
    description: 'Personal and business portfolios'
  },
  {
    label: 'E-Commerce Website',
    href: '#products',
    icon: '🛒',
    description: 'Online shopping platforms'
  },
  {
    label: 'Landing Page Templates',
    href: '#products',
    icon: '🖥️',
    description: 'Modern ready-to-use web designs'
  },
  {
    label: 'Custom Digital Products',
    href: '#products',
    icon: '🚀',
    description: 'Digital solutions made to order'
  }

];


  toggleMenu(): void {
    this.menuOpen.update(open => !open);

    if (!this.menuOpen()) {
      this.servicesOpen.set(false);
      this.productsOpen.set(false);
    }
  }

  toggleServices(): void {
    this.servicesOpen.update(open => !open);
    this.productsOpen.set(false);
  }

  toggleProducts(): void {
    this.productsOpen.update(open => !open);
    this.servicesOpen.set(false);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.servicesOpen.set(false);
    this.productsOpen.set(false);
  }

  onDocumentClick(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.servicesOpen.set(false);
      this.productsOpen.set(false);
    }
  }

}
