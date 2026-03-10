import { PortfolioData } from './types';

export const initialData: PortfolioData = {
  name: "CHANEUNG HAN",
  title: "Gameplay SOFTWARE ENGINEER",
  workEligibility: "Canadian Open Work Permit holder, authorized to work in Canada without employer sponsorship (valid through 2028)",
  aboutMe: "I'm a Software Engineer specializing in Unreal Engine C++ development with professional experience at PUBG Studio (KRAFTON) and NCSOFT. I've worked on both PC and mobile game development, building gameplay systems and core features for large-scale game projects.\n\nMy work includes developing gameplay mechanics such as implementing and maintaining camera systems, vehicle systems, and creating tools that support efficient game development. I focus on building robust, maintainable systems that enhance the player experience and streamline the development process.",
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
    },
    {
      id: '5',
      title: 'Facade Lighting System',
      studio: 'Personal Graphics Portfolio',
      role: '',
      description: 'Custom facade lighting technique implemented by modifying the UE4 rendering pipeline.',
      contributions: [
        'Implemented a facade lighting system that projects virtual light from the camera direction onto objects',
        'Modified the Unreal Engine 4 deferred rendering pipeline to support the custom lighting pass',
        'Developed a custom global shader to control lighting intensity, color, and direction',
        'Ensured objects still receive background lighting to maintain natural scene integration'
      ],
      tech: ['Unreal Engine 4', 'C++', 'HLSL', 'Global Shader', 'Deferred Rendering'],
      youtubeUrl: 'https://www.youtube.com/embed/Tgw9y33gITo',
      type: 'portfolio',
      period: '2022',
      longDescription: 'Facade Lighting is a real-time rendering technique designed to enhance object visibility by projecting a virtual light from the camera direction. I implemented this system by modifying the Unreal Engine 4 deferred rendering pipeline and adding a custom lighting pass. A global shader was developed to dynamically control lighting intensity, color, and direction. The system also preserves environmental lighting so that the object does not appear visually disconnected from the scene. This project demonstrates my experience with low-level rendering systems, engine modification, and shader programming within Unreal Engine.',
      images: [
        'https://picsum.photos/seed/facade1/1200/800',
        'https://picsum.photos/seed/facade2/1200/800'
      ]
    },
    {
      id: '6',
      title: 'Material Expression "Fit"',
      studio: 'Personal Tools Portfolio',
      role: '',
      description: 'Custom Unreal Engine 4 material expression that remaps a value from one range to another.',
      contributions: [
        'Developed a custom Material Expression node for Unreal Engine 4',
        'Implemented value range remapping based on the Houdini "Fit" function',
        'Designed the node to support constant folding for shader optimization',
        'Implemented the feature as a UE4 plugin without modifying the engine source',
        'Enabled reusable material graph functionality for artists and technical artists'
      ],
      tech: ['Unreal Engine 4', 'C++', 'HLSL', 'Material System', 'Shader Compilation'],
      youtubeUrl: 'https://www.youtube.com/embed/V-47062dBhE',
      type: 'portfolio',
      period: '2022',
      longDescription: 'This project introduces a custom Material Expression node called "Fit" for Unreal Engine 4. The node converts a value from one numerical range to another while preserving its relative ratio. Inspired by the Houdini "Fit" function, the implementation allows artists to easily remap values directly within the material graph. The feature was implemented as a UE4 plugin so it can be integrated without modifying the engine source code. Additionally, the node supports constant folding during shader compilation, allowing the compiler to precompute values when possible and improve runtime shader performance. This project demonstrates experience with Unreal Engine’s material system, shader compilation pipeline, and engine extensibility.',
      images: [
        'https://picsum.photos/seed/fit1/1200/800',
        'https://picsum.photos/seed/fit2/1200/800'
      ]
    },
    {
      id: '7',
      title: 'Halloween Defense',
      studio: 'Personal Gameplay Project',
      role: '',
      description: 'A strategic 2D Tower Defense game built with Unity, featuring diverse enemy types and upgradeable defense systems.',
      contributions: [
        'Implemented core tower defense mechanics, including grid-based placement and automated targeting systems',
        'Designed and coded the enemy wave spawning logic and pathfinding system',
        'Developed a modular upgrade system for various tower types (Single-target, AoE, Slow)',
        'Managed game state transitions and UI/UX integration for resource management'
      ],
      tech: ['Unity', 'C#', '2D Sprite Workflow'],
      youtubeUrl: 'https://www.youtube.com/embed/Z79Y9v1v43w',
      type: 'portfolio',
      period: '2018',
      longDescription: 'Halloween Defense is a classic tower defense project developed to demonstrate proficiency in Unity and C# during my 2018 job search. The project focuses on the fundamental mechanics of the genre: managing strategic resource allocation to defend against scaling waves of enemies. I focused on creating a clean, object-oriented architecture for the tower modules, allowing for easy expansion of tower types and abilities. The game features a variety of Halloween-themed monsters, each with different speed and health attributes, requiring players to balance different types of defensive units effectively.',
      images: [
        'https://picsum.photos/seed/halloween1/1200/800',
        'https://picsum.photos/seed/halloween2/1200/800'
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
