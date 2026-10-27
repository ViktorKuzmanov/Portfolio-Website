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
        "NextRole: Autonomous AI Job-Application Agent",
        [
            new Classes.Detail(
                "Description",
                <>
                    An autonomous AI agent that runs the entire job hunt. 
Scheduled GitHub Actions workflows parse LinkedIn job-alert emails, scrape each posting, and use an LLM to score how well the role fits my profile. 
For strong matches, it generates a tailored CV and cover letter, picks the best CV variant and an optional video pitch, and submits the application. 
A human-in-the-loop approval step alerts me before top-tier offers go out. 
A web dashboard tracks every application and the exact documents used. 
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "LangGraph", "LangChain", "Node.js", "React.js", "Docker", "Github Actions" ],
        "projects/vest-visuals.png",
        // "https://vestvisuals.ro",
        // "https://github.com/muscaa/vest-visuals"
    ),
    new Classes.Project(
        "AgroAssist: RAG-Powered Crop Treatment Copilot",
        [
            new Classes.Detail(
                "Description",
                <>
                    A domain-specific retrieval-augmented generation (RAG) system that turns a pharmacy’s product
catalog and an agricultural engeneer’s expertise into instant, structured recommendations. 

Designed for production use in a working agricultural pharmacy to deliver consistent, expert-level advice.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "LangChain", "RAG", "Semantic Search", "Vector DBs", "React.js", "Node.js", "PostgreSQL",],
        "projects/chess.png",
        // undefined,
        // "https://github.com/muscaa/chess"
    ),
    new Classes.Project(
        "RunChain: Play-to-Earn Web3 Runner Game",
        [
            new Classes.Detail(
                "Description",
                <>
                    A play-to-earn endless-runner game where gameplay is rewarded on-chain. 
Players earn a custom Run token and collectible NFTs, minted straight to their wallet. 
Solidity smart contracts for the token and the NFT collection are deployed to a Polygon testnet using Hardhat. 
A JavaScript browser game connects to the contracts through Ethers.js and an Infura node provider. 
It shows end-to-end Dapp skills: contract design, deployment, wallet integration, and game logic tied to on-chain rewards.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "Solidity", "Polygon", "Ethers.js", "NFTs" ],
        "projects/logic-gate-sim.png",
        undefined,
        "https://www.youtube.com/watch?v=ZjQzxXhebVc"
    ),
    new Classes.Project(
        "3D Web3 Metaverse",
        [
            new Classes.Detail(
                "Description",
                <>
                    An immersive 3D virtual world in the browser, backed by Ethereum smart contracts where you can buy virtual land. 

The scene is rendered with Three.js and React Three Fiber. 

It combines real-time 3D graphics with decentralized, wallet-based interaction, and shows full-stack Web3 skills from contract tests to an interactive React frontend.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "Solidity", "React", "Three.js", "NFTs", "Metamask", ],
        undefined,
        undefined,
        "https://www.youtube.com/watch?v=EqmD4BYkffg"
    ),
    new Classes.Project(
        "Best-Price DEX Aggregator",
        [
            new Classes.Detail(
                "Description",
                <>
                    An on-chain DEX aggregator that compares USDC to WETH swap prices on Uniswap and SushiSwap and routes the trade to whichever venue is cheaper. 
The Solidity contract queries both liquidity pools, executes the swap, and has a React client on top. 
It is tested against a forked Ethereum mainnet using Ganache and Infura, with a Truffle test suite. 
It shows hands-on DeFi knowledge: AMM mechanics, token swaps, price routing, and mainnet-fork testing.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "Solidity", "Uniswap", "SushiSwap", "React.js",],
        "projects/cv-maker.png",
        "https://github.com/ViktorKuzmanov/Dex-Aggregator-Blockchain-app",
        "https://github.com/ViktorKuzmanov/Dex-Aggregator-Blockchain-app"
    ),
    new Classes.Project(
        "Automated On-Chain Payroll Vault (Chainlink Automation)",
        [
            new Classes.Detail(
                "Description",
                <>
                    A DeFi payroll vault where an employer deposits ETH (for example, $1,000) and the contract automatically pays out a fixed amount (for example, $100) every week. 

Chainlink Automation(Keepers), trigger each payout with no manual action. 

Built with Solidity, Truffle, Web3.js, React, and MetaMask, and tested on a forked mainnet with minted DAI. 
It shows trustless automation and recurring-payment logic with a working frontend.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "Solidity", "React", "Chainlink", "Metamask", "Ethereum" ],
        "projects/portfolio.png",
        "https://muscaa.github.io/portfolio",
        "https://github.com/ViktorKuzmanov/Vault-app-with-frontend"
    ),
    // new Classes.Project(
    //     "Fluff Libraries",
    //     [
    //         new Classes.Detail(
    //             "Description",
    //             <>
    //                 Developed a set of small, versatile, and modular libraries,
    //                 designed to be efficient and easy to use in different projects.
    //             </>
    //         ),
    //     ],
    //     Classes.Status.complete,
    //     [ "java", "gradle", "jitpack" ],
    //     undefined,
    //     undefined,
    //     "https://github.com/muscaa/fluff-core"
    // ),
    // new Classes.Project(
    //     "Quill",
    //     [
    //         new Classes.Detail(
    //             "Description",
    //             <>
    //                 Built a cross-platform package manager with a command-line
    //                 interface for installing and updating tools and libraries.
    //             </>
    //         ),
    //     ],
    //     Classes.Status.inDev,
    //     [ "java", "gradle", "jitpack", "fluff" ],
    //     undefined,
    //     undefined,
    //     "https://github.com/muscaa/quill"
    // ),
];
export const contactInfo = { // https://formspree.io/f/moeeewvo
    formspreeKey: "moeeewvo",
    reCaptchaKey: "6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY",
    location: "Skopje, Macedonia",
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
