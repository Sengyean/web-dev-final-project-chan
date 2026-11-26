// Subjects the user can say they are good at (general + a few extras for uni)
const SUBJECTS = [
  { id: "math", name: "Math" },
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },
  { id: "biology", name: "Biology" },
  { id: "english", name: "English" },
  { id: "khmer", name: "Khmer Literature" },
  { id: "history", name: "History" },
  { id: "geography", name: "Geography" },
  { id: "it", name: "Computer / IT" },
  // extras aimed at university students
  { id: "economics", name: "Economics" },
  { id: "art", name: "Art & Design" },
  { id: "speaking", name: "Public Speaking" }
];

// Interests the user can pick
const INTERESTS = [
  { id: "technology", name: "Technology" },
  { id: "data", name: "Data & AI" },
  { id: "business", name: "Business & Money" },
  { id: "media", name: "Media & Marketing" },
  { id: "society", name: "Law & Society" },
  { id: "world", name: "World Affairs & Politics" },
  { id: "science", name: "Science & Research" },
  { id: "health", name: "Health & Helping People" },
  { id: "creative", name: "Creative Arts" },
  { id: "teaching", name: "Teaching & Languages" },
  { id: "building", name: "Building & Engineering" },
  { id: "culture", name: "Travel & Culture" },
  { id: "problem", name: "Problem Solving" }
];

const UNIVERSITIES = [
  {
    id: "aupp",
    name: "American University of Phnom Penh (AUPP)",
    city: "Phnom Penh",
    website: "https://www.aupp.edu.kh",
    note: "English-medium university. Some programs are dual degrees with a U.S. partner university (University of Arizona or Fort Hays State University).",
    faculties: [
      "Faculty of Digital Technologies",
      "Faculty of Business and Management",
      "Faculty of Law",
      "Faculty of Social Sciences"
    ]
  }
];

