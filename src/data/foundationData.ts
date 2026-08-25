import { Program, ImpactStat, ApproachStep, PartnerCategory, BlogPost, ValuePillar } from '../types';

export const FOUNDATION_INFO = {
  name: "Isaac Joseph-Fagbemi Foundation",
  shortName: "IJF Foundation",
  tagline: "Empowering Youth. Strengthening Communities. Creating Lasting Impact.",
  mission: "To empower youth through education, leadership development, skills training, and community initiatives.",
  vision: "A world where every young person has the opportunity to learn, lead, and succeed.",
  aboutShort: "The Isaac Joseph-Fagbemi Foundation was established with the vision of empowering young people and communities to reach their full potential. We believe sustainable development begins with investing in people.",
  aboutFull: "The Isaac Joseph-Fagbemi Foundation was established with the vision of empowering young people and communities to reach their full potential. We believe that sustainable development begins with investing in people — especially young people who represent the future of every society. Through targeted programs, partnerships, and community engagement initiatives, the foundation works to address key social challenges while creating opportunities for growth, innovation, and leadership.",
  contact: {
    phone: "+234 816 288 6393",
    whatsapp: "+234 811 711 4735",
    whatsappLink: "https://wa.me/2348117114735?text=Hello%20IJF%20Foundation%2C%20I%20would%20like%20to%20inquire%20about%20donations%20and%20programs.",
    email: "info@ijfoundation.org",
    location: "Nigeria",
    responseTime: "2–3 business days",
  },
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  }
};

