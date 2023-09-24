import { useEffect, useState } from "react";
import { Box, Typography, Modal, ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { RoundaboutLeftOutlined } from "@mui/icons-material";
import './ArticlePage.css';
import Article from './components/Article.js';
import { useOutletContext } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const image2 = require("./googleArticle.jpg");
const image3 = require("./nasdaq.jpg");
const image4 = require("./founder.jpg");
const image5 = require("./nerualink.jpg");
const image6 = require("./georgiatech.jpg");


//  const image3 = require('')
const articles1 = [
  {
    title: "Tesla's Dojo & AI Ambitions",
    creator: "Wired",
    summary: "Morgan Stanley's report predicts that Tesla's supercomputer, Dojo, may significantly boost its value due to advancements in autonomous driving and software. However, there are doubts about the extent of these advancements, given the challenges in AI and autonomous technology.",
    bigSummary: "Morgan Stanley claims that Tesla's Dojo could add $500 billion to the company's valuation, advancing autonomous driving, and branching into other sectors. While Tesla's machine learning approach, similar to OpenAI's ChatGPT, may promise great potential, the actual developments in autonomous driving have yet to meet expectations. Despite AI advancements, making critical leaps in autonomous driving is unpredictable. Tesla's autonomous tech isn't as simple as ChatGPT, and scaling for robotic sensing and reasoning differs from text-based learning. It's uncertain if Tesla's AI insights can be applied beyond driving. Experts remain divided on how much data and computing are enough for genuine AI breakthroughs.",
    image: 'https://media.wired.com/photos/6508f6bc8078e28160b2cfab/191:100/w_1280,c_limit/AI-Will-Do-Boring-Chores-Business-1329973465.jpg',
    url: 'https://www.wired.com/story/fast-forward-tesla-dojo-supercomputer-elon-musk-ai-revolution/',
    tags: ["Software Engineer", "Data Science"]
  },
  {
    title: "Detecting Advanced Web Bots",
    creator: "Nikolai Tschacher",
    summary: "Nikolai Tschacher explores the methods used to distinguish advanced web bots from human users. The article delves into the intricacies of bot behavior, their footprint, and the constant tug-of-war between bot programmers and anti-bot measures.",
    bigSummary: "Nikolai Tschacher delves into identifying web bots that mimic human web activities. While bots often drive innovation, they also pose threats, leading to a persistent game between bot creators and anti-bot measures. Advanced bots often interact using HTTP/HTTPS protocols, created for tasks from mundane automations to cyber crimes. The key to detecting bots lies in five dimensions: 1) Browser Fingerprinting – identifying unique browser configurations, 2) Networking – IP reputation and TCP/IP fingerprinting, 3) Automation Frameworks – highlighting bot-hosting setups, 4) Hosting Infrastructure – discerning bot operations via resources allocation, and 5) Behavioral Fingerprinting – analyzing user behavior patterns. The challenge remains in distinguishing advanced bot activities from human behaviors.",
    image: 'https://incolumitas.com/theme/img/me-on-chasseral.webp',
    tags: ["Algorithm Design"],
    url: "https://incolumitas.com/pages/BotOrNot/"
  },
  {
    title: "Navigating Generative AI in Business",
    creator: "VentureBeat",
    summary: "Generative AI is transforming businesses by enhancing customer experience and driving growth. Industry leaders discuss its challenges, misconceptions, and best practices for optimal deployment.",
    bigSummary: "Generative AI is reshaping businesses, offering improved customer experiences and growth opportunities. While it brings innovation, challenges arise due to the unpredictability of large language models (LLMs). Jon Noronha of Gamma suggests rethinking traditional software development for scalable LLM apps. Irfan Ganchi from Oportun emphasizes the need for input-output filters and human collaboration with generative AI. Shailesh Nalawadi from Sendbird points out that LLMs aren't deterministic, and their output tracing is complex. Misconceptions include viewing LLMs as real-time databases and fearing AI's automation capabilities. Successful implementation requires a deliberate strategy, measuring performance infrastructure, and selecting suitable problems for AI application.",
    image: "https://venturebeat.com/wp-content/uploads/2023/09/AdobeStock_268974526.jpeg?w=1200&strip=all",
    tags: ["Software Engineer"],
    url: "https://venturebeat.com/ai/generative-ai-in-production-rethinking-development-and-embracing-best-practices/"
  },
  {
    title: "Caesars Pays Ransom to Scattered Spider Hackers",
    creator: "Engadget",
    summary: "Caesars Entertainment paid a hefty ransom to the Scattered Spider hacker group to prevent a data leak. This comes after MGM Resorts faced a cyber attack from the same group.",
    bigSummary: "Caesars Entertainment reportedly paid tens of millions to the Scattered Spider hacker group to prevent a data leak. The group, which has members as young as 19 in the US and UK, leveraged social engineering techniques to bypass corporate security. Targeting Caesars since August 27th, they accessed the company via an external vendor. This marks the second Las Vegas casino group breach in recent times, following MGM Resorts' cyber outage. Scattered Spider, active since May 2022, typically targets telecoms and business outsourcing firms, impersonating IT staff to exploit vulnerabilities. While they were implicated in MGM's attack, another group, ALPHV/BlackCat, also claimed responsibility. MGM, however, refused to pay the ransom.",
    image: "https://s.yimg.com/ny/api/res/1.2/uxiAd6cwe99iRSOJz7U26A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/b1fb6f90-52ce-11ee-a7ed-f5ad6dd5c1fc",
    tags: ["Computer Science"],
    url: "https://www.engadget.com/caesars-reportedly-paid-millions-to-stop-hackers-releasing-its-data-081052820.html"
  }, {
    title: "India's Aditya-L1 Solar Mission Takes Off",
    summary: "India's Aditya-L1 mission, launched recently, has begun its study of Earth-surrounding particles to understand space weather. The mission is India's maiden attempt to observe solar activities and their effects on Earth.",
    bigSummary: "India's Aditya-L1, launched on September 2, has started gathering data on particles around Earth to study space weather effects. Positioned about 50,000 km from Earth, its Supra Thermal & Energetic Particle Spectrometer (STEPS) was activated, as announced by the Indian Space Research Organization (ISRO). The probe aims for the Earth-Sun Lagrange Point 1, a stable point around 1.5 million km away. The data from STEPS will aid in understanding solar winds and space weather variances. Aditya-L1 is equipped with seven instruments to examine solar dynamics and its impact on the interplanetary medium. This mission follows India's successful Chandrayaan-3 lunar landing in August.",
    image: "https://s.yimg.com/ny/api/res/1.2/uxiAd6cwe99iRSOJz7U26A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/b1fb6f90-52ce-11ee-a7ed-f5ad6dd5c1fc",
    creator: "Gizmodo",
    tags: ["Data Science"]
  },
  {
    title: "AI Boom Slows in China",
    creator: "Wired",
    summary: "Chinese AI startups are facing challenges due to regulatory uncertainties, chip shortages, and economic downturns. Many are now focusing on efficiency improvements rather than groundbreaking innovations.",
    bigSummary: "China's AI startups, once part of a major growth trend, are now grappling with hurdles like strict regulations, a dearth of computer chips, and an economic slowdown. Startup founders, like Zhang Haiwei, are finding it almost impossible to build their own large language models, given the dominance of tech giants such as Baidu. Instead, many are leveraging models like OpenAI’s. The competitive landscape has become more about minimal efficiency gains than revolutionary breakthroughs. Additionally, challenges in collecting vast data due to China's unique digital development and concerns about stringent regulations have shifted the focus from innovation to application. This has prompted startups to target overseas markets, awaiting clearer AI directions at home.",
    image: "https://media.wired.com/photos/6500fddd7e0b4ceb5c8f9e3e/191:100/w_1280,c_limit/AI-Hype-Train-Stalled-China-Business-Still-1477225246.jpg",
    tags: ["Data Science", "Computer Science"]
  }];

const articles2 = [

]

function ArticlePage() {
  const [loggedIn, setLoggedIn, setOnSignInPage, useArticle2, setUseArticle2] = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState(useArticle2 ? articles2 : articles1);

  setLoggedIn(true);

  useEffect(() => {
    const randomTime = Math.random() * 500 + 500;

    const timer = setTimeout(() => {
      setLoading(false);
    }, randomTime);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div>
      {
        loading ? 
        <div style = {{ width: '100vw', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <CircularProgress />
            </div>
            <h3>Finding your articles...</h3>
          </div>
        </div>
        :
        <div>
          <Typography style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '25px' }} variant="h4" marginBottom="0rem">Your Daily Six:</Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="grid-container">
              {articles.map((article, index) => (
                <Article article={article} />
              ))}
            </div>
          </div>
        </div>

      }

    </div>
  );
}


export default ArticlePage;
