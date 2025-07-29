import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    home: '首页',
    product: '产品',
    solutions: '解决方案',
    about: '关于我们',
    blog: '博客',
    careers: '招聘',
    contact: '联系我们',
    helpCenter: '帮助中心',
    enterprise: '企业版',
    partners: '合作伙伴',
    login: '登录',
    signup: '注册',
    getDemo: '获取演示',
    
    // Hero Section
    heroTitle: '专为围棋策略打造的唯一AI平台',
    heroSubtitle: '停止盲目下棋。BlackRice将传统围棋转变为智能体验——专注于你的策略，致力于你的提升，推动你的成长。',
    getStarted: '开始使用',
    watchDemo: '观看演示',
    joinPlayers: '加入50,000+棋手',
    
    // Trust indicators
    activePlayers: '活跃棋手',
    gamesAnalyzed: '分析对局',
    uptime: '在线时间',
    trustedBy: '受到全球围棋棋手信赖',
    
    // Product Page
    productHeroTitle: 'AI驱动的围棋平台',
    productHeroSubtitle: '体验我们为各级棋手设计的综合AI平台的围棋未来。',
    startFreeTrial: '开始免费试用',
    everythingYouNeed: '掌握围棋所需的一切',
    platformDescription: '我们的平台结合尖端AI技术与直观设计，提供终极围棋体验。',
    
    // Features
    realTimeAnalysis: '实时AI分析',
    realTimeAnalysisDesc: '通过我们先进的AI引擎获得即时反馈，实时分析棋局位置。',
    smartHardware: '智能硬件集成',
    smartHardwareDesc: '将您的实体围棋棋盘与我们的智能传感器连接，实现无缝数字集成。',
    liveStreaming: '直播与解说',
    liveStreamingDesc: '通过AI驱动的解说和分析为您的观众直播您的对局。',
    
    // Solutions
    solutionsForEvery: '为每个',
    goPlayer: '围棋棋手提供解决方案',
    solutionsDescription: '无论您是学习基础知识的初学者还是组织锦标赛的专业人士，我们都有适合您需求的完美解决方案。',
    forIndividualPlayers: '个人棋手',
    individualPlayersDesc: '通过AI驱动的分析、个性化训练和详细的表现洞察提升您的棋艺。',
    forSchoolsEducation: '学校教育',
    schoolsEducationDesc: '全面的围棋教育平台，包含课程、学生管理和进度跟踪。',
    forTournaments: '锦标赛',
    tournamentsDesc: '专业锦标赛管理，包含直播、自动配对和实时结果。',
    forOrganizations: '组织机构',
    organizationsDesc: '为俱乐部、协会和专业组织提供企业级围棋平台。',
    
    // Solution features
    aiMoveAnalysis: 'AI着法分析',
    personalCoaching: '个人指导',
    progressTracking: '进度跟踪',
    communityAccess: '社区访问',
    curriculumManagement: '课程管理',
    studentProgress: '学生进度',
    classroomTools: '课堂工具',
    assessmentSystem: '评估系统',
    tournamentManagement: '锦标赛管理',
    automatedPairing: '自动配对',
    realTimeScoring: '实时计分',
    memberManagement: '会员管理',
    customBranding: '定制品牌',
    analyticsDashboard: '分析仪表板',
    apiIntegration: 'API集成',
    
    // Solution CTAs
    startPlaying: '开始下棋',
    hostTournament: '举办锦标赛',
    contactSales: '联系销售',
    needCustomSolution: '需要定制解决方案？',
    customSolutionDesc: '我们的团队可以与您合作，创建满足您特定需求的定制围棋平台。',
    contactOurTeam: '联系我们的团队',
    
    // About
    aboutTitle: '关于BlackRice',
    aboutDescription: 'BlackRice致力于将传统围棋文化与现代科技完美融合，通过创新的软硬件产品，为围棋爱好者提供更好的学习、对弈和交流体验。',
    ourMission: '我们的使命',
    missionText: '推动围棋文化的数字化传承，让更多人能够便捷地学习和享受围棋的魅力。',
    ourVision: '我们的愿景',
    visionText: '成为全球领先的围棋科技公司，构建完整的围棋生态系统。',
    
    // Blog
    blogTitle: 'BlackRice博客',
    blogSubtitle: '来自AI驱动围棋世界的见解、策略和故事',
    latestArticles: '最新文章',
    stayUpdated: '与BlackRice保持同步',
    readMore: '阅读更多',
    subscribe: '订阅',
    readFullArticle: '阅读完整文章',
    
    // Careers
    joinOurMission: '加入我们的使命',
    careersSubtitle: '帮助我们用尖端AI技术革命古老的围棋游戏',
    whyWorkWithUs: '为什么与我们合作？',
    teamDescription: '我们正在与充满激情的工程师、设计师和策略师团队一起构建围棋的未来。',
    collaborativeTeam: '协作团队',
    collaborativeTeamDesc: '与分享您对创新和卓越热情的才华横溢的个人一起工作。',
    workLifeBalance: '工作生活平衡',
    workLifeBalanceDesc: '灵活的工作时间、远程工作选择和无限假期，帮助您做出最好的工作。',
    growthOpportunities: '成长机会',
    growthOpportunitiesDesc: '在快速发展的公司中持续学习、导师计划和职业发展。',
    openPositions: '职位空缺',
    findOpportunity: '找到您的下一个机会',
    applyNow: '立即申请',
    noFitQuestion: '没有找到完美匹配？',
    sendResumeDesc: '我们一直在寻找有才华的个人。发送您的简历并告诉我们您希望如何贡献。',
    sendResume: '发送您的简历',
    
    // Contact
    buildFutureTogether: '让我们一起构建未来',
    contactDescription: '无论您是投资者、潜在合作伙伴，还是只是对我们正在构建的东西感到好奇，我们都很乐意听到您的声音。',
    generalInquiries: '一般咨询',
    investmentOpportunities: '投资机会',
    followUs: '关注我们',
    sendMessage: '发送消息',
    firstName: '名',
    lastName: '姓',
    email: '邮箱',
    subject: '主题',
    message: '消息',
    messagePlaceholder: '告诉我们您的咨询...',
    generalInquiry: '一般咨询',
    investmentOpportunity: '投资机会',
    partnership: '合作伙伴关系',
    pressMedia: '新闻媒体',
    other: '其他',
    
    // Footer
    allRightsReserved: '版权所有',
    
    // Common
    comingSoon: '即将推出',
    learnMore: '了解更多',
    enterEmail: '输入您的邮箱',
  },
  en: {
    // Navigation
    home: 'Home',
    product: 'Product',
    solutions: 'Solutions',
    about: 'About',
    blog: 'Blog',
    careers: 'Careers',
    contact: 'Contact',
    helpCenter: 'Help center',
    enterprise: 'Enterprise',
    partners: 'Partners',
    login: 'Log in',
    signup: 'Sign up',
    getDemo: 'Get demo',
    
    // Hero Section
    heroTitle: 'The only AI platform built for Weiqi strategy',
    heroSubtitle: 'Stop playing blind. BlackRice turns traditional Weiqi into an intelligent experience—obsessed with your strategy, devoted to your improvement, fueling your growth.',
    getStarted: 'Get started',
    watchDemo: 'Watch demo',
    joinPlayers: 'Join 50,000+ players',
    
    // Trust indicators
    activePlayers: 'Active players',
    gamesAnalyzed: 'Games analyzed',
    uptime: 'Uptime',
    trustedBy: 'Trusted by Weiqi players worldwide',
    
    // Product Page
    productHeroTitle: 'AI-Powered Weiqi Platform',
    productHeroSubtitle: 'Experience the future of Weiqi with our comprehensive AI platform designed for players of all levels.',
    startFreeTrial: 'Start Free Trial',
    everythingYouNeed: 'Everything You Need to Master Weiqi',
    platformDescription: 'Our platform combines cutting-edge AI technology with intuitive design to provide the ultimate Weiqi experience.',
    
    // Features
    realTimeAnalysis: 'Real-time AI Analysis',
    realTimeAnalysisDesc: 'Get instant feedback on your moves with our advanced AI engine that analyzes positions in real-time.',
    smartHardware: 'Smart Hardware Integration',
    smartHardwareDesc: 'Connect your physical Weiqi board with our smart sensors for seamless digital integration.',
    liveStreaming: 'Live Streaming & Commentary',
    liveStreamingDesc: 'Stream your games live with AI-powered commentary and analysis for your audience.',
    
    // Solutions
    solutionsForEvery: 'Solutions for every',
    goPlayer: 'Weqi(Go) player',
    solutionsDescription: 'Whether you\'re a beginner learning the basics or a professional organizing tournaments, we have the perfect solution for your needs.',
    forIndividualPlayers: 'For Individual Players',
    individualPlayersDesc: 'Improve your game with AI-powered analysis, personalized training, and detailed performance insights.',
    forSchoolsEducation: 'For Schools & Education',
    schoolsEducationDesc: 'Comprehensive Go education platform with curriculum, student management, and progress tracking.',
    forTournaments: 'For Tournaments',
    tournamentsDesc: 'Professional tournament management with live streaming, automated pairing, and real-time results.',
    forOrganizations: 'For Organizations',
    organizationsDesc: 'Enterprise-grade Go platform for clubs, associations, and professional organizations.',
    
    // Solution features
    aiMoveAnalysis: 'AI move analysis',
    personalCoaching: 'Personal coaching',
    progressTracking: 'Progress tracking',
    communityAccess: 'Community access',
    curriculumManagement: 'Curriculum management',
    studentProgress: 'Student progress',
    classroomTools: 'Classroom tools',
    assessmentSystem: 'Assessment system',
    tournamentManagement: 'Tournament management',
    automatedPairing: 'Automated pairing',
    realTimeScoring: 'Real-time scoring',
    memberManagement: 'Member management',
    customBranding: 'Custom branding',
    analyticsDashboard: 'Analytics dashboard',
    apiIntegration: 'API integration',
    
    // Solution CTAs
    startPlaying: 'Start playing',
    hostTournament: 'Host tournament',
    contactSales: 'Contact sales',
    needCustomSolution: 'Need a custom solution?',
    customSolutionDesc: 'Our team can work with you to create a tailored Go platform that meets your specific requirements.',
    contactOurTeam: 'Contact our team',
    
    // About
    aboutTitle: 'About BlackRice',
    aboutDescription: 'BlackRice is dedicated to perfectly combining traditional Weiqi culture with modern technology, providing better learning, gaming, and communication experiences for Weiqi enthusiasts through innovative software and hardware products.',
    ourMission: 'Our Mission',
    missionText: 'To promote the digital inheritance of Weiqi culture and make it easier for more people to learn and enjoy the charm of Weiqi.',
    ourVision: 'Our Vision',
    visionText: 'To become the world\'s leading Weiqi technology company and build a complete Weiqi ecosystem.',
    
    // Blog
    blogTitle: 'BlackRice Blog',
    blogSubtitle: 'Insights, strategies, and stories from the world of AI-powered Weiqi',
    latestArticles: 'Latest Articles',
    stayUpdated: 'Stay Updated with BlackRice',
    readMore: 'Read More',
    subscribe: 'Subscribe',
    readFullArticle: 'Read Full Article',
    
    // Careers
    joinOurMission: 'Join Our Mission',
    careersSubtitle: 'Help us revolutionize the ancient game of Weiqi with cutting-edge AI technology',
    whyWorkWithUs: 'Why Work at BlackRice?',
    teamDescription: 'We\'re building the future of Weiqi with a passionate team of engineers, designers, and strategists.',
    collaborativeTeam: 'Collaborative Team',
    collaborativeTeamDesc: 'Work with talented individuals who share your passion for innovation and excellence.',
    workLifeBalance: 'Work-Life Balance',
    workLifeBalanceDesc: 'Flexible hours, remote work options, and unlimited PTO to help you do your best work.',
    growthOpportunities: 'Growth Opportunities',
    growthOpportunitiesDesc: 'Continuous learning, mentorship programs, and career advancement in a fast-growing company.',
    openPositions: 'Open Positions',
    findOpportunity: 'Find your next opportunity with us',
    applyNow: 'Apply Now',
    noFitQuestion: 'Don\'t See a Perfect Fit?',
    sendResumeDesc: 'We\'re always looking for talented individuals. Send us your resume and tell us how you\'d like to contribute.',
    sendResume: 'Send Us Your Resume',
    
    // Contact
    buildFutureTogether: 'Let\'s build the future together',
    contactDescription: 'Whether you\'re an investor, potential partner, or just curious about what we\'re building, we\'d love to hear from you.',
    generalInquiries: 'General Inquiries',
    investmentOpportunities: 'Investment Opportunities',
    followUs: 'Follow Us',
    sendMessage: 'Send us a message',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    messagePlaceholder: 'Tell us about your inquiry...',
    generalInquiry: 'General Inquiry',
    investmentOpportunity: 'Investment Opportunity',
    partnership: 'Partnership',
    pressMedia: 'Press & Media',
    other: 'Other',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
    
    // Common
    comingSoon: 'Coming Soon',
    learnMore: 'Learn More',
    enterEmail: 'Enter your email',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage on initialization
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};