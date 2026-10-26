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
            I’m a software developer with 4+ years of experience building web apps and smart contracts across DeFi and Ethereum, specializing in Solidity and Web development. 

    Alongside blockchain, I’m expanding my expertise in AI engineering, developing AI-powered applications and exploring how AI agents can solve real-world problems. 

I’m also passionate about sharing knowledge through my YouTube channel, where I’ve published over 300 educational videos on blockchain and Web3, reaching more than 550,000 views. 

I’m always eager to learn, build, and tackle challenging problems.
        </>
    ),
    role: "Full-Stack Developer",
    education: {
        link: "https://info.uvt.ro/en/",
        school: "West University of Timisoara",
        period: "Bachelor's degree 2023 - 2026",
    },
    resumes: {
        EN: "resumes/EN.pdf",
        RO: "resumes/RO.pdf",
    },
};
export const skillSets = [
    new Classes.SkillSet(
        "Languages",
        [
            Classes.Skill.java,
            Classes.Skill.c,
            Classes.Skill.cpp,
            Classes.Skill.cSharp,
            Classes.Skill.rust,
            Classes.Skill.dart,
            Classes.Skill.javaScript,
            Classes.Skill.typeScript,
            Classes.Skill.python,
        ]
    ),
    new Classes.SkillSet(
        "Front-End",
        [
            Classes.Skill.html5,
            Classes.Skill.css3,
            Classes.Skill.nextJs,
            Classes.Skill.reactJs,
            Classes.Skill.tailwindCss,
            Classes.Skill.flutter,
        ]
    ),
    new Classes.SkillSet(
        "Back-End",
        [
            Classes.Skill.spring,
            Classes.Skill.node,
            Classes.Skill.mySql,
            Classes.Skill.sqLite,
            Classes.Skill.postgreSql,
            Classes.Skill.supabase,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.eclipse,
            Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            Classes.Skill.visualStudio,
            Classes.Skill.bash,
            Classes.Skill.git,
            Classes.Skill.npm,
            Classes.Skill.graphQL,
            Classes.Skill.gradle,
            Classes.Skill.cmake,
            Classes.Skill.nginx,
            Classes.Skill.docker,
            Classes.Skill.postman,
            Classes.Skill.oci,
            Classes.Skill.hetzner,
        ]
    ),
];
export const jobs = [
    new Classes.Job(
        "Volunteer Full-Stack Developer",
        "Jul 2025 - present",
        "Smart::Bits",
        [
            new Classes.Detail(
                "Description",
                <>
                    Contributed to the Scoring System app for the Open Robotics Intelligent Grid event.
                    Used GitLab for version control and YouTrack to track issues.
                    Implemented the display builder & components using React and Spring Boot.
                    Added an assets system using AWS S3.
                    Fixed bugs and improved the app overall.
                    Started rewriting the backend from Spring Boot to Nest.js and Prisma ORM.
                    Started migrating the frontend from React Router to TanStack Router.
                </>
            ),
        ],
        [ "html", "css", "typescript", "react", "tailwind", "java", "spring boot", "docker", "s3", "minio",
            "nest.js", "postgresql", "prisma orm" ],
        "jobs/smart-bits.png"
    ),
    new Classes.Job(
        "Co-Founder",
        "May 2025 - present",
        "Vest Visuals",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built the business website using Next.js, React, Tailwind CSS, Drizzle ORM and AWS S3.
                    Focused on performance and SEO.
                    Implemented authentication using Better Auth.
                    Deployed to Hetzner Cloud using Docker.
                </>
            ),
        ],
        [ "html", "css", "typescript", "next", "react", "tailwind", "shadcn/ui", "animejs", "hetzner cloud",
            "docker", "nginx", "s3", "minio", "sqlite", "drizzle orm" ],
        "jobs/vest-visuals.png"
    ),
    // new Classes.Job(
    //     "Self Employed",
    //     "Aug 2024 - present",
    //     undefined,
    //     [
    //         new Classes.Detail(
    //             "Description",
    //             <>
    //                 Working as a full-stack developer, I've had the chance to transform ideas into real,
    //                 functioning products, ranging from simple websites to more complex applications.
    //                 I enjoy the hands-on process of building and fine-tuning each project, and I make sure
    //                 to offer practical support and guidance so my clients feel comfortable using the software.
    //             </>
    //         ),
    //     ],
    //     [ "html", "css", "typescript", "next", "react", "supabase", "docker", "bash" ],
    //     undefined
    // ),
    new Classes.Job(
        "Open Source Contributor",
        "Dec 2023 - present",
        "GitHub",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built and maintained multiple GitHub repositories.
                    Built full-stack apps using TypeScript, Next.js, React and Tailwind CSS.
                    Built games & simulations using Java and OpenGL.
                    Integrated CI/CD with GitHub Actions.
                </>
            ),
        ],
        [ "java", "gradle", "jitpack", "spring", "c", "c++", "html", "css", "typescript" ],
        undefined
    ),
    new Classes.Job(
        "Freelancer",
        "Mar 2022 - May 2022",
        "Fiverr",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built and maintained game plugins in Java.
                </>
            ),
        ],
        [ "java", "gradle", "opengl" ],
        "jobs/fiverr.png"
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
export const contactInfo = {
    formspreeKey: "xrbzglbe",
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
