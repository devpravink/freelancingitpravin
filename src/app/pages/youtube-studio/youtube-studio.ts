
import { Component } from '@angular/core';
import { Footer } from '../../footer/footer';

interface CreativeService {
  title: string;
  description: string;
  icon: string;
  image: string;
  category: string;
  features: string[];
  tag: string;
}

@Component({
  selector: 'app-youtube-studio',
  standalone: true,
  imports: [Footer],
  templateUrl: './youtube-studio.html',
  styleUrl: './youtube-studio.css'
})
export class YoutubeStudio {

  readonly services: CreativeService[] = [

    {
      title: 'YouTube Channel Creation',
      description: 'Launch a professional YouTube channel with complete branding and a customized identity.',
      icon: '▶',
      image: '/assets/images/youtube/youtube-channel.jpg',
      category: 'CHANNEL BRANDING',
      tag: 'Popular',
      features: [
        'Channel setup',
        'Profile picture',
        'Channel banner',
        'About section'
      ]
    },

    {
      title: 'YouTube Thumbnail Design',
      description: 'Eye-catching thumbnails designed to make your videos stand out and attract viewers.',
      icon: '▧',
      image: '/assets/images/youtube/youtube-thumbnail.jpg',
      category: 'GRAPHIC DESIGN',
      tag: 'Trending',
      features: [
        'HD thumbnails',
        'Creative typography',
        'Gaming thumbnails',
        'Custom designs'
      ]
    },

    {
      title: '2D & 3D Animation',
      description: 'Bring your stories to life with engaging cartoon animations and creative characters.',
      icon: '✧',
      image: '/assets/images/youtube/youtube-animation.jpg',
      category: 'ANIMATION',
      tag: 'Creative',
      features: [
        '2D animation',
        '3D animation',
        'Cartoon stories',
        'Character animation'
      ]
    },

    {
      title: 'YouTube Shorts Creation',
      description: 'Create engaging short-form videos for YouTube Shorts and vertical social platforms.',
      icon: '▣',
      image: '/assets/images/youtube/youtube-shorts.jpg',
      category: 'SHORT VIDEOS',
      tag: 'Popular',
      features: [
        'Vertical videos',
        'Captions and subtitles',
        'Transitions',
        'Sound synchronization'
      ]
    },

    {
      title: 'AI Movie Creation',
      description: 'Transform creative prompts and story ideas into cinematic AI-assisted video productions.',
      icon: '🎬',
      image: '/assets/images/youtube/ai-movie.jpg',
      category: 'AI VIDEO STUDIO',
      tag: 'AI Powered',
      features: [
        'Prompt-to-video workflow',
        'Story development',
        'AI scene generation',
        'Cinematic editing'
      ]
    },

    {
      title: 'AI Character Creation',
      description: 'Design original digital characters for animation, storytelling and creative projects.',
      icon: '🤖',
      image: '/assets/images/youtube/ai-character.jpg',
      category: 'AI CREATIVE',
      tag: 'AI Powered',
      features: [
        'Character concepts',
        'Character variations',
        'Visual storytelling',
        'Creative artwork'
      ]
    },

    {
      title: 'Professional Video Editing',
      description: 'Turn raw footage into polished videos with professional editing and smooth transitions.',
      icon: '✂',
      image: '/assets/images/youtube/video-editing.jpg',
      category: 'VIDEO PRODUCTION',
      tag: 'Professional',
      features: [
        'Video cutting',
        'Color correction',
        'Transitions',
        'Audio editing'
      ]
    },

    {
      title: 'YouTube SEO Optimization',
      description: 'Optimize your video publishing elements to improve discoverability on YouTube.',
      icon: '↗',
      image: '/assets/images/youtube/youtube-seo.jpg',
      category: 'CHANNEL GROWTH',
      tag: 'Growth',
      features: [
        'SEO titles',
        'Descriptions',
        'Keyword research',
        'Hashtag strategy'
      ]
    },

    {
      title: 'Intro & Outro Animation',
      description: 'Create branded opening and ending animations that give your channel a consistent identity.',
      icon: '▶',
      image: '/assets/images/youtube/intro-outro.jpg',
      category: 'MOTION DESIGN',
      tag: 'Creative',
      features: [
        'Logo animation',
        'Channel intro',
        'Video outro',
        'Motion graphics'
      ]
    },



  ];

  readonly workflow = [
    {
      number: '01',
      title: 'Share Your Idea',
      description: 'Tell us about your channel, video or creative project.'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'We plan the concept, script, visuals and creative direction.'
    },
    {
      number: '03',
      title: 'Creation & Editing',
      description: 'We develop your content and refine every detail.'
    },
    {
      number: '04',
      title: 'Final Delivery',
      description: 'Review your completed project and receive the final files.'
    }
  ];

  getStarted(service: string): void {
    const message = `Hello Freelancing IT Pravin, I am interested in ${service}. Please share the details and pricing.`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
