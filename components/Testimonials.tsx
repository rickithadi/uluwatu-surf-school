import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-20 bg-clean-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-charcoal mb-4">
            Student Results
          </h2>
          <p className="text-lg text-storm-gray max-w-2xl mx-auto">
            Professional instruction focused on technique and safety. 
            Real progress measured through competence, not just confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Quote */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg relative">
            <Quote className="h-8 w-8 text-deep-ocean mb-4" />
            <blockquote className="text-xl text-charcoal leading-relaxed mb-6">
              &ldquo;Scotty&rsquo;s technical approach transformed my surfing in just three sessions. 
              His video analysis showed exactly what I was doing wrong with my bottom turn. 
              The improvement was immediate and measurable.&rdquo;
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center">
                <span className="text-clean-white font-medium text-sm">MK</span>
              </div>
              <div>
                <div className="font-medium text-charcoal">M. Kim</div>
                <div className="text-sm text-storm-gray">Intermediate Surfer, Singapore</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-deep-ocean text-deep-ocean" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Review Widget */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">⭐</div>
              <div>
                <div className="font-semibold text-charcoal">4.9/5</div>
                <div className="text-sm text-storm-gray">Google Reviews</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-charcoal">A. Rodriguez</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-deep-ocean text-deep-ocean" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-storm-gray">
                  &ldquo;Professional instruction. Clear technique focus. Recommend.&rdquo;
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-charcoal">J. Thompson</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-deep-ocean text-deep-ocean" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-storm-gray">
                  &ldquo;Video analysis was game-changing. Worth the investment.&rdquo;
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-charcoal">L. Chen</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-deep-ocean text-deep-ocean" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-storm-gray">
                  &ldquo;Safety-first approach. Excellent local knowledge.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Instagram Testimonial */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-lg">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IG</span>
                </div>
                <div>
                  <div className="font-medium text-charcoal">@sarah_surfs_indo</div>
                  <div className="text-sm text-storm-gray">Verified • 3 days ago</div>
                </div>
              </div>
              
              <p className="text-charcoal mb-3 leading-relaxed">
                &ldquo;Just completed my private + tech session with Scotty 🏄‍♀️ The difference 
                in my wave selection and timing is incredible. Finally understanding 
                how to read Uluwatu properly. Professional coaching that actually delivers results.&rdquo;
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-storm-gray">
                <span>❤️ 127 likes</span>
                <span>💬 23 comments</span>
                <span className="text-deep-ocean font-medium">#uluwatusurfschool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}