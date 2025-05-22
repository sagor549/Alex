import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn, zoomIn } from "../../utils/motion";

export default function CardHero() {
  return (
    <motion.section
      id="home"
      className="relative z-40 overflow-hidden pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px]"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-3 lg:w-1/2">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="mx-auto mb-12 max-w-[530px] text-center lg:ml-0 lg:mb-0 lg:text-left"
            >
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="inline-block mb-5 rounded-lg bg-primary bg-opacity-10 px-4 py-2"
              >
                <span className="font-medium text-primary">Smart Agriculture Solutions</span>
              </motion.div>

              <motion.h1
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="mb-5 font-heading text-3xl font-bold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px] bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              >
                AgriSense
              </motion.h1>

              <motion.p
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="mb-8 text-lg text-dark-text leading-relaxed"
              >
                The Future of Farming is Here
              </motion.p>

              <div className="space-y-4 mb-12">
                {/* Feature Cards with Enhanced Animation */}
                {[
                  {
                    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                    title: 'AgriSense App',
                    desc: 'Advanced precision agriculture for  growing'
                  },
                  {
                    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
                    title: 'AgriSense API',
                    desc: 'Risk assessment based on environmental data'
                  },
                  {
                    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
                    title: 'Coffee Cherry Detection',
                    desc: 'AI-powered cherry counting and ripeness assessment'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "tween", 0.5 + index * 0.1, 1)}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative flex items-center justify-between rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-950/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.title}</h2>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-primary/20 dark:bg-gray-800">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform group-hover:translate-x-1">
                        <path d="M1.16663 7.00008H12.8333M12.8333 7.00008L6.99996 1.16675M12.8333 7.00008L6.99996 12.8334" 
                              stroke="#0070F3" strokeWidth="2" 
                              className="group-hover:stroke-primary"/>
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Buttons with Proper Spacing */}
              <motion.div
                variants={fadeIn("up", "tween", 0.8, 1)}
                className="mb-6 space-y-4"
              >
                {/* Android Download Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/drive/folders/1o8Mu7e3SCarKbgPaTPfr4keEgNsKgTkA?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full max-w-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-primary backdrop-blur-3xl dark:bg-gray-950">
                    <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download AgriSense On Android (Free)
                  </span>
                </motion.a>

                {/* iOS AgriSense Download Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://apps.apple.com/hn/app/agrisense-premium/id6738309189?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full max-w-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-primary backdrop-blur-3xl dark:bg-gray-950">
                    <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download AgriSense On iOS (Free)
                  </span>
                </motion.a>

                {/* iOS Coffee Cherry Counter Download Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://apps.apple.com/hn/app/coffee-cherry-counter/id6738309350?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full max-w-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-primary backdrop-blur-3xl dark:bg-gray-950">
                    <svg className="h-5 w-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download Coffee Cherry Counter iOS (Free)
                  </span>
                </motion.a>

                <p className="ml-4 mt-3 text-xs text-gray-500 dark:text-gray-400">Open twice to activate location services</p>
              </motion.div>

              {/* Pro Access Section */}
              <motion.div
                variants={fadeIn("up", "tween", 0.9, 1)}
                className="flex flex-wrap items-center justify-center lg:justify-start mt-6"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdrnrzYqXkg_dKKCxyxYVoP8IFDDi5lKIx7z9sGAKUfRu1Crg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-12 overflow-hidden rounded-full bg-primary px-6 py-2 hover:bg-primary/90"
                >
                  <div className="absolute -inset-[20px] bg-primary/10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] group-hover:animate-[spotlight_1s_ease_forwards]" />
                  <span className="relative flex items-center justify-center text-sm font-medium text-white">
                    Get Pro Access
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75"/>
                    </svg>
                  </span>
                </motion.a>
                
                <div className="ml-4 flex gap-2 flex-wrap hidden md:block">
                  {['Cherry Detection', 'Premium Features'].map((text, index) => (
                    <motion.div
                      key={index}
                      variants={zoomIn(0.5 + index * 0.1, 1)}
                      className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:border-primary/30 dark:bg-primary/10"
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40 bg-noise-pattern"></div>
      
      {/* Top Right Gradient Effect */}
      <div className="absolute top-0 right-0 -z-10">
        <svg
          width="1356"
          height="860"
          viewBox="0 0 1356 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_2181)">
            <rect
              x="450.088"
              y="-126.709"
              width="351.515"
              height="944.108"
              transform="rotate(-34.6784 450.088 -126.709)"
              fill="url(#paint0_linear_201_2181)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2181"
              x="0.0878906"
              y="-776.711"
              width="1726.24"
              height="1876.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2181"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2181"
              x1="417.412"
              y1="59.4717"
              x2="966.334"
              y2="603.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Left Gradient Effect */}
      <div className="absolute bottom-0 left-0 -z-10">
        <svg
          width="1469"
          height="498"
          viewBox="0 0 1469 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_201_2182)">
            <rect
              y="450"
              width="1019"
              height="261"
              fill="url(#paint0_linear_201_2182)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2182"
              x="-450"
              y="0"
              width="1919"
              height="1161"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_201_2182"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2182"
              x1="-94.7239"
              y1="501.47"
              x2="-65.8058"
              y2="802.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        {/* Animated Blob Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-20 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur-3xl opacity-30 dark:opacity-20"
        ></motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-blue-400/15 rounded-full blur-3xl opacity-30 dark:opacity-20"
        ></motion.div>
      </motion.div>
    </motion.section>
  );
}