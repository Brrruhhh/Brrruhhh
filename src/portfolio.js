// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Abdul's Portfolio",
  description:
    "A dynamic developer merging cybersecurity prowess with full-stack mastery to craft secure, scalable, and cutting-edge solutions.",
  og: {
    title: "Abdul Ahad Portfolio",
    type: "website",
    url: "https://github.com/AbdulAHAD968",
  },
};

//Home Page
const greeting = {
  title: "Abdul Ahad",
  logo_name: "AbdulAHAD",
  nickname: "zarar",
  subTitle:
    "A dynamic developer merging cybersecurity prowess with full-stack mastery to craft secure, scalable, and cutting-edge solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1cqqCAhPlgNRZwqa7PERhq2b2UF4GoAT_/view?usp=drive_link",
  portfolio_repository: "https://AbdulAHAD968.github.io/PORTFOLIO",
  githubProfile: "https://github.com/AbdulAHAD968s",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/AbdulAHAD968",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulahad-zarinc/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@FCTs-vc3st",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ahad06074@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Crafting responsive front-end interfaces with React-Redux",
        "⚡ Designing robust backends with Node.js, Express, & Flask",
        "⚡ Implementing secure and scalable database solutions with MongoDB",
        "⚡ Containerizing applications using Docker for seamless deployment",
        "⚡ Prototyping and designing UI/UX with Figma & Adobe Illustrator",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Abdul_Ahad_968/",
    },
    {
      siteName: "HackTheBox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://app.hackthebox.com/profile/ABD111",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.geeksforgeeks.org/user/ahad08cog/",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#323754",
      },
      profileLink: "https://tryhackme.com/p/AbdulAhaD",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "FAST NUCES Islamabad",
      subtitle: "BS in Cyber Security",
      logo_path: "fast.png",
      alt_name: "NUCES",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Pursuing a rigorous Cyber Security program with a focus on Network Security, Cryptography, and Secure System Design.",
        "⚡ Software Engineering & Development: Studied key software engineering principles, including Software Development Lifecycle (SDLC), Database Management Systems (DBMS)",
        "⚡ Recognized for academic excellence with Dean's List honors twice and awarded Gold and Silver Medals for top performance.",
        "⚡ Strengthened analytical skills through advanced mathematics, including Calculus, Linear Algebra, and Probability.",
      ],
      website_link: "http://isb.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Pre Security",
      subtitle: "- TryHackMe",
      logo_path: "tryhackme.webp",
      certificate_link:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-WGVD5MTVRD.png",
      alt_name: "TryHackMe",
      color_code: "#000000",
    },
    {
      title: "Intro to Cyber Security",
      subtitle: "- TryHackMe",
      logo_path: "tryhackme.webp",
      certificate_link:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GUCZPROMO3.png",
      alt_name: "TryHackMe",
      color_code: "#000000",
    },
    {
      title: "Google CyberSecurity",
      subtitle: "- Googlle Career Certificate",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/WAHJ59BMJXPE",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Windows Forensics",
      subtitle: "- Belkasoft",
      logo_path: "belkasoft.png",
      certificate_link:
        "https://belkasoft.thinkific.com/certificates/mjyiz5oksx",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Explore Generative AI",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Google Cloud",
      color_code: "#D83B0199",
    },
    {
      title: "Databases and SQL",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I’m a software engineer who lives and breathes code, crafting scalable, impactful solutions with the MERN stack. I thrive on solving complex problems and turning ideas into seamless, user-friendly applications. Beyond coding, I’m a tech community enthusiast—mentoring budding developers, hosting workshops, and sharing the thrill (and occasional chaos) of debugging. Because let’s face it, nothing beats the satisfaction of fixing that one pesky bug after hours of struggle. Let’s build something amazing together!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "Fiver",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "fiver.png",
          duration: "June 2024 - Current",
          location: "Remote, Islamabad-Pakistan",
          description:
            "Freelancer - Providing Web-Development services to clients across the Globe. Focus on providing clean and well documented SPA services.",
          color: "#000000",
        },
        {
          title: "Web Developer",
          company: "UpWork",
          company_url: "https://legatohealthtech.com/",
          logo_path: "upwork.png",
          duration: "June 2024 - Current",
          location: "Remote, Islamabad-Pakistan",
          description:
            "Freelancer - Providing Web-Development services to clients across the Globe. Focus on providing clean and well documented SPA services.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Events Team Member.",
          company: "Cyber Space Legion - CSL",
          company_url: "https://www.linkedin.com/company/cyber-space-legion/",
          logo_path: "csl.jpeg",
          duration: "Sep 2024 - Current",
          location: "Islamabad, Pakistan",
          description:
            "CSL – The CyberSecurity Society at FAST NUCES Islamabad, dedicated to empowering students with hands-on security skills. My role? I assist in organizing cybersecurity events like Capture The Flag (CTF) competitions and Code Quest hackathons, fostering a culture of learning and innovation.",
          color: "#4285F4",
        },
        {
          title: "Operations Team Member",
          company: "FQSS - FAST Quran and Sunnah Society",
          company_url: "https://www.linkedin.com/company/fqss/",
          logo_path: "fqss.jpeg",
          duration: "Aug 2024 - Current",
          location: "Islamabad, Pakistan",
          description:
            "FQSS – The Quran and Sunnah Society at FAST NUCES Islamabad, dedicated to fostering spiritual growth and knowledge on campus. My role? I actively support the society’s operations, ensuring smooth execution of its initiatives and events.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "AL-KHIDMAT Foundation",
          company_url: "https://www.mozilla.org/",
          logo_path: "alkhidmat.webp",
          duration: "Oct 2023 - May 2024",
          location: "Islamabad, Pakistan",
          description:
            "Actively participated in humanitarian initiatives, including disaster relief operations, food distribution drives, and educational support programs. Assisted in organizing community welfare projects, fundraising campaigns, and awareness sessions to promote social responsibility and aid underprivileged communities.",
          color: "#000000",
        },
        {
          title: "Technical Team Member",
          company: "FAST Computing Society",
          company_url:
            "https://www.linkedin.com/company/fastcomputingsociety/",
          logo_path: "fcs.jpeg",
          duration: "Jan 2025 - Present",
          location: "Islamabad, Pakistan",
          description:
            "Working on innovative technical projects, assisting in organizing tech-focused events, and contributing to workshops that enhance students' computing skills. Supporting hands-on sessions on programming, problem-solving, and emerging technologies while collaborating with peers to foster a culture of learning and innovation.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2024 - PRESENT",
          location: "Remote",
          description:
            "Actively contributing to open-source projects, collaborating with developers worldwide to improve code quality, optimize performance, and enhance security. Participating in issue resolution, feature development, and code reviews for repositories maintained by organizations like Universe IO and others. Engaging with the developer community through discussions, pull requests, and technical contributions to foster innovation and knowledge sharing.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Explore my projects, from AI-powered flight navigation and classic game development to helpful web apps like DUA-VAULT and NGO finders—blending innovation with practicality!",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "man.png",
    description:
      "You can reach out to me on almost every social media platform—I usually reply within 24 hours. Whether you need help with coding, Web Development, cybersecurity, or project ideas, feel free to message me!",
  },
  addressSection: {
    title: "Address",
    subtitle: "G-12/4 Street-40 Islamabad, Pakistan",
    locality: "Islamabad",
    country: "Pakistan",
    region: "Capital Territory",
    postalCode: "04403",
    streetAddress: "G-12/4",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/G5rugUFt5c2aGLNNA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
