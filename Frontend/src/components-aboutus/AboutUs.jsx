import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import BlurText from "./BlurText"

export default function AboutUs() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(true)
  const [isWhyChooseExpanded, setIsWhyChooseExpanded] = useState(true)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false)

  const aboutRef = useRef(null)
  const whyChooseRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setIsAboutVisible(true)
          }
          if (entry.target === whyChooseRef.current && entry.isIntersecting) {
            setIsWhyChooseVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (whyChooseRef.current) observer.observe(whyChooseRef.current)

    return () => observer.disconnect()
  }, [])

  const handleAnimationComplete = () => {
    console.log("Animation completed!")
  }

  return (
    <div className="w-full">
      {/* About Us Section */}
      <section
        ref={aboutRef}
        className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-16 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isAboutVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dog and cat together"
                  className="w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Text - Right Side */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isAboutVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <BlurText
                  text="About Us"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl font-bold"
                />
                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Toggle about section"
                >
                  {isAboutExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              <div className="h-1 w-20 bg-white mb-8"></div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isAboutExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed hover:text-pink-100 transition-colors duration-300 cursor-default">
                    At Ecora Bioceuticals Pvt. Ltd, we are dedicated to enhancing the lives of pets and their pet
                    parents...
                  </p>
                  <p className="text-lg leading-relaxed hover:text-pink-100 transition-colors duration-300 cursor-default">
                    Our products are meticulously crafted with natural ingredients...
                  </p>
                  <p className="text-lg leading-relaxed hover:text-pink-100 transition-colors duration-300 cursor-default font-medium">
                    From boosting immunity to all health needs, we are here to help your pets thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="bg-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text - Left Side */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isWhyChooseVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <BlurText
                  text="Why Choose Us"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl font-bold text-pink-600"
                />
                <button
                  onClick={() => setIsWhyChooseExpanded(!isWhyChooseExpanded)}
                  className="p-2 rounded-full hover:bg-pink-100 transition-colors duration-200"
                  aria-label="Toggle why choose us section"
                >
                  {isWhyChooseExpanded ? (
                    <ChevronUp className="w-6 h-6 text-pink-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-pink-600" />
                  )}
                </button>
              </div>
              <div className="h-1 w-20 bg-pink-600 mb-8"></div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isWhyChooseExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-pink-600 transition-colors duration-300 cursor-default">
                    Choosing Ecora Bioceuticals Pvt. Ltd means choosing a partner...
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-pink-600 transition-colors duration-300 cursor-default">
                    We work with veterinarians, nutritionists, and scientists...
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 hover:text-pink-600 transition-colors duration-300 cursor-default font-medium">
                    With us, you can trust every product is made with love and expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isWhyChooseVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dog and cat on couch"
                  className="w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
