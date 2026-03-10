import { PortfolioData } from './types';

export const initialData: PortfolioData = {
  name: "CHANEUNG HAN",
  title: "Senior Gameplay Programmer",
  workEligibility: "Canadian Open Work Permit holder, authorized to work in Canada without employer sponsorship (valid through 2028)",
  projects: [
    {
      id: '1',
      title: 'Cinder City',
      studio: 'NCSOFT',
      role: 'Senior Gameplay Programmer',
      description: 'AAA, MMO RPG, Third-person looter-shooter.',
      contributions: [
        'Implemented camera control and vehicle gameplay mechanics',
        'Developed QTE-based boss systems and client-side synchronization for multiplayer'
      ],
      tech: ['UE5', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      type: 'project',
      period: '2022 - Present',
      longDescription: 'Cinder City is a high-octane MMO RPG that pushes the boundaries of Unreal Engine 5. As a Senior Gameplay Programmer, I was responsible for the core movement and interaction systems. I specialized in creating a seamless transition between on-foot and vehicle gameplay, ensuring that the physics felt responsive and satisfying. I also implemented a complex QTE (Quick Time Event) system for cinematic boss battles, which required precise client-server synchronization to maintain a fair experience in a multiplayer environment.',
      images: [
        'https://picsum.photos/seed/cinder1/1200/800',
        'https://picsum.photos/seed/cinder2/1200/800',
        'https://picsum.photos/seed/cinder3/1200/800'
      ]
    },
    {
      id: '4',
      title: 'Project Neon',
      studio: 'Cyber Studios',
      role: 'Lead Gameplay Engineer',
      description: 'Cyberpunk Action RPG with advanced physics.',
      contributions: [
        'Architected the core combat system and AI behavior trees',
        'Optimized custom physics solver for high-speed vehicle chases'
      ],
      tech: ['UE5', 'C++', 'Niagara'],
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      type: 'portfolio',
      period: '2021 - 2022',
      longDescription: 'Project Neon is an ambitious open-world action RPG set in a sprawling cyberpunk metropolis. As the Lead Gameplay Engineer, I oversaw the development of the combat and traversal systems. I implemented a highly modular AI system using behavior trees and state trees to create diverse enemy archetypes. Additionally, I worked closely with the technical art team to integrate Niagara-based visual effects that react dynamically to gameplay events, such as bullet impacts and neon light reflections.',
      images: [
        'https://picsum.photos/seed/neon1/1200/800',
        'https://picsum.photos/seed/neon2/1200/800',
        'https://picsum.photos/seed/neon3/1200/800'
      ]
    },
    {
      id: '2',
      title: 'NEW STATE PUBG Mobile',
      studio: 'KRAFTON',
      role: 'Gameplay Programmer',
      description: 'Mobile Battle Royale (Shipped).',
      contributions: [
        'Developed customizable UI widgets for mobile usability',
        'Implemented character interaction systems like automatic doors and weapon cases'
      ],
      tech: ['UE4', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      type: 'project',
      period: '2019 - 2021',
      longDescription: 'Working on NEW STATE PUBG Mobile involved optimizing the battle royale experience for a wide range of mobile devices. My primary focus was on the UI/UX implementation, creating highly customizable widgets that allowed players to tailor their controls. I also worked on world interaction systems, ensuring that elements like automatic doors and interactable weapon cases functioned smoothly across the massive game world.',
      images: [
        'https://picsum.photos/seed/pubgm1/1200/800',
        'https://picsum.photos/seed/pubgm2/1200/800'
      ]
    },
    {
      id: '3',
      title: "PlayerUnknown's Battlegrounds LITE",
      studio: 'PUBG Studios',
      role: 'Gameplay Programmer',
      description: 'PC Battle Royale (Shipped).',
      contributions: [
        'Implemented character interaction mechanics like item pickup and vehicle entry',
        'Developed UI features including tactical markers and mission systems'
      ],
      tech: ['UE4', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      type: 'project',
      period: '2018 - 2019',
      longDescription: 'PUBG LITE was designed to bring the core PUBG experience to lower-end PCs. I was responsible for the fundamental interaction mechanics that players use every second, from picking up loot to entering vehicles. I also developed several key UI features, such as the tactical marker system which improved team communication, and the mission tracking system for seasonal events.',
      images: [
        'https://picsum.photos/seed/pubglite1/1200/800',
        'https://picsum.photos/seed/pubglite2/1200/800'
      ]
    }
  ],
  skills: [
    {
      category: 'Languages',
      items: ['C++', 'C#', 'Python', 'HLSL']
    },
    {
      category: 'Engines & Tools',
      items: ['Unreal Engine 4/5', 'Unity', 'Perforce', 'Git', 'Jira']
    },
    {
      category: 'Specialties',
      items: ['Gameplay Systems', 'Physics & Vehicles', 'Network Sync', 'UI/UX Implementation']
    }
  ],
  education: [
    {
      school: 'Handong Global University',
      period: '2011.02 - 2018.02',
      location: 'South Korea',
      degree: 'Bachelor of Computer Engineering'
    }
  ],
  languages: [
    {
      name: 'English',
      proficiency: 'Full professional proficiency',
      detail: 'IELTS 6.5'
    },
    {
      name: 'Chinese',
      proficiency: 'Limited working proficiency',
      detail: '新HSK 6级'
    },
    {
      name: 'Korean',
      proficiency: 'Native or bilingual proficiency'
    }
  ],
  contact: {
    github: 'https://github.com/johngamecoder',
    linkedin: 'https://www.linkedin.com/in/johngamecoder/',
    email: 'johngamecoder@gmail.com'
  }
};
