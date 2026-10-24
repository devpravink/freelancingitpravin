import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Notification } from '../notification/notification';
import { Footer } from '../footer/footer';

interface Service {
  title: string;
  tag: string;
  desc: string;
  icon: string; // SVG path (24x24, outline)
  gradient: string; // full Tailwind classes so Tailwind can detect them
  shadow: string;
}

interface Step {
  number: string;
  title: string;
  desc: string;
  gradient: string;
}

interface Stat {
  value: string;
  label: string;
  gradient: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Notification, Footer],
})
export class Home {
  readonly companyName = 'Freelancing IT Pravin';
  readonly year = new Date().getFullYear();

  readonly services: readonly Service[] = [
    {
      title: 'Web Development',
      tag: '01',
      desc: 'Fast, responsive websites and web apps built with modern frameworks.',
      icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
      gradient: 'from-blue-600 to-cyan-400',
      shadow: 'shadow-blue-500/30',
    },
    {
      title: 'Mobile App Development',
      tag: '02',
      desc: 'Smooth, user-friendly mobile apps that work great on every device.',
      icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
      gradient: 'from-orange-500 to-amber-400',
      shadow: 'shadow-orange-500/30',
    },
    {
      title: 'Cloud Solutions',
      tag: '03',
      desc: 'Secure, scalable cloud setup, hosting and deployment for your business.',
      icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
      gradient: 'from-purple-600 to-pink-500',
      shadow: 'shadow-purple-500/30',
    },
    {
      title: 'Custom Software',
      tag: '04',
      desc: 'Tailor-made software designed around your exact workflow and goals.',
      icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z',
      gradient: 'from-emerald-600 to-teal-400',
      shadow: 'shadow-emerald-500/30',
    },
    {
      title: 'UI / UX Design',
      tag: '05',
      desc: 'Clean, thoughtful interfaces built around how your users actually work.',
      icon: 'M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z',
      gradient: 'from-rose-600 to-orange-400',
      shadow: 'shadow-rose-500/30',
    },
    {
      title: 'Business Solutions',
      tag: '06',
      desc: 'Digital tools and strategy that help your business grow faster.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
      gradient: 'from-indigo-600 to-violet-400',
      shadow: 'shadow-indigo-500/30',
    },
  ];

  readonly steps: readonly Step[] = [
    { number: '01', title: 'Discover', desc: 'We talk through your goals, users and requirements.', gradient: 'from-blue-600 to-cyan-400' },
    { number: '02', title: 'Design', desc: 'Clear wireframes and a clean visual design you approve.', gradient: 'from-purple-600 to-pink-500' },
    { number: '03', title: 'Build', desc: 'Clean, tested code with regular progress updates.', gradient: 'from-orange-500 to-amber-400' },
    { number: '04', title: 'Launch & Grow', desc: 'Deployment, support and improvements as you grow.', gradient: 'from-emerald-600 to-teal-400' },
  ];

  readonly stats: readonly Stat[] = [
    { value: 'Modern', label: 'Technology stack', gradient: 'from-blue-600 to-cyan-400' },
    { value: 'Responsive', label: 'Every screen size', gradient: 'from-orange-500 to-amber-400' },
    { value: 'Scalable', label: 'Built for growth', gradient: 'from-purple-600 to-pink-500' },
  ];

  readonly techs: readonly string[] = [
    'Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'HTML5', 'CSS3',
    'JavaScript', 'REST APIs', 'Cloud', 'Responsive Design',
  ];
}