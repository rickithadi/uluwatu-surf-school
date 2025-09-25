'use client'

import Image from 'next/image'
import { Trophy, Shield, Users, Target } from 'lucide-react'
import { StaggerChildren } from './animations/StaggerChildren'

const features = [
  {
    icon: Trophy,
    title: 'Local Expertise',
    description: 'Born and raised in Uluwatu, our instructors know every break, current, and secret spot.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'ISA certified instructors with rescue training and top-quality safety equipment.'
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Maximum 4 students per instructor ensures personalized attention and faster progress.'
  },
  {
    icon: Target,
    title: 'All Levels Welcome',
    description: 'From complete beginners to competition prep, we customize every session.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <StaggerChildren>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Choose 
                <span className="text-black">
                  {' '}Uluwatu Surf School
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                We&apos;re not just another surf school. We&apos;re your gateway to mastering 
                one of the world&apos;s most challenging and rewarding surf breaks.
              </p>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="w-8 h-8 text-black" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerChildren>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&con=30"
                alt="Professional surf instruction at Uluwatu"
                fill
                className="object-cover contrast-150"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}