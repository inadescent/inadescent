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

    // 7. Media & Video Showcase
    mediaFallbackText: "Gameplay reels and footage of unreleased systems are currently being compiled. You can request private gameplay demonstrations directly via Discord.",
    media: [],
    mediaTeasers: [
        {
            title: "Cinematic Camera NPC Interaction",
            tag: "Cinematic & NPC",
            desc: "Creating seamless and immersive NPC interactions for players to enjoy."
        },
        {
            title: "Fishing Mechanic",
            tag: "Gameplay Mechanic",
            desc: "Working on a simple yet enjoyable fishing mechanic with various types of quick time events and more."
        }
    ],

    // 8. Raycast Command Palette
    commandPalette: {
        placeholder: "Type a command or search portfolio...",
        actions: [
            { id: "about", title: "Go to About Me", icon: "fa-solid fa-user", section: "#about", shortcut: "G A" },
            { id: "skills", title: "View Technical Skills", icon: "fa-solid fa-code", section: "#skills", shortcut: "G S" },
            { id: "experiences", title: "Explore Experiences", icon: "fa-solid fa-briefcase", section: "#experiences", shortcut: "G E" },
            { id: "resources", title: "View Community Resources", icon: "fa-brands fa-github", section: "#resources", shortcut: "G R" },
            { id: "media", title: "Watch Media & Showcases", icon: "fa-solid fa-play", section: "#media", shortcut: "G M" },
            { id: "contact", title: "Contact & Discord", icon: "fa-solid fa-paper-plane", section: "#contact", shortcut: "G C" },
            { id: "copy-discord", title: "Copy Discord Username (inadescent)", icon: "fa-brands fa-discord", action: "copy-discord", shortcut: "⌘ D" },
            { id: "tideline", title: "Join Tideline Discord", icon: "fa-solid fa-users", action: "open-tideline", shortcut: "⌘ T" },
            { id: "github", title: "Open GitHub Profile", icon: "fa-brands fa-github", action: "open-github", shortcut: "⌘ G" }
        ]
    }
};