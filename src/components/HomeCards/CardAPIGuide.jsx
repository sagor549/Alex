import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { BookOpen, Code, Download, PlayCircle, Copy, ExternalLink } from "lucide-react";
import "highlight.js/styles/github-dark.css";
import ReactPlayer from "react-player";


const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const VideoPlayer = ({ url, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden group bg-gray-100 dark:bg-gray-800">
      {!isPlaying && (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 group-hover:bg-black/30 transition-all">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full"
            >
              <PlayCircle size={36} />
            </motion.button>
            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-lg">
              <p className="text-white font-medium">{title}</p>
            </div>
          </div>
          <video 
            src={url}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </>
      )}
      
      {isPlaying && (
        <video 
          src={url} 
          autoPlay 
          controls
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const MarkdownDisplay = ({ content, title }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
          <Code size={18} className="text-primary" />
          <h3 className="font-medium text-black dark:text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={copyToClipboard}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Copy code"
          >
            <Copy size={16} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          className="prose dark:prose-invert max-w-none text-black dark:text-gray-200"
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
};

export default function CardAPIGuide() {
  const [cropPestGuide, setCropPestGuide] = useState("");
  const [coffeeGuide, setCoffeeGuide] = useState("");
  const [activeTab, setActiveTab] = useState("crop-pest");

  const fetchGuides = async () => {
    try {
      const [cropResponse, coffeeResponse] = await Promise.all([
        fetch("/docs/CROP_PEST_ANALYSIS_API_GUIDE.md"),
        fetch("/docs/COFFEE_FARMERS_INFORMATION_API_GUIDE.md")
      ]);
      
      if (!cropResponse.ok || !coffeeResponse.ok) 
        throw new Error("Failed to fetch guides");
        
      const [cropText, coffeeText] = await Promise.all([
        cropResponse.text(),
        coffeeResponse.text()
      ]);
      
      setCropPestGuide(cropText);
      setCoffeeGuide(coffeeText);
    } catch (error) {
      console.error("Error fetching documentation:", error);
    }
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <motion.section
      id="api-guide"
      className="relative py-20 overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerAnimation}
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl -z-10" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          variants={itemAnimation}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            API DOCUMENTATION
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            AgriSense API Integration Guide
          </h2>
          
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl">
            Seamlessly integrate our agricultural data analysis services with our comprehensive API documentation
          </p>
        </motion.div>

<motion.div variants={itemAnimation} className="mb-12">
  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-800">
    <ReactPlayer 
      url="https://www.youtube.com/watch?v=bOam2JNOkUc" 
      title="API Quick Start Guide"
      width="100%"
      height="100%"
      controls
      className="absolute top-0 left-0"
    />
  </div>
</motion.div>

        <motion.div variants={itemAnimation}>
          <div className="flex gap-2 mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit mx-auto">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'crop-pest' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab("crop-pest")}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Crop Pest Analysis</span>
              </div>
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'coffee-farmers' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab("coffee-farmers")}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Farmers</span>
              </div>
            </button>
          </div>

          <div className="space-y-8">
            {activeTab === "crop-pest" ? (
              <>
                <MarkdownDisplay 
                  content={cropPestGuide} 
                  title="Crop Pest Analysis API Documentation" 
                />
                <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
                  <VideoPlayer 
                    url="/videos/CROP_PEST_ANALYSIS_API_GUIDE.mp4" 
                    title="Crop Pest Analysis API Tutorial" 
                  />
                </div>
              </>
            ) : (
              <>
                <MarkdownDisplay 
                  content={coffeeGuide} 
                  title=" Farmers Information API Documentation" 
                />
                <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
                  <VideoPlayer 
                    url="/videos/COFFEE_FARMERS_INFORMATION_API_GUIDE.mp4" 
                    title=" Farmers Information API Tutorial" 
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
}