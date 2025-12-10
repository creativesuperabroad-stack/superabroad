// Mock data for Study Abroad Landing Page

export const mockData = {
  // Hero section
  hero: {
    title: "Study in the UK",
    subtitle: "Transform Your Future with World-Class Education",
    description: "Join 750,000+ international students experiencing excellence at top-ranked UK universities"
  },

  // Why UK benefits
  whyUK: [
    {
      id: 1,
      title: "World-Class Universities",
      description: "3 of the world's top 5 universities and 26 institutions in the global top 200",
      icon: "Award"
    },
    {
      id: 2,
      title: "Shorter Duration",
      description: "Complete your master's in just 1 year, saving time and money",
      icon: "Clock"
    },
    {
      id: 3,
      title: "Post-Study Work Visa",
      description: "2-year work visa after graduation (3 years for PhD students)",
      icon: "Briefcase"
    },
    {
      id: 4,
      title: "Cultural Diversity",
      description: "Multicultural environment with students from 200+ countries",
      icon: "Globe"
    },
    {
      id: 5,
      title: "Global Recognition",
      description: "UK degrees are recognized and respected worldwide by employers",
      icon: "TrendingUp"
    },
    {
      id: 6,
      title: "Research Excellence",
      description: "Leading innovation and research across all academic disciplines",
      icon: "Microscope"
    }
  ],

  // Key statistics
  statistics: [
    { label: "International Students", value: "750,000+", icon: "Users" },
    { label: "Universities in Top 200", value: "26", icon: "Award" },
    { label: "Post-Study Work Visa", value: "2 Years", icon: "Calendar" },
    { label: "Graduate Employment Rate", value: "87.7%", icon: "Briefcase" }
  ],

  // Top Universities
  topUniversities: [
    { rank: 2, name: "Imperial College London", location: "London" },
    { rank: 3, name: "University of Oxford", location: "Oxford" },
    { rank: 5, name: "University of Cambridge", location: "Cambridge" },
    { rank: 9, name: "University College London", location: "London" },
    { rank: 22, name: "The University of Edinburgh", location: "Edinburgh" },
    { rank: 32, name: "The University of Manchester", location: "Manchester" },
    { rank: 38, name: "King's College London", location: "London" },
    { rank: 45, name: "London School of Economics", location: "London" },
    { rank: 55, name: "University of Bristol", location: "Bristol" },
    { rank: 67, name: "University of Warwick", location: "Coventry" }
  ],

  // Popular Courses
  popularCourses: [
    {
      id: 1,
      name: "Business Analytics",
      avgFee: "£18,000 - £29,500",
      duration: "1-2 years",
      avgSalary: "£47,302",
      topUniversities: ["Imperial College London", "University of Manchester", "University of Warwick"],
      careers: ["Data Analyst", "Business Analyst", "Machine Learning Engineer"]
    },
    {
      id: 2,
      name: "Computer Science",
      avgFee: "£20,000 - £43,000",
      duration: "1-3 years",
      avgSalary: "£52,000",
      topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
      careers: ["Software Developer", "Data Scientist", "Systems Architect"]
    },
    {
      id: 3,
      name: "MBA",
      avgFee: "£40,000 - £100,000",
      duration: "1-2 years",
      avgSalary: "£65,000",
      topUniversities: ["London Business School", "Oxford Saïd", "Cambridge Judge"],
      careers: ["Management Consultant", "Investment Banker", "Business Development Manager"]
    },
    {
      id: 4,
      name: "Engineering",
      avgFee: "£14,000 - £50,000",
      duration: "1-4 years",
      avgSalary: "£40,000+",
      topUniversities: ["Imperial College London", "University of Cambridge", "UCL"],
      careers: ["Mechanical Engineer", "Civil Engineer", "Software Engineer"]
    },
    {
      id: 5,
      name: "Medicine",
      avgFee: "£22,000 - £52,000",
      duration: "5-6 years",
      avgSalary: "£90,000",
      topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
      careers: ["Hospital Doctor", "Surgeon", "Medical Researcher"]
    },
    {
      id: 6,
      name: "Finance & Accounting",
      avgFee: "£20,000 - £45,000",
      duration: "1-2 years",
      avgSalary: "£40,000+",
      topUniversities: ["LSE", "University of Oxford", "Imperial College London"],
      careers: ["Financial Analyst", "Investment Manager", "Corporate Finance"]
    }
  ],

  // Cost of Living by City
  costOfLiving: [
    { city: "London", accommodation: "£1,309 - £3,309", food: "£200 - £300", transport: "£160", total: "£1,800 - £3,900" },
    { city: "Manchester", accommodation: "£650 - £1,738", food: "£150 - £250", transport: "£100", total: "£1,000 - £2,200" },
    { city: "Edinburgh", accommodation: "£717 - £1,845", food: "£150 - £250", transport: "£90", total: "£1,050 - £2,300" },
    { city: "Birmingham", accommodation: "£600 - £1,500", food: "£140 - £220", transport: "£85", total: "£950 - £1,900" },
    { city: "Bristol", accommodation: "£763 - £1,717", food: "£160 - £240", transport: "£95", total: "£1,100 - £2,150" }
  ],

  // Scholarships
  scholarships: [
    {
      name: "Chevening Scholarships",
      fundedBy: "UK Government",
      amount: "£18,000 (Full Tuition + Living)",
      level: "Masters",
      deadline: "November 2025"
    },
    {
      name: "Commonwealth Scholarships",
      fundedBy: "UK Government (FCDO)",
      amount: "Full Tuition + Stipend",
      level: "Masters/PhD",
      deadline: "December 2025"
    },
    {
      name: "Gates Cambridge Scholarships",
      fundedBy: "Gates Cambridge Trust",
      amount: "£30,000 - £45,000/year",
      level: "Masters/PhD",
      deadline: "December 2025"
    },
    {
      name: "Rhodes Scholarships",
      fundedBy: "Rhodes Trust",
      amount: "Full Funding",
      level: "Masters/PhD",
      deadline: "October 2025"
    },
    {
      name: "GREAT Scholarships",
      fundedBy: "British Council",
      amount: "£10,000",
      level: "Masters",
      deadline: "Various"
    }
  ],

  // Contact Information
  contactInfo: {
    companyName: "Super Abroad",
    email: "sandeep@superabroad.in",
    phone: "+91 8121226223",
    whatsapp: "+918121226223",
    website: "www.superabroad.in",
    address: "Hyderabad, India"
  },

  // Top Jobs
  topJobs: [
    { role: "Software Engineer", avgSalary: "£63,370", employers: ["Google", "Microsoft", "Amazon"] },
    { role: "Data Scientist", avgSalary: "£52,000", employers: ["Meta", "IBM", "Accenture"] },
    { role: "Financial Analyst", avgSalary: "£65,894", employers: ["J.P. Morgan", "HSBC", "Barclays"] },
    { role: "Management Consultant", avgSalary: "£71,753", employers: ["McKinsey", "BCG", "Deloitte"] },
    { role: "Healthcare Professional", avgSalary: "£90,000+", employers: ["NHS", "Private Hospitals"] },
    { role: "Marketing Manager", avgSalary: "£55,000", employers: ["Unilever", "P&G", "Google"] }
  ],

  // FAQs
  faqs: [
    {
      question: "How long does it take to get a UK student visa?",
      answer: "The UK student visa processing time is typically 3 weeks from your biometrics appointment. However, it's recommended to apply 3 months before your course starts to allow for any delays."
    },
    {
      question: "Can I work while studying in the UK?",
      answer: "Yes! International students can work up to 20 hours per week during term time and full-time during holidays. After graduation, you're eligible for a 2-year post-study work visa (3 years for PhD graduates)."
    },
    {
      question: "What is the cost of studying in the UK?",
      answer: "Tuition fees range from £10,000 to £38,000 per year depending on the course and university. Living costs are approximately £12,000-£15,600 annually. London is more expensive than other UK cities."
    },
    {
      question: "Do I need IELTS to study in the UK?",
      answer: "Yes, most UK universities require proof of English proficiency through IELTS, TOEFL, or PTE. The minimum score varies by university and course, typically IELTS 6.0-7.0 overall."
    },
    {
      question: "Are scholarships available for international students?",
      answer: "Yes! The UK offers numerous scholarships including Chevening, Commonwealth, Gates Cambridge, and university-specific scholarships. Awards range from partial tuition coverage to fully-funded packages."
    },
    {
      question: "Can I bring my family to the UK?",
      answer: "Yes, if you're studying a postgraduate course (level 7 or above) lasting 9 months or longer, you can bring your spouse/partner and children as dependents on your student visa."
    },
    {
      question: "How do I apply to UK universities?",
      answer: "Most undergraduate applications go through UCAS (Universities and Colleges Admissions Service). Postgraduate applications are usually made directly to the university. Application deadlines vary, typically starting in September for the following year."
    },
    {
      question: "What are the requirements for a UK student visa?",
      answer: "You need: 1) CAS from your university, 2) Valid passport, 3) Proof of funds (tuition + £1,334/month for 9 months outside London, £1,023/month inside London), 4) English language test results, 5) TB test certificate (if applicable)."
    }
  ],

  // Form submission mock
  submitLead: (data) => {
    // Store in localStorage for now
    const leads = JSON.parse(localStorage.getItem('studyAbroadLeads') || '[]');
    leads.push({
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('studyAbroadLeads', JSON.stringify(leads));
    return { success: true, message: "Thank you! We'll contact you within 24 hours." };
  }
};