// Majors.
//  subjects / interests  = ids from the lists above (used for matching)
//  universities          = ids from UNIVERSITIES ([] if none added yet)
//  requires              = courses or knowledge you will meet in this degree
//  aupp                  = facts from AUPP's own program page (optional)
const MAJORS = [
  // ---------------- Faculty of Digital Technologies ----------------
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Build systems that learn, see and understand language.",
    overview: "Artificial Intelligence teaches you how to build programs that learn from data, recognize images, understand language and make decisions. AUPP's program also looks at the ethical and social effects of AI.",
    covers: [
      "Artificial Intelligence and AI Ethics",
      "Machine Learning and Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI and Reinforcement Learning",
      "A Final Year Project and an internship"
    ],
    requires: [
      { name: "AI core courses", note: "Machine Learning, Deep Learning, Natural Language Processing, Computer Vision and more make up the 30-credit core" },
      { name: "Math and programming", note: "AUPP's page does not list these courses. AI study usually relies on programming (often Python), probability, statistics and linear algebra, so ask AUPP for the exact list" },
      { name: "Final Year Project and Internship", note: "both are required" }
    ],
    skills: ["Logical thinking", "Curiosity", "Programming", "Ethical judgment"],
    careers: ["Machine Learning Engineer", "Data Scientist", "AI Research Scientist", "AI Consultant", "AI Developer"],
    fit: "You like math and programming, and you are curious about how computers can learn.",
    subjects: ["math", "it"],
    interests: ["technology", "data", "science", "problem"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Artificial Intelligence",
      credits: "120",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-ai/"
    }
  },
  {
    id: "cs",
    name: "Computer Science",
    tagline: "Build software and manage the technology behind it.",
    overview: "Computer Science at AUPP prepares you to work with information and communication technology and to connect IT with business strategy. You study programming and data structures, together with management and communication.",
    covers: [
      "Programming: Computer Science I and II, Java Programming I",
      "Data Structures and Programming Languages",
      "Maths for Computing",
      "Technology, management and communication courses",
      "A senior project and an internship"
    ],
    requires: [
      { name: "Calculus", note: "Analytic Geometry and Calculus I (5 credits), used for analyzing how programs and systems behave" },
      { name: "Maths for Computing", note: "a math course designed for computing students. AUPP's page does not say which topics it covers" },
      { name: "Programming sequence", note: "Computer Science I and II, Data Structures, Programming Languages and Java Programming I" },
      { name: "Senior project and internship", note: "both are required" }
    ],
    skills: ["Logical thinking", "Patience with debugging", "Self-learning", "Teamwork"],
    careers: ["Systems analyst", "IT director", "Database or web administrator", "Network administrator", "IT security officer", "Data scientist"],
    fit: "You enjoy puzzles, like building things on a computer, and do not mind long hours of trial and error.",
    subjects: ["math", "it", "english"],
    interests: ["technology", "problem"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science, Information Technology Management (listed as ITM / Computer Science)",
      credits: "121",
      concentrations: ["Quantum Computing"],
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-itm-computer-science/"
    }
  },
  {
    id: "cyber",
    name: "Cybersecurity",
    tagline: "Protect systems, networks and data from attacks.",
    overview: "Cybersecurity teaches you how to protect digital systems and data from threats. It covers encryption, risk management and network defense, with practical work in ethical hacking, vulnerability assessment and security policy.",
    covers: [
      "Networking: Networking Essentials, Network Research",
      "Programming: Java, Python Fundamentals, database programming",
      "Digital Forensics",
      "Ethical hacking and vulnerability assessment",
      "Electives such as Social Engineering, Physical Security, Cloud Computing and Machine Learning"
    ],
    requires: [
      { name: "Calculus", note: "Analytical Geometry and Calculus I (5 credits)" },
      { name: "Maths for Computing", note: "a math course designed for computing students" },
      { name: "Programming", note: "Java Programming I, Python Fundamentals and Programming and Database Design" },
      { name: "Networking", note: "you learn how networks work before you learn to defend them" }
    ],
    skills: ["Curiosity", "Attention to detail", "Ethics", "Staying calm under pressure"],
    careers: ["Cybersecurity Analyst", "Information Security Officer", "Ethical Hacker", "Security Consultant"],
    fit: "You like understanding how things break, enjoy challenges like capture-the-flag games, and care about keeping people safe online.",
    subjects: ["math", "it"],
    interests: ["technology", "problem"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Cybersecurity",
      credits: "120",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-cybersecurity/"
    }
  },
  {
    id: "data",
    name: "Data Analytics",
    tagline: "Turn data into decisions.",
    overview: "Data Analytics teaches you to gather, analyze and interpret data to support business decisions, with a focus on data mining, statistical analysis and data visualization. It is a dual-degree program with Fort Hays State University.",
    covers: [
      "Programming with Python",
      "Data Analysis I",
      "Business Intelligence",
      "Management Information Systems",
      "Enterprise Resource Planning"
    ],
    requires: [
      { name: "Maths for Computing", note: "a math course designed for computing students" },
      { name: "Python programming", note: "used for most of the data work" },
      { name: "Data analysis and business intelligence", note: "turning raw numbers into charts and reports" },
      { name: "Statistics (elective)", note: "Advanced Statistics for Data Analysis is offered as an elective" }
    ],
    skills: ["Analytical thinking", "Attention to detail", "Clear explanations", "Curiosity"],
    careers: ["Data Analyst", "Data Engineer", "Data Scientist", "Business Intelligence Analyst", "Market Research Analyst"],
    fit: "You enjoy finding patterns in numbers and explaining what they mean.",
    subjects: ["math", "it", "economics"],
    interests: ["data", "business", "technology"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Data Analytics (dual degree: Bachelor of Science in Information Systems from Fort Hays State University)",
      credits: "122",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-data-analytics-dual-degree/"
    }
  },
  {
    id: "infra",
    name: "Digital Infrastructure",
    tagline: "Design and run the cloud systems that apps depend on.",
    overview: "Digital Infrastructure centers on cloud computing. You learn to design, set up and manage scalable and secure cloud solutions, with hands-on work in virtualization, containers and cloud architecture.",
    covers: [
      "Cloud Computing Fundamentals",
      "Cloud Solutions Architect: designing and implementing cloud-based solutions",
      "Advanced Cloud Computing: virtualization and containerization",
      "Networking Essentials",
      "Electives such as Ethical Hacking and Machine Learning"
    ],
    requires: [
      { name: "Calculus", note: "Analytical Geometry and Calculus I (5 credits)" },
      { name: "Maths for Computing", note: "a math course designed for computing students" },
      { name: "Programming", note: "Java Programming I, Computer Science A, and Programming and Database Design" },
      { name: "Networking", note: "Networking Essentials, the base for cloud work" }
    ],
    skills: ["Problem solving", "Systematic thinking", "Patience", "Teamwork"],
    careers: ["Cloud Solutions Architect", "Cloud Engineer", "DevOps Engineer", "Cloud Security Analyst", "Cloud Operations Manager"],
    fit: "You like understanding how big systems run behind the scenes and enjoy setting things up.",
    subjects: ["math", "it"],
    interests: ["technology", "building", "problem"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Digital Infrastructure",
      credits: "120",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-digital-infrastructure/"
    }
  },
  {
    id: "ict",
    name: "Information and Communications Technology",
    tagline: "Manage and lead computer-based information systems.",
    overview: "ICT prepares you to manage and lead computer-based information systems. It connects technology with business analysis and communication. You choose one of five specializations for your electives.",
    covers: [
      "Programming: Computer Science A and B, Java, database programming",
      "Systems Architecture and Operating Systems",
      "Programming Languages",
      "10 elective courses in one specialization"
    ],
    requires: [
      { name: "Calculus", note: "Analytic Geometry and Calculus I (5 credits)" },
      { name: "Math for Computing", note: "a math course designed for computing students" },
      { name: "Programming", note: "Computer Science A and B, Java Programming I, Programming Languages" },
      { name: "A specialization", note: "Network Infrastructure and Security, Telecom, Data Science, Software Engineering, or Management Information System" }
    ],
    skills: ["Problem solving", "Communication", "Organization", "Teamwork"],
    careers: ["Network designer and administrator", "System administrator", "Cybersecurity engineer", "Software developer", "Database administrator", "IT project manager", "Data scientist"],
    fit: "You like technology and want options: networks, software or data, and maybe a leadership role later.",
    subjects: ["math", "it", "english"],
    interests: ["technology", "business", "problem"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Information and Communications Technology",
      credits: "123",
      concentrations: ["Network Infrastructure and Security", "Telecom", "Data Science", "Software Engineering", "Management Information System"],
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-information-and-communications-technology/"
    }
  },
  {
    id: "app",
    name: "Interactive App Design and Development",
    tagline: "Create web and mobile apps people enjoy using.",
    overview: "This program builds the skills to create, maintain and improve web and mobile applications, from the visible interface to the back end. It is a dual-degree program with Fort Hays State University.",
    covers: [
      "Introduction to Web Development",
      "Front-End Web Development",
      "Back-End Web Development I",
      "Mobile Web Development I",
      "Introduction to Human-Computer Interaction",
      "Database Design and Programming"
    ],
    requires: [
      { name: "Maths for Computing", note: "the only math course listed on AUPP's page" },
      { name: "Web and mobile development", note: "front end, back end and mobile courses" },
      { name: "Databases", note: "Database Design and Programming" },
      { name: "UI/UX Design (elective)", note: "offered as an elective, not required" }
    ],
    skills: ["Creativity", "Programming", "Eye for detail", "Empathy for users"],
    careers: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "Web Designer", "UI/UX Designer"],
    fit: "You like both design and code, and want to see people use what you build.",
    subjects: ["it", "art"],
    interests: ["technology", "creative"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Interactive App Design and Development (dual degree: Bachelor of Science in Web and Mobile Application Development from Fort Hays State University)",
      credits: "122",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-interactive-app-design-and-development-dual-degree/"
    }
  },
  {
    id: "software",
    name: "Software Development",
    tagline: "Design, build and test real software.",
    overview: "Software Development teaches you to build working software through coding, design and project management. You use several programming languages and learn the principles of software engineering.",
    covers: [
      "Java, JavaScript and NodeJS programming",
      "Frontend and Backend Web Development",
      "Data Structure",
      "Software Engineering Fundamentals and Life Cycle",
      "Software Analysis and Design",
      "Software Quality Assurance"
    ],
    requires: [
      { name: "Calculus", note: "Analytical Geometry and Calculus I (5 credits)" },
      { name: "Maths for Computing", note: "a math course designed for computing students" },
      { name: "Programming", note: "Java Programming I, Programming and Database Design, JavaScript and back-end courses" },
      { name: "Software engineering", note: "analysis, design and quality assurance, so you learn to build software in teams" }
    ],
    skills: ["Logical thinking", "Teamwork", "Patience with debugging", "Self-learning"],
    careers: ["Software Developer/Engineer", "Full Stack Developer", "Front-end Developer", "Back-end Developer", "Mobile App Developer"],
    fit: "You want to build apps and programs for a living and enjoy working through problems step by step.",
    subjects: ["math", "it", "english"],
    interests: ["technology", "problem", "creative"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Digital Technologies",
      degree: "Bachelor of Science in Software Development",
      credits: "120",
      url: "https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-software-development/"
    }
  },

  // ---------------- Faculty of Business and Management ----------------
  {
    id: "business",
    name: "Business Administration",
    tagline: "Learn how organizations are run and grown.",
    overview: "Business Administration gives you a broad view of how companies work. It emphasizes economic and mathematical reasoning, analytical thinking and clear writing and speaking, and builds skills in marketing, finance, accounting and management.",
    covers: [
      "Marketing",
      "Finance and accounting",
      "Management and strategy",
      "Economic and mathematical reasoning",
      "Ethics, teamwork and cultural awareness"
    ],
    requires: [
      { name: "Economics and math reasoning", note: "AUPP's page does not name the courses. Expect to work with basic economic ideas and math relationships" },
      { name: "Accounting", note: "treated as a core business function, for example Financial Accounting" },
      { name: "Management and marketing", note: "courses such as Principles of Management and Introduction to Marketing" },
      { name: "Clear communication", note: "written and verbal skills are a stated focus" }
    ],
    skills: ["Communication", "Leadership", "Analytical thinking", "Teamwork"],
    careers: ["Roles in government or private firms of any size", "Entrepreneur", "Family business manager", "Banking, finance, trade or insurance roles"],
    fit: "You like working with people, leading teams, and turning ideas into a business.",
    subjects: ["economics", "english", "math", "speaking"],
    interests: ["business"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Business and Management",
      degree: "Bachelor of Science in Business (single degree), or dual degree with a Bachelor of Science in Business Administration from the University of Arizona",
      concentrations: ["AI & Business Analytics", "FinTech & Banking"],
      url: "https://www.aupp.edu.kh/faculty-of-business-and-management/bachelor-of-science-in-business/"
    }
  },
  {
    id: "comm",
    name: "Communication",
    tagline: "Pair communication skills with business knowledge.",
    overview: "This dual-degree program combines communication with business. You learn how to communicate well in public relations, marketing and other fields, alongside core business principles.",
    covers: [
      "Introduction to Communication and Oral Communications",
      "Public Relations: Introduction, Strategic, Campaigns, Crisis Communication",
      "Communication and Conflict Management",
      "Persuasion",
      "Business courses: Financial Accounting, Principles of Management, Introduction to Marketing, Strategic Management"
    ],
    requires: [
      { name: "Public speaking", note: "Oral Communications is part of the foundation" },
      { name: "Business core", note: "accounting, management, marketing and strategy courses" },
      { name: "Research Methods and Design", note: "you learn how to study audiences and markets" },
      { name: "Two sets of courses", note: "courses from AUPP and from the University of Arizona" }
    ],
    skills: ["Writing", "Public speaking", "Creativity", "Teamwork"],
    careers: ["Communications specialist", "Marketing coordinator", "Public relations manager", "Social media strategist", "Brand manager", "Account executive"],
    fit: "You like writing, speaking and persuading, and you are curious about how brands and messages work.",
    subjects: ["english", "speaking", "khmer"],
    interests: ["media", "business", "creative"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Business and Management",
      degree: "Dual degree: Bachelor of Science in Business (AUPP) and Bachelor of Arts in Communication (University of Arizona)",
      credits: "127",
      url: "https://www.aupp.edu.kh/faculty-of-business-and-management/bachelor-of-arts-in-communication-dual-degree/"
    }
  },
  {
    id: "ets",
    name: "Emerging Technologies in Society (Digital Marketing)",
    tagline: "Understand how technology changes society, and market with it.",
    overview: "This dual-degree program combines information science, emerging technologies in society and business. It looks at how information technology changes social interaction, organizations and the economy, including data, social media and the ethics and laws of technology.",
    covers: [
      "The Information Era Development",
      "Introduction to Data Science",
      "Digital Dilemmas: Privacy, Property, and Access",
      "Ethical Issues in Information",
      "Introduction to Marketing and Strategic Management",
      "An internship"
    ],
    requires: [
      { name: "Data basics", note: "Introduction to Data Science is part of the foundation" },
      { name: "Business core", note: "marketing and strategic management" },
      { name: "Internship", note: "needs 84 completed credits and at least 160 hours of workplace experience" },
      { name: "Two sets of courses", note: "courses from AUPP and from the University of Arizona" }
    ],
    skills: ["Curiosity about technology", "Communication", "Ethical thinking", "Creativity"],
    careers: ["Social media or digital marketing roles", "Marketing research", "Online content writer or editor", "Technology sales and consulting", "E-commerce manager", "Entrepreneur"],
    fit: "You are interested in social media, online marketing and how technology affects everyday life.",
    subjects: ["it", "english", "economics"],
    interests: ["media", "technology", "business", "data"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Business and Management",
      degree: "Dual degree: Bachelor of Science in Business (AUPP) and Bachelor of Arts in Emerging Technologies in Society (University of Arizona)",
      credits: "127",
      url: "https://www.aupp.edu.kh/faculty-of-business-and-management/bachelor-of-arts-in-emerging-technologies-in-society-bachelor-of-science-in-business-dual-degree/"
    }
  },

  // ---------------- Faculty of Law ----------------
  {
    id: "law",
    name: "Law",
    tagline: "Study the legal system, rights and justice.",
    overview: "Law builds legal analysis, critical thinking and problem solving, grounded in ethics. AUPP's program covers Cambodian, U.S., comparative and international law, with internships at law firms, ministries and other organizations.",
    covers: [
      "Cambodian, U.S., comparative and international law",
      "Business law and contracts",
      "Criminal law",
      "Intellectual property",
      "Internships in law firms and government ministries"
    ],
    requires: [
      { name: "Heavy reading", note: "many long legal texts, in English" },
      { name: "Legal writing", note: "short, precise and well-organized arguments" },
      { name: "Public speaking", note: "arguing a case out loud" },
      { name: "Critical thinking", note: "a stated focus of the program" }
    ],
    skills: ["Critical thinking", "Persuasive speaking", "Writing", "Fairness"],
    careers: ["Law firm lawyer", "Corporate legal department", "Government ministry roles", "Non-profit or international organization roles", "Further study (LLM or J.D.)"],
    fit: "You enjoy reading, debating and thinking about what is fair.",
    subjects: ["khmer", "history", "english", "speaking"],
    interests: ["society", "world"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Law",
      degree: "Bachelor of Arts in Law (single degree), or dual degree with the University of Arizona",
      url: "https://www.aupp.edu.kh/faculty-of-law/bachelor-of-arts-in-law/"
    }
  },

  // ---------------- Faculty of Social Sciences ----------------
  {
    id: "ir",
    name: "International Relations and Diplomacy",
    tagline: "Prepare for global leadership and public service.",
    overview: "This program prepares you for global leadership and service, for example as a policymaker in a government agency, international organization, NGO or multinational company. It can also lead to graduate study in public policy, development, security or international relations.",
    covers: [
      "Foreign affairs and diplomacy",
      "International security",
      "The international economy",
      "Public policy",
      "Skills for working in government, NGOs and international organizations"
    ],
    requires: [
      { name: "Reading and writing", note: "AUPP's page does not list required courses. Expect a lot of reading and essay writing" },
      { name: "English", note: "classes and materials are in English" },
      { name: "Debate and public speaking", note: "common in policy and diplomacy work" },
      { name: "Two degree options", note: "a single AUPP degree, or a dual degree in Political Science with Fort Hays State University" }
    ],
    skills: ["Critical thinking", "Writing", "Cultural awareness", "Negotiation"],
    careers: ["Policy roles in government agencies", "International organization staff", "NGO officer", "Consulting on foreign affairs and the international economy", "Graduate study"],
    fit: "You follow world news, like debating, and want to work on problems that cross borders.",
    subjects: ["history", "geography", "english", "speaking", "khmer"],
    interests: ["world", "society", "culture"],
    universities: ["aupp"],
    aupp: {
      faculty: "Faculty of Social Sciences",
      degree: "Bachelor of Arts in International Relations and Diplomacy (single degree), or dual degree: Bachelor of Science in Political Science from Fort Hays State University",
      url: "https://www.aupp.edu.kh/faculty-of-social-sciences/bachelor-of-arts-in-international-relations-and-diplomacy/"
    }
  },

  // ---------------- Other majors (draft overviews, no university linked yet) ----------------
  {
    id: "accounting",
    name: "Accounting & Finance",
    tagline: "Track, audit and plan money for people and companies.",
    overview: "Accounting and Finance trains you to record and check financial information, then use it to guide decisions about spending, saving and investing.",
    covers: [
      "Financial and managerial accounting",
      "Auditing and internal controls",
      "Taxation",
      "Corporate finance and investment basics",
      "Accounting software and spreadsheets"
    ],
    requires: [
      { name: "Business Mathematics", note: "percentages, interest and ratios" },
      { name: "Statistics", note: "analyzing financial data" },
      { name: "Economics", note: "the environment companies operate in" },
      { name: "Excel", note: "used in almost every accounting course" }
    ],
    skills: ["Accuracy", "Honesty", "Analytical thinking", "Organization"],
    careers: ["Accountant", "Auditor", "Financial analyst", "Tax officer"],
    fit: "You are careful with numbers, like order and rules, and are comfortable working on detailed tasks.",
    subjects: ["math", "economics"],
    interests: ["business", "problem"],
    universities: []
  },
  {
    id: "civil",
    name: "Civil Engineering",
    tagline: "Plan and build roads, bridges and buildings.",
    overview: "Civil Engineering is about designing and constructing the structures people use every day, and making sure they are safe, affordable and long-lasting.",
    covers: [
      "Structural analysis and design",
      "Construction materials such as concrete and steel",
      "Surveying and site planning",
      "Water, roads and transport engineering",
      "Computer-aided design (CAD) and project management"
    ],
    requires: [
      { name: "Calculus", note: "used in almost every engineering calculation" },
      { name: "Physics", note: "forces, motion and energy" },
      { name: "Statics and Strength of Materials", note: "how structures carry loads" },
      { name: "Technical drawing and CAD", note: "reading and making plans" }
    ],
    skills: ["Problem solving", "Spatial thinking", "Teamwork", "Attention to safety"],
    careers: ["Civil engineer", "Site supervisor", "Structural designer", "Construction project manager"],
    fit: "You like math and physics, enjoy seeing real things get built, and are happy working on site as well as in an office.",
    subjects: ["math", "physics"],
    interests: ["building", "problem"],
    universities: []
  },
  {
    id: "medicine",
    name: "Medicine & Health Sciences",
    tagline: "Prevent, diagnose and treat illness.",
    overview: "Health science programs, such as medicine, nursing and pharmacy, combine a lot of science study with hands-on training in clinics and hospitals.",
    covers: [
      "Anatomy and physiology",
      "Biochemistry and microbiology",
      "Pharmacology",
      "Public health",
      "Clinical practice with patients"
    ],
    requires: [
      { name: "Biology", note: "cells, organs and how the body works" },
      { name: "Chemistry", note: "including organic chemistry and biochemistry" },
      { name: "Memorization", note: "a large amount of terms and procedures" },
      { name: "Long, demanding study", note: "with practical training in hospitals" }
    ],
    skills: ["Empathy", "Stamina", "Careful observation", "Working under pressure"],
    careers: ["Doctor", "Nurse", "Pharmacist", "Public health officer"],
    fit: "You care about helping people, enjoy biology and chemistry, and can commit to a long program.",
    subjects: ["biology", "chemistry"],
    interests: ["health", "science"],
    universities: []
  },
  {
    id: "english",
    name: "English & Education",
    tagline: "Teach English and other subjects.",
    overview: "This major prepares you to teach and to work with the English language. You study how language works and how people learn.",
    covers: [
      "English grammar, writing and literature",
      "Teaching methods and lesson planning",
      "Educational psychology",
      "Classroom management",
      "Teaching practice in real schools"
    ],
    requires: [
      { name: "Strong English", note: "reading, writing, speaking and listening" },
      { name: "Academic writing", note: "essays and research papers" },
      { name: "Presenting", note: "speaking clearly in front of a class" },
      { name: "Practicum", note: "supervised teaching in a real classroom" }
    ],
    skills: ["Patience", "Communication", "Creativity", "Explaining ideas simply"],
    careers: ["Teacher", "Translator", "Curriculum developer", "Education officer"],
    fit: "You enjoy explaining things to others and like languages and reading.",
    subjects: ["english", "khmer", "speaking"],
    interests: ["teaching", "culture"],
    universities: []
  },
  {
    id: "design",
    name: "Graphic Design",
    tagline: "Create visuals for brands, media and products.",
    overview: "Graphic Design is about communicating ideas with images, type and layout. You learn design principles and practice on real projects.",
    covers: [
      "Design principles, color and layout",
      "Typography",
      "Branding and logo design",
      "Design software such as Adobe tools or Figma",
      "Building a portfolio"
    ],
    requires: [
      { name: "Drawing and visual sense", note: "you do not need to be a master, but you must practice a lot" },
      { name: "Design software", note: "learned from scratch in the first year" },
      { name: "Portfolio", note: "your finished work matters more than grades when you apply for jobs" },
      { name: "Taking feedback", note: "critiques are part of every project" }
    ],
    skills: ["Creativity", "Attention to detail", "Time management", "Taking critique"],
    careers: ["Graphic designer", "UI designer", "Brand designer", "Social media designer"],
    fit: "You notice how things look, enjoy making visuals, and like improving your work.",
    subjects: ["art", "it"],
    interests: ["creative", "media"],
    universities: []
  },
  {
    id: "tourism",
    name: "Tourism & Hospitality",
    tagline: "Manage hotels, travel and cultural experiences.",
    overview: "This major prepares you to work in hotels, restaurants, tour companies and cultural sites. Cambodia's visitors come for places like Angkor, so the field has many local jobs.",
    covers: [
      "Tourism management and planning",
      "Hotel and restaurant operations",
      "Customer service",
      "Cultural heritage and local history",
      "Event planning and tour guiding"
    ],
    requires: [
      { name: "English", note: "speaking with international guests every day" },
      { name: "A second foreign language", note: "such as Chinese, Korean or Japanese, which is a big plus" },
      { name: "Geography and history", note: "to tell visitors about places" },
      { name: "Internship", note: "most programs include time in a hotel or tour company" }
    ],
    skills: ["Communication", "Friendliness", "Problem solving", "Cultural knowledge"],
    careers: ["Tour guide", "Hotel manager", "Travel agent", "Event coordinator"],
    fit: "You like meeting people, enjoy sharing Cambodia's culture, and stay cheerful when things get busy.",
    subjects: ["english", "geography", "history"],
    interests: ["culture", "business"],
    universities: []
  }
];