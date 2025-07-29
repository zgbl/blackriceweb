import React from 'react';
import { Users, GraduationCap, Trophy, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Users,
      title: t('forIndividualPlayers'),
      description: t('individualPlayersDesc'),
      features: [t('aiMoveAnalysis'), t('personalCoaching'), t('progressTracking'), t('communityAccess')],
      cta: t('startPlaying'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: t('forSchoolsEducation'),
      description: t('schoolsEducationDesc'),
      features: [t('curriculumManagement'), t('studentProgress'), t('classroomTools'), t('assessmentSystem')],
      cta: t('learnMore'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Trophy,
      title: t('forTournaments'),
      description: t('tournamentsDesc'),
      features: [t('tournamentManagement'), t('liveStreaming'), t('automatedPairing'), t('realTimeScoring')],
      cta: t('hostTournament'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      title: t('forOrganizations'),
      description: t('organizationsDesc'),
      features: [t('memberManagement'), t('customBranding'), t('analyticsDashboard'), t('apiIntegration')],
      cta: t('contactSales'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('solutionsForEvery')}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('goPlayer')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('solutionsDescription')}
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon and title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="group/btn inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                {solution.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('needCustomSolution')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('customSolutionDesc')}
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
              {t('contactOurTeam')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;