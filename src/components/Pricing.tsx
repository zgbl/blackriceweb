import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for casual players',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        'Basic AI analysis',
        'Up to 10 games per month',
        'Community access',
        'Mobile app access',
        'Basic statistics'
      ],
      cta: 'Start free trial',
      popular: false
    },
    {
      name: 'Pro',
      description: 'For serious Go players',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Advanced AI analysis',
        'Unlimited games',
        'Live streaming tools',
        'Detailed analytics',
        'Priority support',
        'Tournament access',
        'Custom training plans'
      ],
      cta: 'Start free trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For organizations & schools',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Everything in Pro',
        'Multi-user management',
        'Custom branding',
        'API access',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your Go journey. All plans include a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mt-2">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              24/7 support
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;