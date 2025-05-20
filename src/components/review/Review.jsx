import { useContext } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { MyThemeContext } from "../../provider/ThemeContext";

const testimonials = [
  
  {
    quote: "AgriSense's pest prediction models helped us reduce crop losses by 40% in the first season alone. The satellite integration is a game-changer!",
    name: "Juan Rodriguez",
    title: "Farm Manager, Costa Verde Agricultura"
  },
  {
    quote: "The real-time soil moisture alerts transformed our irrigation management. We've improved water usage efficiency by 35% across our fields.",
    name: "Emily Chen",
    title: "Agricultural Engineer, Prairie Farms"
  },
  {
    quote: "Implementing AgriSense's API was seamless. We integrated field data with our existing farm management system in just 2 days.",
    name: "Sarah Thompson", title: "CTO, AgroTech Solutions"
},
{
  quote: "The Crop Health analysis helped identify struggling crop areas weeks before visual symptoms appeared. Incredibly valuable for early intervention!",
  name: "Michael O'Connor",
  title: "Head Grower, Green Valley Produce"
},
{
  quote: "Our yield increased by 22% in the first year using AgriSense. The crop health dashboard provides insights we never had before.",
  name: "David Kim",
  title: "Owner, Golden Harvest Farms"
},
];

const Review = () => {
  const { themeClass } = useContext(MyThemeContext);
  const isDarkMode = themeClass === "dark";

  return (
    <section 
      id="testimonials" 
      className={`py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Farmer & Agronomist Experiences
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            See how agricultural professionals are transforming their operations with AgriSense
          </p>
        </div>

        <div className="mb-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
            cardBackground={isDarkMode ? "bg-gray-800" : "bg-white"}
            textColor={isDarkMode ? "text-white" : "text-gray-900"}
          />
        </div>
      </div>
    </section>
  );
};

export default Review;