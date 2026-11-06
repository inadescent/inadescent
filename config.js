// ============================================================
// INADESCENT PORTFOLIO CONFIGURATION
// ============================================================
const CONFIG = {
    // 1. Personal Details & Identity
    profile: {
        handle: "inadescent",
        nickname: "Al",
        fullName: "Raja Alkautsar",
        title: "Founder @ Tideline | Random Variables • Roblox Developer & Project Manager",
        tagline: "You bring the challenge. I deliver the solution.",
        roleSummary: "Specializing in modular Luau gameplay architecture, multiplayer systems, and cross-functional team leadership.",
        bio: `Hi! I'm Al (also known as inadescent), an Indonesian Roblox Developer and Project Manager with a passion for building fun, scalable, and polished game systems. I specialize in gameplay programming, progression systems, multiplayer mechanics, UI logic, and overall game architecture.\n\nAlongside programming, I also enjoy planning features, organizing development workflows, and helping teams turn ideas into playable experiences. I'm currently working with multiple Roblox development teams while also developing my own original projects.\n\nI enjoy solving technical challenges, optimizing systems, and creating gameplay that feels rewarding for players. I'm always open to collaborating with developers, studios, and teams on exciting Roblox projects.`,
        discord: "inadescent",
        discordServer: "https://discord.gg/asg2wUqYhj",
        githubUrl: "https://github.com/inadescent",
        location: "Indonesia",
        timezone: "Asia/Jakarta (UTC+7 / WIB)",
        statusText: "Open to Builds",
        statusColor: "emerald"
    },

    // 2. High-Level Metrics / Stats
    stats: [
        { number: "3+ Years", label: "Roblox Developing", desc: "Production Luau codebases" },
        { number: "Tideline", label: "Founder & Lead", desc: "Original studio & mechanics" },
        { number: "Random Variables", label: "Founder & Lead", desc: "Original studio & mechanics" },
        { number: "Ascend", label: "Project Manager", desc: "Milestones & team workflows" }
    ],

    // 3. About Section Highlights
    aboutPillars: [
        {
            icon: "fa-solid fa-microchip",
            title: "Scalable Architecture",
            description: "Modular client-server Luau pipelines, strict network security, Rojo syncing, and memory optimization."
        },
        {
            icon: "fa-solid fa-list-check",
            title: "Production Leadership",
            description: "Translating high-level game concepts into actionable sprints, managing milestones, and coordinating team schedules."
        },
        {
            icon: "fa-solid fa-gamepad",
            title: "Player-First Gameplay",
            description: "Designing satisfying feedback loops, responsive physics, resilient economy logic, and intuitive UI."
        }
    ],

    // 4. Skills & Capabilities
    skills: [
        {
            id: "gameplay",
            title: "Gameplay Programming & Luau",
            badge: "Core Engineering",
            icon: "fa-solid fa-code",
            description: "Modular and scalable Luau client-server frameworks, custom physics, raycasting, state management, and memory/network optimization.",
            tags: ["Luau", "Client-Server", "Rojo", "DataStores", "Network Replication"]
        },
        {
            id: "management",
            title: "Project Management & Leadership",
            badge: "Workflow & Operations",
            icon: "fa-solid fa-users-gear",
            description: "Planning development milestones, coordinating cross-functional team schedules, running feedback sessions, and maintaining transparent communication.",
            tags: ["Leadership", "Milestone Planning", "Sprint Coordination", "QA & Testing"]
        },
        {
            id: "architecture",
            title: "Game Architecture & Systems Design",
            badge: "Systems & Logic",
            icon: "fa-solid fa-cubes",
            description: "End-to-end design of multiplayer mechanics, progression loops, economy systems, secure data saving, and intuitive UI logic.",
            tags: ["Progression Loops", "Economy Logic", "UI/UX Frameworks", "Data Persistence"]
        }
    ],

    // 5. Featured Experiences
    experiences: [
        {
            title: "Tideline",
            role: "Founder & Lead Developer",
            badge: "Founder • 2026",
            period: "2026 - Present",
            category: "Studio",
            description: "Directing the studio vision, core game architecture, gameplay mechanics, and technical roadmaps for original Roblox titles.",
            highlights: [
                "Leading studio roadmap and cross-discipline teams",
                "Architecting core Luau gameplay frameworks from scratch",
                "Establishing Rojo and modern version control workflows"
            ],
            tags: ["#Founder", "#RobloxEngine", "#Luau", "#ProjectLead"]
        },
        {
            title: "Random Variables",
            role: "Founder",
            badge: "Founder • 2026",
            period: "2026 - Present",
            category: "Studio",
            description: "Directing the studio vision, core game architecture, gameplay mechanics, and technical roadmaps for original Roblox titles.",
            highlights: [
                "Leading studio roadmap and cross-discipline teams",
                "Architecting core Luau gameplay frameworks from scratch",
                "Establishing Rojo and modern version control workflows"
            ],
            tags: ["#Founder", "#RobloxEngine", "#Luau", "#ProjectLead"]
        },
        {
            title: "Ascend",
            role: "Project Manager",
            badge: "Management • 2026 - Present",
            period: "2026 - Present",
            category: "Management",
            description: "Managing development milestones, task priorities, testing feedback loops, and multi-developer team production workflows.",
            highlights: [
                "Coordinating cross-functional developer sprints",
                "Running QA playtests and feature feedback passes",
                "Tracking milestone delivery and team velocity"
            ],
            tags: ["#ProjectManager", "#Milestones", "#TeamWorkflow", "#Agile"]
        },
        {
            title: "Full-Stack Roblox Developer",
            role: "Independent Engineer",
            badge: "Independent • 2023 - Present",
            period: "2023 - Present",
            category: "Engineering",
            description: "Designing original Roblox experiences from concept to release: gameplay logic, multiplayer systems, UI, data saving, and Rojo pipelines.",
            highlights: [
                "Over 3 years of hands-on Roblox engine experience",
                "Full-cycle development from greybox to finished build",
                "Secure DataStore systems and analytics integration"
            ],
            tags: ["#RobloxStudio", "#Luau", "#Rojo", "#DataSaving"]
        }
    ],

    // 5.5 Games In Development
    games: [
        {
            id: "tideline",
            title: "Tideline",
            status: "Delayed",
            statusType: "delayed",
            devType: "Solo Developer",
            devTypeShort: "Solo",
            devTypeIcon: "fa-solid fa-user",
            started: "Early 2026",
            thumbnail: "assets/games/tideline.jpg",
            url: "https://www.roblox.com/games/76690990015492/Tideline#!/about",
            description: "An original island experience and gameplay system developed solo. Officially delayed to manage development costs, asset commissions, internship commitments, and hackathons, but actively in the pipeline.",
            announcement: `Hey everyone,\n\nI want to share an important update regarding Tideline's development.\n\nAfter careful consideration, I've decided to officially delay Tideline's development. This wasn't an easy decision to make, and honestly, I'm disappointed that things have reached this point.\n\nAs a solo developer handling most of the game's development and funding myself, I've been facing challenges with development costs, commissioned assets, and the amount of time I can dedicate to the project. On top of that, I'm currently managing multiple projects, completing my internship, and preparing for my first hackathon.\n\nWith everything happening at once, I realize that continuing at the pace I originally envisioned isn't realistic right now.\n\nDuring this period, I'll be prioritizing a smaller, team-based Roblox project with a few friends. The goal is to potentially generate additional funding to support Tideline's future development, including asset commissions, development resources, and promotion.\n\nThe studio's Discord server is currently being set up and is not publicly available yet. Once everything is ready and the server officially opens to the public, I'll share an announcement with more information about the studio and its project. For now, there's nothing you need to join or do.\n\nI want to be clear that Tideline is delayed, not canceled. The project is still something I genuinely want to bring to life, and I haven't given up on the vision behind it.\n\nI also don't want to rush the game just to meet an unrealistic deadline or compromise its quality because of financial and time constraints. I'd rather take the time needed to build Tideline properly than release something that falls short of what I originally envisioned.\n\nFor now, there is no confirmed release date. I'll share further updates when there's meaningful progress to report and when I have a more realistic timeline.\n\nI'm genuinely sorry to everyone who has been waiting for Tideline and looking forward to its release. This delay isn't what I wanted, but it's a necessary decision given my current circumstances.\n\nThank you to everyone who has supported the project, followed its development, and believed in what Tideline could become. Your support means a lot to me, and I hope you'll continue to be part of this journey.\n\nTideline isn't going anywhere. It's simply going to take longer than expected.\n\nThank you for your patience and understanding. ❤️`,
            tags: ["#Roblox", "#Luau", "#SoloDev", "#IslandAdventure", "#DelayedNotCanceled"]
        },
        {
            id: "high-altitude-shift",
            title: "High-Altitude Shift",
            status: "In Development",
            statusType: "in-development",
            devType: "Team (Random Variables)",
            devTypeShort: "Team",
            devTypeIcon: "fa-solid fa-users",
            started: "Late 2026 (Just Started)",
            thumbnail: "assets/games/high-altitude-shift.png",
            url: "https://www.roblox.com/games/111356939935972/High-Altitude-Shift",
            description: "A fast-paced collaborative Roblox project created with friends under the Random Variables team. Freshly kicked off and currently in active early prototyping.",
            announcement: null,
            tags: ["#Roblox", "#Luau", "#TeamProject", "#RandomVariables", "#EarlyDev"]
        }
    ],

    // 6. Community Resources & Open Source (UPDATED)
    resources: [
        {
            title: "Plumbline",
            badge: "DevForum Resource",
            icon: "fa-solid fa-pen-ruler",
            description: "A Fast, Zero-Allocation Spatial Debugger. Stop crashing Studio just to draw a line.",
            url: "https://devforum.roblox.com/t/plumbline-a-fast-zero-allocation-spatial-debugger-stop-crashing-studio-to-draw-a-line-fr/4963860",
            tags: ["#OpenSource", "#Luau", "#Debugging", "#Performance"]
        },
        {
            title: "Chirp v0.4.2",
            badge: "DevForum Resource",
            icon: "fa-brands fa-hubspot",
            description: "High-Performance RichText Typewriter Dialogue Engine for Roblox.",
            url: "https://devforum.roblox.com/t/chirp-v042-high-performance-richtext-typewriter-dialogue-engine/4909086",
            tags: ["#OpenSource", "#Luau", "#RichText", "#UI"]
        }
    ],

    // 7. Media & Video Showcase (Categorized by Game & Project)
    mediaSections: [
        {
            id: "tideline",
            title: "Tideline",
            badge: "Island Adventure • Solo",
            badgeType: "amber",
            features: [
                "Dynamic 'The Tide's Whisper' world event system with live ocean buffs, warnings, and fish resistance modifiers",
                "Interactive multi-island Species Compendium with 3D model inspect, record weights, and lore logs",
                "Modular fishing mechanics with responsive bobber VFX, multi-tier rods (Wooden to Yeanixa), and bait logic",
                "Cinematic camera transitions and interactive typewriter NPC dialogue (powered by Chirp engine)",
                "Dynamic NPC Quest System with tiered objectives, title unlocks, and experience rewards",
                "Hireable worker crews (Rookie, Veteran, Elite) and automated conveyor processing stations",
                "Dynamic island weather synchronization (Fog, Rain, Calm), day-night cycle, and ambient soundscapes",
                "Territory and plot claiming system with persistent DataStore inventory saving"
            ],
            videos: [
                {
                    title: "The Tide's Whisper (World Event & Ocean Buffs)",
                    videoUrl: "assets/videos/tideline/the-tides-whisper.mp4",
                    poster: "assets/videos/tideline/the-tides-whisper-poster.jpg",
                    tag: "World Event"
                },
                {
                    title: "Cinematic Camera & Typewriter NPC Dialogue",
                    videoUrl: "assets/videos/tideline/cinematic-npc-dialogue.mp4",
                    poster: "assets/videos/tideline/cinematic-npc-dialogue-poster.jpg",
                    tag: "Cinematics & UI"
                },
                {
                    title: "First-Person Reeling & Bobber Bite Mechanic",
                    videoUrl: "assets/videos/tideline/fishing-bite-mechanic.mp4",
                    poster: "assets/videos/tideline/fishing-bite-mechanic-poster.jpg",
                    tag: "Gameplay & VFX"
                },
                {
                    title: "Dynamic NPC Quest Starters & Objectives",
                    videoUrl: "assets/videos/tideline/quest-system.mp4",
                    poster: "assets/videos/tideline/quest-system-poster.jpg",
                    tag: "Quest System"
                }
            ],
            screenshots: [
                {
                    title: "Interactive Species Compendium & Discovery Log",
                    imageUrl: "assets/screenshots/tideline/compendium-system.jpg",
                    tag: "Compendium UI"
                },
                {
                    title: "Fish Catch Notification & Weight Rarity",
                    imageUrl: "assets/screenshots/tideline/catch-notification.jpg",
                    tag: "Catch HUD"
                },
                {
                    title: "Hireable Worker Automation & Processing Lines",
                    imageUrl: "assets/screenshots/tideline/worker-automation.jpg",
                    tag: "Worker Automation"
                }
            ],
            url: "https://www.roblox.com/games/76690990015492/Tideline#!/about",
            urlText: "View Game on Roblox"
        },
        {
            id: "high-altitude-shift",
            title: "High-Altitude Shift",
            badge: "Multiplayer • Random Variables",
            badgeType: "emerald",
            features: [
                "Interactive Mission Dispatch Terminal with live deployment zones (Summit Station, Frozen Pass)",
                "Dynamic Threat Level scaling (Normal, Hard) adjusting payout multipliers and hazard timers",
                "Squad management system supporting up to 5 operatives, slot unlocking, and readiness syncing",
                "Atmospheric corporate skyscraper lobby environment with functional elevator lift stations",
                "Server-authoritative lobby state synchronization with Squad Access privacy controls (Public / Friends Only)"
            ],
            videos: [
                {
                    title: "Mission Dispatch Lobby & Squad Deployment",
                    videoUrl: "assets/videos/high-altitude-shift/mission-dispatch-lobby.mp4",
                    poster: "assets/videos/high-altitude-shift/mission-dispatch-lobby-poster.jpg",
                    tag: "Lobby & Squad System"
                }
            ],
            screenshots: [
                {
                    title: "Mission Dispatch Terminal & Deployment Zone UI",
                    imageUrl: "assets/screenshots/high-altitude-shift/mission-dispatch-ui.jpg",
                    tag: "Dispatch Terminal"
                },
                {
                    title: "Skyscraper High-Rise Elevator Lobby Environment",
                    imageUrl: "assets/screenshots/high-altitude-shift/skyscraper-lift-lobby.jpg",
                    tag: "Lobby Environment"
                }
            ],
            url: "https://www.roblox.com/games/111356939935972/High-Altitude-Shift",
            urlText: "View Game on Roblox"
        },
        {
            id: "random",
            title: "Random",
            hidden: true,
            badge: "Experiments & Mechanics",
            badgeType: "blue",
            features: [
                "Custom character controller and physics experimentations",
                "Zero-allocation raycasting detection and custom hitbox routines",
                "Procedural environment generators and mathematical terrain tools",
                "UI state synchronization frameworks and reactive visual widgets"
            ],
            videos: [],
            screenshots: [],
            statusNote: "Footage from personal R&D sandboxes will be uploaded here.",
            url: null,
            urlText: null
        },
        {
            id: "modules",
            title: "Modules (DevForum)",
            hidden: true,
            badge: "Open-Source Packages",
            badgeType: "purple",
            features: [
                "Plumbline: Zero-allocation spatial visual debugger for high-frequency physics",
                "Chirp v0.4.2: High-performance RichText typewriter dialogue engine for Luau",
                "Production-tested, modular architecture designed for developer convenience",
                "Community documented on DevForum with extensive performance benchmarks"
            ],
            videos: [],
            screenshots: [],
            statusNote: "Demo recordings of Plumbline and Chirp in production are being compiled.",
            url: "https://devforum.roblox.com/t/plumbline-a-fast-zero-allocation-spatial-debugger-stop-crashing-studio-to-draw-a-line-fr/4963860",
            urlText: "View on DevForum"
        }
    ],

    // 8. Raycast Command Palette
    commandPalette: {
        placeholder: "Type a command or search portfolio...",
        actions: [
            { id: "about", title: "Go to About Me", icon: "fa-solid fa-user", section: "#about", shortcut: "G A" },
            { id: "skills", title: "View Technical Skills", icon: "fa-solid fa-code", section: "#skills", shortcut: "G S" },
            { id: "experiences", title: "Explore Experiences", icon: "fa-solid fa-briefcase", section: "#experiences", shortcut: "G E" },
            { id: "games", title: "View Games In Development", icon: "fa-solid fa-gamepad", section: "#games", shortcut: "G G" },
            { id: "resources", title: "View Community Resources", icon: "fa-brands fa-github", section: "#resources", shortcut: "G R" },
            { id: "media", title: "Watch Media & Showcases", icon: "fa-solid fa-play", section: "#media", shortcut: "G M" },
            { id: "contact", title: "Contact & Discord", icon: "fa-solid fa-paper-plane", section: "#contact", shortcut: "G C" },
            { id: "copy-discord", title: "Copy Discord Username (inadescent)", icon: "fa-brands fa-discord", action: "copy-discord", shortcut: "⌘ D" },
            { id: "tideline", title: "Join Tideline Discord", icon: "fa-solid fa-users", action: "open-tideline", shortcut: "⌘ T" },
            { id: "github", title: "Open GitHub Profile", icon: "fa-brands fa-github", action: "open-github", shortcut: "⌘ G" }
        ]
    }
};