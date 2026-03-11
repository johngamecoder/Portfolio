import { PortfolioData } from './types';

export const initialData: PortfolioData = {
  name: "CHANEUNG HAN",
  title: "Gameplay SOFTWARE ENGINEER",
  workEligibility: "Canadian Open Work Permit holder, authorized to work in Canada without employer sponsorship (valid through 2028)",
  aboutMe: "I'm a Software Engineer specializing in Unreal Engine C++ development with professional experience at PUBG Studio (KRAFTON) and NCSOFT. I've worked on both PC and mobile game development, building gameplay systems and core features for large-scale game projects.\n\nMy work includes developing gameplay mechanics such as implementing and maintaining camera systems, vehicle systems, and creating tools that support efficient game development. I focus on building robust, maintainable systems that enhance the player experience and streamline the development process.",
  projects: [
    {
      id: '8',
      title: 'PUBG Clone Project (Team Avengers)',
      studio: 'Team Gameplay Portfolio (Collaborative Study Group)',
      role: '',
      description: 'A dedicated multiplayer PUBG clone project created by four aspiring programmers over 1.5 months of intensive full-time development.',
      contributions: [
        'Developed core gameplay features: character movement, interaction systems, and weapon mechanics',
        'Implemented client-server synchronization for multiplayer gameplay using Boost::asio',
        'Implemented the 3rd-person camera system to match the original PUBG perspective',
        'Built the game UI and HUD elements to provide a consistent user experience',
        'Used std::async for multi-threaded resource loading to ensure smooth performance',
        'Integrated character meshes, animations, and sound assets into a custom DirectX 9 environment'
      ],
      tech: ['C++', 'DirectX 9', 'Boost::asio', 'Multi-threading (std::async)', 'WinAPI'],
      youtubeUrl: 'https://www.youtube.com/embed/Anu5nLHhWZY',
      type: 'portfolio',
      period: '2018',
      longDescription: 'Team Avengers was formed by four aspiring game programmers who shared a common goal: building a solid portfolio for the industry. For one and a half months, we committed ourselves full-time in a shared workspace to recreate the core mechanics of PUBG as a multiplayer game. My focus was on replicating the player experience, specifically the movement, camera, and UI systems, while utilizing Boost::asio for network communication to synchronize player actions. We chose to build this with DirectX 9 to better understand how game systems work under the hood. This project was a defining experience that taught me how to collaborate effectively under a tight deadline and how to turn complex gameplay ideas into functional code.',
      images: [
        'https://raw.githubusercontent.com/harryplusplus/TeamAvengers_PUBG/8381399878ae7e3ee77ea707b4940b0cd5c43c07/PUBG%ED%8F%AC%ED%8F%B4.png',
        'https://raw.githubusercontent.com/harryplusplus/TeamAvengers_PUBG/8381399878ae7e3ee77ea707b4940b0cd5c43c07/PUBG.png'
      ]
    },
    {
      id: '1',
      title: 'Cinder City',
      studio: 'NCSOFT',
      role: 'Senior Gameplay Programmer',
      description: 'AAA, MMO RPG, Third-person looter-shooter (Developing).',
      contributions: [
        'Implemented camera control and vehicle gameplay mechanics',
        'Developed QTE-based boss systems and client-side synchronization for multiplayer'
      ],
      tech: ['UE5', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/EOYtODWJeHI',
      type: 'project',
      period: '2022 - Present',
      longDescription: 'Cinder City is a high-octane MMO RPG that pushes the boundaries of Unreal Engine 5. As a Senior Gameplay Programmer, I was responsible for the core movement and interaction systems. I specialized in creating a seamless transition between on-foot and vehicle gameplay, ensuring that the physics felt responsive and satisfying. I also implemented a complex QTE (Quick Time Event) system for cinematic boss battles, which required precise client-server synchronization to maintain a fair experience in a multiplayer environment.',
      images: [
        'https://raw.githubusercontent.com/johngamecoder/Portfolio/22cc3fd2f22b3bc433b017b138db7f5ddbc6ef53/%5BCINDER%20CITY%5D%201.png',
        'https://raw.githubusercontent.com/johngamecoder/Portfolio/22cc3fd2f22b3bc433b017b138db7f5ddbc6ef53/%5BCINDER%20CITY%5D%202.png',
        'https://raw.githubusercontent.com/johngamecoder/Portfolio/22cc3fd2f22b3bc433b017b138db7f5ddbc6ef53/%5BCINDER%20CITY%5D%203.png'
      ]
    },
    {
      id: '2',
      title: 'NEW STATE PUBG Mobile',
      studio: 'KRAFTON',
      role: 'Gameplay Programmer',
      description: 'Mobile, Battle Royale (Shipped).',
      contributions: [
        'Developed customizable UI widgets for mobile usability',
        'Implemented character interaction systems like automatic doors and weapon cases'
      ],
      tech: ['UE4', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/htld_r86pfI',
      type: 'project',
      period: '2019 - 2021',
      longDescription: 'Working on NEW STATE PUBG Mobile involved optimizing the battle royale experience for a wide range of mobile devices. My primary focus was on the UI/UX implementation, creating highly customizable widgets that allowed players to tailor their controls. I also worked on world interaction systems, ensuring that elements like automatic doors and interactable weapon cases functioned smoothly across the massive game world.',
      images: [
        'https://user-images.githubusercontent.com/35551084/163410983-2ef27444-9eb5-41d7-8008-180dd3e1513a.JPG',
        'https://user-images.githubusercontent.com/35551084/163388905-25c51e04-5836-48bb-924f-35cb0531ff25.JPG',
        'https://user-images.githubusercontent.com/35551084/163411391-d6a82ae8-dc1b-4477-bd91-a6eae9ebbe02.jpg'
      ]
    },
    {
      id: '3',
      title: "PlayerUnknown's Battlegrounds LITE",
      studio: 'PUBG Studios',
      role: 'Gameplay Programmer',
      description: 'PC, Battle Royale (Shipped).',
      contributions: [
        'Implemented character interaction mechanics like item pickup and vehicle entry',
        'Developed UI features including tactical markers and mission systems'
      ],
      tech: ['UE4', 'C++'],
      youtubeUrl: 'https://www.youtube.com/embed/vl4CuBw85f8',
      type: 'project',
      period: '2018 - 2019',
      longDescription: 'PUBG LITE was designed to bring the core PUBG experience to lower-end PCs. I was responsible for the fundamental interaction mechanics that players use every second, from picking up loot to entering vehicles. I also developed several key UI features, such as the tactical marker system which improved team communication, and the mission tracking system for seasonal events.',
      images: [
        'https://user-images.githubusercontent.com/35551084/71656751-f9025e80-2d7f-11ea-860d-b0b5b328c1ce.jpg',
        'https://user-images.githubusercontent.com/35551084/71655659-1aad1700-2d7b-11ea-9dcd-6ca92152d396.JPG',
        'https://user-images.githubusercontent.com/35551084/71657363-e178a500-2d82-11ea-9a68-fce944a3249a.jpg'
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
        'https://raw.githubusercontent.com/johngamecoder/UE4Portfolio/37ba13adb0f48a3c2902c72496966ec18050bb88/Facade%20Lighting.png'
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
        'https://raw.githubusercontent.com/johngamecoder/UE4Portfolio/37ba13adb0f48a3c2902c72496966ec18050bb88/Material%20Expression%20Fit.png'
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
        'https://raw.githubusercontent.com/johngamecoder/HalloweenDefense/102141f96b56e89df537e1fe605809b8611cac48/HalloweenDefense.PNG'
      ]
    }
  ],
  skills: [
    {
      category: 'Languages',
      items: ['C++', 'C#', 'Java', 'Python', 'HLSL']
    },
    {
      category: 'Engines & Tools',
      items: ['Unreal Engine 4/5', 'Unity', 'Perforce', 'Git', 'Jira']
    },
    {
      category: 'Specialties',
      items: ['Gameplay Systems', 'Camera', 'Character Movement', 'Vehicles', 'Network Sync', 'UI/UX Implementation']
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
