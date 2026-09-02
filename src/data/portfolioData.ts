import { ProfileInfo, SkillItem, EducationItem, ProjectItem, CertificateItem } from '../types';

export const PROFILE_DATA: ProfileInfo = {
  name: 'Shruti Das',
  title: 'BCA Student & Aspiring Web Developer',
  subtitle: 'Passionate about crafting fast, accessible web applications and solving real-world computing problems.',
  bio: 'I am a dedicated Bachelor of Computer Applications (BCA) student with a solid foundation in computer science fundamentals and a strong passion for modern front-end and web development. I love turning complex logic into elegant, user-friendly digital experiences.',
  detailedBio: 'Throughout my academic journey in Computer Applications, I have cultivated hands-on expertise in core programming languages like C++, Java, and Python, while mastering modern web technologies including HTML5, CSS3, and JavaScript. I thrive on continuous learning, building practical projects, and collaborating with Git and GitHub. Currently seeking summer internships and entry-level software/web developer roles where I can contribute actively and grow alongside a dynamic team.',
  email: 'sd2723328@gmail.com',
  location: 'Kolkata, India',
  status: 'Open for Internships & Junior Developer Roles',
  degree: 'Bachelor of Computer Applications (BCA)',
  githubUrl: 'https://github.com/shrutidas-dev',
  linkedinUrl: 'https://linkedin.com/in/shruti-das-bca',
  interests: [
    'Front-End Web Development',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Responsive UI/UX Design',
    'Open Source & Git Collaboration',
    'Database Management Systems'
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Web Technologies
  {
    name: 'HTML5',
    level: 95,
    category: 'Frontend',
    description: 'Semantic markup, accessibility (a11y), modern web standards, and SEO best practices.',
    yearsOrAcademic: 'Academic & Projects',
    featured: true
  },
  {
    name: 'CSS3 / Styling',
    level: 90,
    category: 'Frontend',
    description: 'Flexbox, CSS Grid, animations, responsive design, Tailwind CSS, and glassmorphism styling.',
    yearsOrAcademic: 'Academic & Projects',
    featured: true
  },
  {
    name: 'JavaScript (ES6+)',
    level: 88,
    category: 'Frontend',
    description: 'DOM manipulation, asynchronous JavaScript (Promises/Async-Await), Fetch API, and modern ES6+ features.',
    yearsOrAcademic: 'Academic & Projects',
    featured: true
  },
  // Core Programming Languages
  {
    name: 'C++',
    level: 85,
    category: 'Programming',
    description: 'Core syntax, pointers, memory management, STL containers, and Data Structures & Algorithms.',
    yearsOrAcademic: 'Coursework & Problem Solving',
    featured: true
  },
  {
    name: 'Python',
    level: 84,
    category: 'Programming',
    description: 'Scripting, Object-Oriented concepts, data handling, file I/O, automation, and mini backend tools.',
    yearsOrAcademic: 'Coursework & Projects',
    featured: true
  },
  {
    name: 'Java',
    level: 82,
    category: 'Programming',
    description: 'Core Java, OOP principles (Inheritance, Polymorphism, Encapsulation), Collections framework, and Exception handling.',
    yearsOrAcademic: 'Coursework & Academic Labs',
    featured: true
  },
  // Version Control & Tools
  {
    name: 'Git and GitHub',
    level: 88,
    category: 'Tools & Version Control',
    description: 'Branching strategies, commits, pull requests, merge conflict resolution, repository management, and GitHub Pages.',
    yearsOrAcademic: 'Daily Workflow & Team Labs',
    featured: true
  },
  {
    name: 'VS Code & DevTools',
    level: 92,
    category: 'Tools & Version Control',
    description: 'Browser debugging, responsive inspection, code extensions, snippets, and performance profiling.',
    yearsOrAcademic: 'Daily Environment',
    featured: false
  },
  // Core Computer Science
  {
    name: 'Data Structures & Algorithms',
    level: 80,
    category: 'Core CS & Databases',
    description: 'Arrays, Linked Lists, Stacks, Queues, Binary Trees, Searching & Sorting algorithms, and Time/Space complexity.',
    yearsOrAcademic: 'University Syllabus',
    featured: false
  },
  {
    name: 'DBMS & SQL',
    level: 84,
    category: 'Core CS & Databases',
    description: 'Relational database schema design, Normalization, SQL queries (JOINs, aggregation), and ACID properties.',
    yearsOrAcademic: 'Coursework & Labs',
    featured: false
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University Department of Computer Applications',
    location: 'West Bengal, India',
    period: '2023 - 2026 (Expected)',
    gradeOrScore: 'CGPA: 8.8 / 10.0 (Current)',
    status: 'In Progress',
    coursework: [
      'Data Structures & Algorithms',
      'Web Technologies & Application Development',
      'Object Oriented Programming in C++ & Java',
      'Database Management Systems (DBMS)',
      'Operating Systems & Linux Basics',
      'Computer Networks & Security',
      'Software Engineering Principles'
    ],
    highlights: [
      'Top 5% rank in practical programming & laboratory assessments.',
      'Active participant in collegiate coding hackathons and technical seminars.',
      'Completed multiple capstone group and individual semester projects.'
    ],
    description: 'Comprehensive 3-year undergraduate degree focusing on software engineering, computer architectures, web systems, database architectures, and algorithm design.'
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Certificate (10+2 / Science)',
    institution: 'Higher Secondary School',
    location: 'West Bengal, India',
    period: '2021 - 2023',
    gradeOrScore: 'Percentage: 86.4%',
    status: 'Completed',
    coursework: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'Chemistry',
      'English'
    ],
    highlights: [
      'Received distinction award in Computer Science and Mathematics.',
      'Developed early passion for programming through introductory C++ and Python courses.'
    ],
    description: 'Completed senior secondary education with focus on science and computational thinking.'
  },
  {
    id: 'secondary',
    degree: 'Secondary School Examination (10th Standard)',
    institution: 'High School',
    location: 'West Bengal, India',
    period: '2021',
    gradeOrScore: 'Percentage: 89.2%',
    status: 'Completed',
    coursework: [
      'General Sciences',
      'Mathematics',
      'Computer Fundamentals',
      'Social Studies',
      'Languages'
    ],
    highlights: [
      'Merit certificate for academic excellence in Mathematics & Science.',
      'School coding club active member.'
    ],
    description: 'Built strong foundations in mathematics, logical reasoning, and basic computer fundamentals.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'campus-event-hub',
    title: 'EduCampus - College Event & Resource Portal',
    tagline: 'A centralized portal for student event registrations, notices, and club resources.',
    description: 'Developed a responsive web platform allowing students and faculty to publish college events, RSVP, filter upcoming workshops, and download semester study materials.',
    detailedDescription: 'EduCampus bridges the communication gap between university clubs and BCA students. It features dynamic category filtering, local storage persistence, responsive modal sheets for event details, and an interactive calendar view built using pure modern JavaScript, HTML5, and Tailwind CSS.',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git & GitHub'],
    githubUrl: 'https://github.com/shrutidas-dev/campus-event-hub',
    liveUrl: 'https://educampus-demo.netlify.app',
    featured: true,
    date: '2024',
    metrics: 'Used by 200+ students in college trials',
    keyFeatures: [
      'Real-time search and tag-based filtering for workshops & hackathons',
      'Interactive RSVP and ticket generator with instant client validation',
      'Dark mode UI with glassmorphism cards and smooth entrance animations',
      'Responsive design tested seamlessly across mobile and desktop viewport'
    ],
    gradient: 'from-indigo-600/30 via-purple-600/20 to-transparent'
  },
  {
    id: 'devquiz-engine',
    title: 'CodeQuizzer - DSA & Web Dev Interactive Quiz',
    tagline: 'An engaging quiz platform for testing programming logic and CS concepts.',
    description: 'Built an interactive testing application with timed questions, live score tracking, category selection (HTML/CSS, JS, C++, Python), and detailed answer explanations.',
    detailedDescription: 'Designed to help BCA peers practice for technical interview rounds. Contains over 100+ curated questions across DSA, web development, and OOP paradigms with randomized shuffle algorithms, difficulty filters, and custom score summary cards.',
    category: 'Web Development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Git'],
    githubUrl: 'https://github.com/shrutidas-dev/codequizzer-app',
    liveUrl: 'https://codequizzer-demo.vercel.app',
    featured: true,
    date: '2024',
    metrics: '100+ questions & full state management',
    keyFeatures: [
      'Dynamic timer with visual countdown bar for each question',
      'Instant feedback with detailed code snippets and algorithmic explanations',
      'Local score history and high-score badge tracking',
      'Comprehensive topic breakdown covering HTML, CSS, JavaScript, C++, and Java'
    ],
    gradient: 'from-blue-600/30 via-cyan-600/20 to-transparent'
  },
  {
    id: 'student-records-system',
    title: 'Student Grade & Attendance Management System',
    tagline: 'An object-oriented desktop application for semester record tracking.',
    description: 'An academic management application built with Java & Python with structured file I/O, student GPA calculation, grade distribution reports, and search capabilities.',
    detailedDescription: 'Demonstrates strong OOP principles including inheritance, polymorphism, and encapsulated data structures. Allows educators to record marks, calculate SGPA/CGPA, identify students needing academic assistance, and export summary CSV records.',
    category: 'Academic Project',
    technologies: ['Java', 'Python', 'OOP Concepts', 'File I/O', 'Git'],
    githubUrl: 'https://github.com/shrutidas-dev/student-management-system',
    liveUrl: 'https://github.com/shrutidas-dev/student-management-system#demo',
    featured: true,
    date: '2023',
    metrics: 'Structured OOP architecture',
    keyFeatures: [
      'Modular class hierarchy with clean separation of model, view, and controller',
      'Automatic SGPA calculation using university grading scale',
      'Robust input validation preventing erroneous grade entries',
      'Persistent data storage utilizing serialized binary records and CSV exports'
    ],
    gradient: 'from-emerald-600/30 via-teal-600/20 to-transparent'
  },
  {
    id: 'dsa-algorithm-visualizer',
    title: 'AlgoVision - Sorting & Search Visualizer',
    tagline: 'Interactive web-based visualizer for classic sorting and graph algorithms.',
    description: 'A visual learning tool that animates Bubble Sort, Selection Sort, Merge Sort, Quick Sort, and Binary Search step-by-step with adjustable execution speed.',
    detailedDescription: 'Developed to deepen understanding of Time and Space complexity in C++ and JavaScript. Enables users to generate random array bars, customize speed controls, compare swap counts, and visually follow step-by-step partition loops.',
    category: 'Programming / DSA',
    technologies: ['C++', 'JavaScript', 'HTML5 Canvas', 'CSS Animations', 'Git'],
    githubUrl: 'https://github.com/shrutidas-dev/algo-vision-visualizer',
    liveUrl: 'https://algovision-visualizer.netlify.app',
    featured: true,
    date: '2024',
    metrics: '6 Sorting & Searching algorithms supported',
    keyFeatures: [
      'Step-by-step execution mode with pause, resume, and step forward',
      'Real-time comparison of operations, comparisons count, and array access metrics',
      'Color-coded states: pivot, comparing, swapping, and sorted elements',
      'Embedded pseudocode and complexity charts for quick revision'
    ],
    gradient: 'from-amber-600/30 via-orange-600/20 to-transparent'
  },
  {
    id: 'taskflow-workspace',
    title: 'TaskFlow - Student Kanban & Notes Workspace',
    tagline: 'A lightweight productivity board with drag-and-drop assignment tracking.',
    description: 'A responsive Kanban board application enabling students to organize semester assignments, exams, and coding practice routines with deadline reminders.',
    detailedDescription: 'Built with pure JavaScript leveraging the native HTML5 Drag and Drop API, LocalStorage persistence, custom priority tags, and clean Markdown notes editing.',
    category: 'Web Development',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git & GitHub'],
    githubUrl: 'https://github.com/shrutidas-dev/taskflow-kanban',
    liveUrl: 'https://taskflow-student.vercel.app',
    featured: false,
    date: '2024',
    metrics: 'Zero external UI dependencies',
    keyFeatures: [
      'Native drag and drop between To-Do, In-Progress, and Completed columns',
      'Deadline countdown tags with color warning for upcoming tests',
      'Auto-save mechanism with instantaneous browser state synchronization',
      'Lightweight bundle under 35KB ensuring rapid load times'
    ],
    gradient: 'from-rose-600/30 via-pink-600/20 to-transparent'
  },
  {
    id: 'weather-task-dashboard',
    title: 'SkyCast & Utility Dashboard',
    tagline: 'Clean multi-functional utility dashboard with real-time weather API integration.',
    description: 'An asynchronous web app integrating open weather APIs, digital clock, quick notes, and motivational quote generators for focused study sessions.',
    detailedDescription: 'Utilizes asynchronous JavaScript (Async/Await and Fetch API), responsive CSS grid layout, SVG weather icons, and graceful error handling for offline states.',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Git'],
    githubUrl: 'https://github.com/shrutidas-dev/skycast-dashboard',
    liveUrl: 'https://skycast-dashboard.netlify.app',
    featured: false,
    date: '2023',
    metrics: 'REST API integration with Async/Await',
    keyFeatures: [
      'Live weather forecasting by city with 5-day temperature trends',
      'Clean glassmorphic widget layout designed for study environments',
      'Graceful network failure handling with cached responses',
      'Interactive unit toggles between Celsius and Fahrenheit'
    ],
    gradient: 'from-violet-600/30 via-indigo-600/20 to-transparent'
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-web-dev',
    title: 'Responsive Web Design & Modern Frontend Certification',
    issuer: 'freeCodeCamp / Global Tech Curriculum',
    issueDate: 'August 2024',
    credentialId: 'FCC-RWD-98421',
    credentialUrl: 'https://freecodecamp.org/certification/shrutidas/responsive-web-design',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'Web Accessibility'],
    description: 'Completed 300+ hours of verified coursework and 5 responsive web projects demonstrating mastery of semantic HTML, fluid layouts, media queries, and modern UI styling.',
    type: 'Course'
  },
  {
    id: 'cert-java-oop',
    title: 'Programming in Java & Object-Oriented Design',
    issuer: 'NPTEL / Academic Excellence Certification',
    issueDate: 'May 2024',
    credentialId: 'NPTEL24CS78S19283',
    credentialUrl: 'https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS78S19283',
    skills: ['Java', 'OOP', 'Inheritance', 'Exception Handling', 'Collections Framework', 'Multithreading'],
    description: '12-week rigorous course covering foundational to advanced Java, memory paradigms, collections, file handling, and design patterns, passing with Elite distinction.',
    type: 'Academic'
  },
  {
    id: 'cert-python',
    title: 'Python for Everybody & Computational Problem Solving',
    issuer: 'Coursera / University of Michigan (Online)',
    issueDate: 'January 2024',
    credentialId: 'COURSERA-PY-883921',
    credentialUrl: 'https://coursera.org/verify/COURSERA-PY-883921',
    skills: ['Python', 'Data Structures', 'File Handling', 'Web Scraping Basics', 'Logic Building'],
    description: 'Comprehensive program exploring Python data structures, algorithm problem solving, JSON handling, and developing modular command-line tools.',
    type: 'Course'
  },
  {
    id: 'cert-git-github',
    title: 'Version Control with Git & GitHub Collaboration',
    issuer: 'Meta / Coursera Professional Certificate',
    issueDate: 'November 2023',
    credentialId: 'META-GIT-492019',
    credentialUrl: 'https://coursera.org/verify/META-GIT-492019',
    skills: ['Git', 'GitHub', 'Version Control', 'Branching & Merging', 'Open Source Workflow'],
    description: 'Practical training on Git command-line operations, repository structures, remote synchronizations, pull request reviews, and collaborative team development.',
    type: 'Bootcamp'
  },
  {
    id: 'cert-cpp-dsa',
    title: 'Problem Solving & C++ Fundamentals',
    issuer: 'HackerRank Problem Solving Badge',
    issueDate: 'September 2023',
    credentialId: 'HR-CPP-PS-57382',
    credentialUrl: 'https://hackerrank.com/certificates/HR-CPP-PS-57382',
    skills: ['C++', 'Data Structures', 'Algorithms', 'Pointers', 'STL'],
    description: 'Gold badge in Problem Solving, demonstrating proficiency in solving algorithmic challenges involving arrays, strings, dynamic programming, and recursion in C++.',
    type: 'Assessment'
  }
];

export const HIGHLIGHTS_METRICS = [
  { label: 'Degree', value: 'BCA', detail: '3rd Year Student' },
  { label: 'Current CGPA', value: '8.8 / 10', detail: 'Academic Excellence' },
  { label: 'Projects Built', value: '6+', detail: 'Web & Academic Apps' },
  { label: 'Certifications', value: '5+', detail: 'Verified Badges' },
  { label: 'DSA Problems', value: '150+', detail: 'Solved & Practiced' }
];
