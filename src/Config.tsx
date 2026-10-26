import * as Classes from "@/Classes";
import moment from "moment";

export const userInfo = {
    fullName: "Viktor Kuzmanov",
    shortName: "Viktor",
    nickName: "Viktor",
    age: moment().diff(moment({
        day: 23,
        month: 7,
        year: 1999,
    }), "years"),
    description: new Classes.Detail(
        "Description",
        <>
            I’m a software developer with 4+ years of experience building AI     powered applications and Web3
            solutions across DeFi and Ethereum, specializing in Solidity and Web development. 

    Alongside blockchain, I’m expanding my expertise in AI engineering, developing AI-powered applications and exploring how AI agents can solve real-world problems. 

I’m also passionate about sharing knowledge through my YouTube channel, where I’ve published over 300 educational videos on blockchain and Web3, reaching more than 550,000 views. 

I’m always eager to learn, build, and tackle challenging problems.
        </>
    ),
    role: "AI-First Software Developer",
    education: {
        link: "https://finki.ukim.mk/",
        school: "Faculty of Computer Science and Engineering Skopje",
        period: "Bachelor's degree 2018 - 2025",
    },
    resumes: {
        EN: "resumes/resume-en.pdf",
        // RO: "resumes/RO.pdf",
    },
};
export const skillSets = [
    new Classes.SkillSet(
        "AI Engineering",
        [
            Classes.Skill.langChain,
            Classes.Skill.langGraph,
        ]
    ),
    new Classes.SkillSet(
        "Blockchain Development",
        [
            Classes.Skill.solidity,
            Classes.Skill.ethereum,
            
            Classes.Skill.solana,
            Classes.Skill.rust,
            // Classes.Skill.walletConnect,
            Classes.Skill.wagmi,
            Classes.Skill.chainlink,
            Classes.Skill.ethers,
            Classes.Skill.thirdweb,
            Classes.Skill.threeJs,
            Classes.Skill.alchemy,
            // Classes.Skill.openZeppelin,
        ]
    ),
    // new Classes.SkillSet(
    //     "Languages",
    //     [
    //         Classes.Skill.python,
    //         Classes.Skill.solidity,
    //         Classes.Skill.swift,
    //         Classes.Skill.rust,
    //         Classes.Skill.javaScript,
    //         Classes.Skill.typeScript,
    //         Classes.Skill.java    
    //     ]
    // ),
    new Classes.SkillSet(
        "Full-Stack development",
        [
            Classes.Skill.reactJs,
            Classes.Skill.nextJs,
            Classes.Skill.tailwindCss,
            Classes.Skill.node,
            Classes.Skill.express,
            Classes.Skill.fastApi,
            Classes.Skill.streamlit,
            Classes.Skill.postgreSql,
            Classes.Skill.mySql,
            Classes.Skill.sqLite,  
            Classes.Skill.mongoDb,
            Classes.Skill.supabase,
            Classes.Skill.mongoose,
            Classes.Skill.firebase,
            Classes.Skill.graphQL,
            Classes.Skill.nginx,
            Classes.Skill.html5,
            Classes.Skill.css3,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.docker,
            Classes.Skill.claudeCode,
            Classes.Skill.gitHubCopilot,
            Classes.Skill.openCode,
            Classes.Skill.bash,
            Classes.Skill.git,
            Classes.Skill.npm,
            Classes.Skill.eclipse,
            Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            Classes.Skill.visualStudio,
            Classes.Skill.vercel,
            Classes.Skill.render,
            Classes.Skill.gitHub,
            Classes.Skill.xcode,
            Classes.Skill.gitHubActions,
        ]
    ),
];
export const jobs = [
    new Classes.Job(
        "Freelance Software Developer",
        "Feb 2026 - present",
        "at Hitrost",
        [
            new Classes.Detail(
                "Description",
                <>
                    I’m developing Web3 Solution, AI agents, intelligent chatbots, and LLM-powered applications that automate workflows and solve real-world business problems
                </>
            ),
        ],
        [ "LangGraph", "Langchain",  "Solidity", "React.js", "Node.js", "AWS", "Docker","Postgresql"],
        undefined
    ),
    new Classes.Job(
        "Senior Blockchain Developer and Content creator",
        "Feb 2022 - Feb 2026",
        "at Dapp University",
        [
            new Classes.Detail(
                "Description",
                <>
                    Delivered educational content focused on covering smart
contract development, testing, deployment, and interaction
with EVM-based protocols . Managed the Web3 developer
community, answering technical questions, and providing
guidance
                </>
            ),
        ],
        [ "Solidity", "Rust","Next.js", "React.js", "Node.js", "Docker","Chainlink","Third Web", ],
        undefined
    ),
    new Classes.Job(
        "IOS Developer & Publisher",
        "Dec 2023 - present",
        "at App Store",
        [
            new Classes.Detail(
                "Description",
                <>
                   Built and published iOS apps on the App Store, handling the
full cycle from development to monetization and App Store
optimization
                </>
            ),
        ],
        [ "Swift", "Xcode", "App Store", "Github", "Docker",],
        undefined
    ),
    new Classes.Job(
        "Content Creator",
        "Oct 2021 - Present",
        "at YouTube",
        [
            new Classes.Detail(
                "Description",
                <>
                    Making tutorials on AI-powered apps, Defi apps , smart
contract security, Bitcoin, Ethereum, web development  and everything
software development related. Produced 350+ educational videos, reaching 580,000+ views on YouTube
                </>
            ),
        ],
        ["AI Engeneering","RAG","LLMs", "Blockchain Development", "Ethereum", "Bitcoin", "Web Development",],
        undefined
    ),
];
export const projects = [
    new Classes.Project(
        "Vest Visuals",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a photography and videography studio website that showcases the portfolio,
                    services, and contact information. The site is built with Next.js and Tailwind CSS,
                    ensuring a responsive and modern design.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "html", "css", "typescript", "next", "react", "tailwind", "shadcn/ui", "animejs", "hetzner cloud",
            "docker", "nginx", "s3", "minio", "sqlite", "drizzle orm" ],
        "projects/vest-visuals.png",
        "https://vestvisuals.ro",
        "https://github.com/muscaa/vest-visuals"
    ),
    new Classes.Project(
        "Chess",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a chess game in Java supporting both single-player mode
                    with a BOT opponent and multiplayer mode for local or online play.
                    The project features an integrated player chat system with command
                    support, full modding capabilities to extend and customize gameplay,
                    and cross-platform compatibility with Windows, macOS, and Linux.
                    Additionally, a dedicated launcher enables users to select a specific
                    game version or opt for the latest version with auto-updates.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack", "fluff", "swing", "libgdx", "opengl", "networking", "jdbc", "mysql", "sqlite" ],
        "projects/chess.png",
        undefined,
        "https://github.com/muscaa/chess"
    ),
    new Classes.Project(
        "Logic Gate Simulator",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed an app for designing and simulating logic gate systems.
                    Users can build, save, and load custom logic circuits, making it
                    easier to experiment with and understand digital logic concepts.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "opengl", "slick2d" ],
        "projects/logic-gate-sim.png",
        undefined,
        "https://github.com/muscaa/logic-gates-sim"
    ),
    new Classes.Project(
        "Telebot",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a cross-platform robot control application in C++ using
                    SDL3 and Boost, enabling users to remotely operate ESP32-powered
                    robots via the internet. It supports real-time video and audio feedback
                    and user input via controller, keyboard or GUI. And a plugin system for
                    adding new features and functionalities.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "c", "c++", "cmake", "vcpkg", "networking", "cross-platform", "sdl3", "boost", "esp32", "java", "android", "github actions" ],
        undefined,
        undefined,
        "https://github.com/muscaa/telebot"
    ),
    new Classes.Project(
        "Free CV Maker",
        [
            new Classes.Detail(
                "Description",
                <>
                    Created a free CV maker web app where users can choose from
                    existing templates or integrate their own custom designs using
                    a JavaScript API. Projects can be saved in the browser or downloaded,
                    with an easy way to manage your saved projects and templates.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "typescript", "next", "react", "tailwind css", "zustand" ],
        "projects/cv-maker.png",
        "https://muscaa.github.io/cv-maker",
        "https://github.com/muscaa/cv-maker"
    ),
    new Classes.Project(
        "Developer Portfolio",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built this portfolio to show my work and what I'm
                    passionate about in software development.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "typescript", "next", "react", "tailwind css", "framer motion", "tsparticles", "formspree" ],
        "projects/portfolio.png",
        "https://muscaa.github.io/portfolio",
        "https://github.com/muscaa/portfolio"
    ),
    new Classes.Project(
        "Fluff Libraries",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a set of small, versatile, and modular libraries,
                    designed to be efficient and easy to use in different projects.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack" ],
        undefined,
        undefined,
        "https://github.com/muscaa/fluff-core"
    ),
    new Classes.Project(
        "Quill",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built a cross-platform package manager with a command-line
                    interface for installing and updating tools and libraries.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "java", "gradle", "jitpack", "fluff" ],
        undefined,
        undefined,
        "https://github.com/muscaa/quill"
    ),
];
export const contactInfo = { // https://formspree.io/f/moeeewvo
    formspreeKey: "moeeewvo",
    reCaptchaKey: "6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY",
    location: "Kavadarci, Macedonia",
    phone: "+389 71960986",
    email: "viktorblockchaindev@gmail.com",
    github: "https://github.com/ViktorKuzmanov",
    telegram: "https://t.me/viktoronweb3/",
    linkedin: "https://www.linkedin.com/in/viktorkuzmanov/",
    instagram: "https://www.instagram.com/viksaa0304/",
};
export const footer = [
    "© " + moment().year() + " viktor",
    "I’m a very fast learner btw",
];
export const tracker = {
    toggled: true,
    url: "https://musca.duckdns.org/portfolio/",
};
