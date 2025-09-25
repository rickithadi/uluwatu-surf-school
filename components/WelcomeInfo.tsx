export default function WelcomeInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-8">
            Welcome to Uluwatu Surf School Bali
          </h2>
          <div className="text-lg text-storm-gray leading-relaxed space-y-6 max-w-3xl mx-auto">
            <p>
              Born and raised in Uluwatu with 30 years of surfing and 8 years of coaching experience, we deliver the most personalized surf instruction in the Bukit Peninsula. Our local expertise and proven progression methods are reflected in every client&apos;s water experience and skill development.
            </p>
            
            <p>
              From beginner lessons to advanced guiding, we offer comprehensive surf packages including professional video analysis and photography. Our mission is simple: provide safe, passionate, and technical guidance that transforms you into the surfer you aspire to be.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-charcoal mb-4">Session Details</h3>
              <div className="text-left space-y-3">
                <p>• Our session is <strong>1.5 hours in the water</strong> and <strong>20-30 minutes for Land Coaching</strong> (Beginner Class)</p>
                <p>• At the beginning of every session, we will explain the break</p>
                <p>• We provide all Surf Equipment</p>
                <p>• Surfing location and time depends on tide, swell and weather conditions</p>
                <p>• We will always find the right surf spot for each individual person&apos;s level</p>
              </div>
            </div>

            <p className="text-xl font-medium text-charcoal">
              <strong>All prices are per person/per session</strong>
            </p>

            <p className="text-2xl font-light text-charcoal">
              Let&apos;s have fun and improve your surf skills with us 🤙🏻🤙🏻🤙🏻
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}