export const CORE_VALUES: ValuePillar[] = [
  {
    title: "Integrity",
    description: "We uphold transparency and accountability in all our programs and stakeholder interactions.",
    icon: "ShieldCheck"
  },
  {
    title: "Empowerment",
    description: "We believe in equipping individuals with the tools, skills, and confidence to create their own opportunities.",
    icon: "Zap"
  },
  {
    title: "Collaboration",
    description: "We work hand-in-hand with partners, grassroots communities, and educational institutions to maximize impact.",
    icon: "Users"
  },
  {
    title: "Innovation",
    description: "We support creative, scalable, and practical solutions to address evolving social and economic challenges.",
    icon: "Lightbulb"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "youth-leadership",
    number: "01",
    title: "Youth Leadership & Civic Development",
    slug: "youth-leadership",
    tagline: "Nurturing responsible, ethical leaders through mentorship, leadership training, and civic engagement.",
    description: "The Youth Leadership & Civic Development Program is designed to nurture responsible, ethical, and visionary leaders who can positively influence their communities. This program provides structured initiatives equipping participants with leadership skills and civic confidence.",
    fullContent: {
      overview: "Young people often lack access to structured leadership training, ethical mentorship, and civic education. Our Youth Leadership & Civic Development initiative bridges this gap by creating immersive learning spaces, youth forums, and community projects where young citizens learn how to lead with integrity.",
      whyItMatters: "Sustainable development requires leaders who prioritize ethical governance, social equity, and community welfare. By investing in youth today, we prepare the visionary stewards of tomorrow's institutions.",
      keyActivities: [
        "Youth leadership training workshops and bootcamps",
        "Civic education and democratic participation seminars",
        "Mentorship and executive coaching programs",
        "Youth policy dialogue forums with key stakeholders",
        "Community-led social transformation projects"
      ],
      targetBeneficiaries: [
        "Secondary school student council leaders",
        "University students and campus organizers",
        "Early-career civic professionals",
        "Grassroots youth community leaders"
      ],
      expectedOutcomes: [
        "Equipped youth leaders capable of running community projects",
        "Increased civic awareness and policy engagement",
        "Active alumni network of ethical young leaders across Nigeria"
      ]
    },
    image: "/images/youth-empo-1-1.jpg",
    imageAlt: "Young people participating in IJF Foundation leadership workshop",
    iconName: "Award"
  },
  {
    id: "education",
    number: "02",
    title: "Education Access & Academic Support",
    slug: "education",
    tagline: "Supporting students with scholarships, career guidance, and academic mentorship to improve outcomes.",
    description: "Education remains one of the most powerful tools for breaking cycles of poverty. This program supports students with academic resources, bursaries, mentorship, and university guidance.",
    fullContent: {
      overview: "Many promising students face crippling barriers, including financial distress, lack of study materials, and absence of academic mentors. The IJF Foundation Education Access initiative ensures every student has the tools and support needed to complete their education successfully.",
      whyItMatters: "Access to quality education transforms not only an individual's trajectory but also lifts entire families and communities out of economic stagnation.",
      keyActivities: [
        "Scholarship and bursary programs for disadvantaged students",
        "Academic mentorship, tutoring, and exam preparation",
        "Career counseling and university entrance guidance",
        "School outreach and motivational assembly programs",
        "Educational resource distribution (books, learning tech)"
      ],
      targetBeneficiaries: [
        "Disadvantaged secondary school students",
        "Underserved rural and peri-urban communities",
        "First-generation university applicants",
        "Youth preparing for tertiary education"
      ],
      expectedOutcomes: [
        "Improved graduation rates and tertiary enrollment",
        "Reduced financial dropout rates among brilliant youth",
        "Enhanced career clarity and self-confidence"
      ]
    },
    image: "/images/edu-20.jpg",
    imageAlt: "Students engaged in IJF academic support program",
    iconName: "BookOpen"
  },
  {
    id: "digital-skills",
    number: "03",
    title: "Digital Skills & Technology Empowerment",
    slug: "digital-skills",
    tagline: "Equipping youth with digital literacy, coding, and entrepreneurship training for today's economy.",
    description: "Digital skills are essential for participating in the modern global economy. We equip youth from underserved backgrounds with practical digital literacy, tech tools, and coding capabilities.",
    fullContent: {
      overview: "In a rapidly evolving digital world, lack of technology access deepens economic inequality. Our technology empowerment program delivers hands-on digital literacy, web development, data analysis, and remote work readiness training.",
      whyItMatters: "Tech skills open global economic opportunities, allowing young Nigerians to build digital products, secure employment, or establish tech-enabled micro-enterprises.",
      keyActivities: [
        "Digital literacy and computer basics training",
        "Coding, web design, and software fundamentals bootcamps",
        "Digital marketing and e-commerce workshops",
        "Career readiness and remote work skills training",
        "Technology hackathons and innovation challenges"
      ],
      targetBeneficiaries: [
        "Youth aged 16–35 seeking digital skills",
        "Students transitioning into the digital economy",
        "Young entrepreneurs needing online brand presence",
        "Career changers pursuing technology pathways"
      ],
      expectedOutcomes: [
        "High percentage of certified digital skills graduates",
        "Direct placement into entry-level tech roles or freelancing",
        "Enhanced digital literacy in grassroots communities"
      ]
    },
    image: "/images/edu-21.jpg",
    imageAlt: "Youth training in digital skills lab",
    iconName: "Laptop"
  },
  {
    id: "entrepreneurship",
    number: "04",
    title: "Entrepreneurship & Economic Empowerment",
    slug: "entrepreneurship",
    tagline: "Supporting young entrepreneurs with skills, mentorship, and business support to build livelihoods.",
    description: "Many young people possess innovative ideas but lack access to business training and capital. We provide practical business mentorship, financial literacy, and enterprise support.",
    fullContent: {
      overview: "Unemployment among youth can be sustainably countered through vibrant micro-entrepreneurship. IJF Foundation works alongside young founders to refine business models, teach financial management, and provide incubator support.",
      whyItMatters: "Youth-led small businesses generate local jobs, foster innovation, and drive sustainable economic independence in underserved communities.",
      keyActivities: [
        "Entrepreneurship capacity bootcamps",
        "Business planning, pitching, and financial management",
        "Startup mentorship and peer incubator circles",
        "Facilitated access to micro-grants and seed funding",
        "Market linkage and business networking expos"
      ],
      targetBeneficiaries: [
        "Early-stage young entrepreneurs",
        "Youth launching micro-enterprises",
        "Vocational trade graduates expanding businesses",
        "Creative and agricultural young founders"
      ],
      expectedOutcomes: [
        "Sustainable youth-owned businesses created and expanded",
        "Increased income generation and job creation",
        "Robust enterprise support system for community founders"
      ]
    },
    image: "/images/edu-5.jpg",
    imageAlt: "Young entrepreneur presenting business strategy",
    iconName: "TrendingUp"
  },
  {
    id: "community-development",
    number: "05",
    title: "Community Development & Social Impact",
    slug: "community-development",
    tagline: "Working with communities to design and implement initiatives that improve social wellbeing.",
    description: "Communities thrive when local residents are empowered to co-design solutions. We collaborate with grassroots leaders to execute health, social welfare, and environmental projects.",
    fullContent: {
      overview: "Top-down interventions often fail to address true grassroots needs. IJF Foundation uses a participatory community-first model to identify pressing social issues and co-create sustainable solutions.",
      whyItMatters: "Community ownership ensures that development programs remain active, resilient, and effective long after initial implementation.",
      keyActivities: [
        "Community needs assessment and dialogue circles",
        "Volunteer mobilization and civic action days",
        "Community health awareness and wellness drives",
        "Grassroots leadership training for community organizers",
        "Social infrastructure improvement initiatives"
      ],
      targetBeneficiaries: [
        "Underserved rural and urban communities",
        "Local community heads and traditional leaders",
        "Community-based youth organizations",
        "Vulnerable families and social groups"
      ],
      expectedOutcomes: [
        "Direct social wellbeing improvements in partner communities",
        "Active community volunteer network",
        "Strengthened local leadership capacity"
      ]
    },
    image: "/images/youth-empo-2.jpg",
    imageAlt: "IJF Foundation community outreach event",
    iconName: "Heart"
  },
  {
    id: "research-advocacy",
    number: "06",
    title: "Research, Advocacy & Policy Engagement",
    slug: "research-advocacy",
    tagline: "Supporting research and policy dialogues that address critical challenges affecting youth.",
    description: "Sustainable development requires informed policies and evidence-based decision-making. We support policy research, advocacy campaigns, and youth policy dialogues.",
    fullContent: {
      overview: "Systemic change requires bridging the gap between youth experiences on the ground and policy formulators in government. IJF Foundation publishes policy briefs, convenes forums, and advocates for youth-inclusive governance.",
      whyItMatters: "Evidence-backed policy reforms create nationwide systemic improvements that amplify individual program impacts exponentially.",
      keyActivities: [
        "Youth-focused social and economic research studies",
        "Policy dialogue roundtables with policymakers",
        "Evidence-based public advocacy campaigns",
        "Development research publications and policy briefs",
        "Multi-stakeholder coalition building"
      ],
      targetBeneficiaries: [
        "State and national policymakers",
        "Academic researchers and development experts",
        "Youth advocacy networks and student unions",
        "Civil society organizations and NGOs"
      ],
      expectedOutcomes: [
        "Published policy briefs guiding youth initiatives",
        "Constructive dialogue between youth leaders and government",
        "Policy amendments favoring education and youth employment"
      ]
    },
    image: "/images/edu-4.jpg",
    imageAlt: "IJF policy dialogue and advocacy session",
    iconName: "FileText"
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Identify Needs",
    description: "We engage communities directly to understand the real challenges facing youth and underserved populations.",
    image: "/images/sport-13.jpg",
    icon: "/images/005-cogwheel.png"
  },
  {
    step: "02",
    title: "Design Programs",
    description: "We co-design strategic programs that address root causes and create sustainable pathways for change.",
    image: "/images/youth-acq-1.jpg",
    icon: "/images/045-analytics.png"
  },
  {
    step: "03",
    title: "Build Partnerships",
    description: "We collaborate with institutions, donors, and community leaders to maximize reach and impact.",
    image: "/images/civic-1.jpg",
    icon: "/images/024-strategy.png"
  },
  {
    step: "04",
    title: "Deliver & Measure",
    description: "We implement programs with accountability and continuously measure outcomes to drive improvement.",
    image: "/images/edu-9.jpg",
    icon: "/images/008-consultant.png"
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "youth-reached",
    number: "5,000",
    suffix: "+",
    label: "Youth Reached",
    description: "Directly empowered through leadership, mentorship, and civic programs",
    verified: true
  },
  {
    id: "students-supported",
    number: "1,200",
    suffix: "+",
    label: "Students Supported",
    description: "Benefited from education access, bursaries, and academic guidance",
    verified: true
  },
  {
    id: "digitally-trained",
    number: "850",
    suffix: "+",
    label: "Digitally Trained",
    description: "Young individuals equipped with practical technology & digital skills",
    verified: true
  },
  {
    id: "partnerships",
    number: "15",
    suffix: "+",
    label: "Institutional Partners",
    description: "Collaborating schools, NGOs, corporate sponsors & agencies",
    verified: true
  }
];

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "nonprofit",
    name: "Nonprofit Organisations",
    description: "Collaborating on joint grassroots projects, community outreach, and resource sharing.",
    icon: "Globe"
  },
  {
    id: "education",
    name: "Educational Institutions",
    description: "Partnering with schools, colleges, and universities for student scholarship and mentorship programs.",
    icon: "GraduationCap"
  },
  {
    id: "corporate",
    name: "Corporate Partners",
    description: "Fostering corporate social responsibility (CSR) initiatives, skill bootcamps, and career pathways.",
    icon: "Building2"
  },
  {
    id: "government",
    name: "Government Agencies",
    description: "Engaging policy dialogue, youth development frameworks, and civic engagement projects.",
    icon: "Landmark"
  },
  {
    id: "development",
    name: "Development Partners",
    description: "Co-funding and scaling sustainable development programs targeting youth and economic growth.",
    icon: "Sparkles"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "empowering-youth-through-ethical-leadership",
    title: "Empowering Youth Through Ethical Leadership and Civic Engagement",
    excerpt: "How structured mentorship and civic education are preparing Nigeria's young people to drive meaningful transformation in their communities.",
    content: `Ethical leadership is not born overnight — it is nurtured through intention, practice, and community mentorship. At the Isaac Joseph-Fagbemi Foundation, our Youth Leadership & Civic Development Program works directly with secondary and tertiary students across Nigeria to foster a deep sense of responsibility, accountability, and civic duty.

### The Leadership Challenge

Many young Nigerians possess incredible energy, creativity, and ambition. However, without access to structured leadership workshops or ethical mentors, this potential often struggles to find direction. 

Through our series of leadership bootcamps and civic participation roundtables, we create safe environments where young leaders examine real-world governance challenges, learn project management, and collaborate on community solutions.

### Real Community Impact

When young people understand that leadership is service, remarkable change occurs. Participants in our recent cohorts have launched peer academic tutoring circles, environmental cleanup drives, and digital literacy groups in their local neighborhoods.

Sustainable development begins when young citizens realize they hold the key to their community's future.`,
    category: "Youth Development",
    date: "February 18, 2026",
    readTime: "4 min read",
    author: {
      name: "IJF Editorial Team",
      role: "Youth Impact Desk"
    },
    image: "/images/sport-13.jpg",
    imageAlt: "IJF Foundation Youth Leadership Session"
  },
  {
    id: "2",
    slug: "bridging-the-digital-divide-in-underserved-communities",
    title: "Bridging the Digital Divide: Preparing Youth for the Global Economy",
    excerpt: "Practical digital literacy and technology bootcamps are unlocking sustainable livelihoods for youth in underserved regions.",
    content: `In an increasingly interconnected world, digital skills are no longer optional — they are fundamental to economic participation. Yet, thousands of young people across underserved communities lack consistent access to computers or digital training.

### Practical Tech Bootcamps

The IJF Foundation Digital Skills & Technology Empowerment program delivers intensive hands-on modules in basic digital literacy, web design, digital marketing, and remote work tools.

By focusing on practical application rather than abstract theory, participants gain immediate confidence to build online portfolios, offer freelance digital services, or apply for entry-level tech support positions.

### Looking Ahead

Our goal is to expand our mobile tech labs into rural secondary schools, ensuring that geography is never a barrier to technological empowerment.`,
    category: "Technology",
    date: "February 10, 2026",
    readTime: "5 min read",
    author: {
      name: "IJF Technology Desk",
      role: "Program Lead"
    },
    image: "/images/edu-21.jpg",
    imageAlt: "IJF Digital Skills Training Workshop"
  },
  {
    id: "3",
    slug: "investing-in-people-our-sustainable-development-philosophy",
    title: "Investing in People: Our Core Philosophy for Sustainable Development",
    excerpt: "Why true community progress starts with empowering individuals rather than top-down interventions.",
    content: `At the heart of the Isaac Joseph-Fagbemi Foundation lies a simple conviction: sustainable development begins with investing in people. When an individual receives education, leadership tools, and economic skills, the ripple effect extends across their family, peers, and broader community.

### A Grassroots Approach

Rather than imposing pre-packaged solutions, IJF Foundation engages community leaders, parents, and youth directly to identify specific needs. Whether supporting a student with university prep or mentoring an aspiring micro-entrepreneur, our interventions focus on dignity, self-reliance, and long-term sustainability.

We invite individuals, corporate organizations, and development partners to join us as we continue creating pathways of opportunity.`,
    category: "Foundation News",
    date: "January 28, 2026",
    readTime: "3 min read",
    author: {
      name: "Foundation Communications",
      role: "Executive Office"
    },
    image: "/images/youth-empo-1.jpg",
    imageAlt: "IJF Foundation Vision and Community Engagement"
  }
];
