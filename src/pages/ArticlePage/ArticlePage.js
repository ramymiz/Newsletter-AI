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

const articles2 = [{
  title: "UK Returns to EU Science and Space Initiatives Post-Brexit",
  creator: "Engadget",
  summary: "The UK is set to rejoin EU's Horizon and Copernicus programs after Brexit's exit. This 'bespoke deal' excludes the UK's participation in Euratom, emphasizing on its nuclear fusion research.",
  bigSummary: "Following Brexit, the UK had to exit various essential European Union science programs like the Galileo satnav project and Horizon. Recent developments indicate that the UK will now rejoin the Horizon as an associate country based on a unique agreement made between UK Prime Minister Rishi Sunak and European Commission President Ursula von der Leyen. Additionally, the UK will associate with Copernicus, the EU's £8 billion Earth observation satellite initiative. This return does not include the Euratom nuclear research, with the UK leaning towards its nuclear fusion projects. As per the agreement, the UK will annually contribute almost €2.6 billion for participating in both Horizon and Copernicus. Both leaders from the UK and the EU see this as a significant strategic partnership and an indicator of their continued commitment to global scientific research and collaboration. Scientists in the UK have expressed their relief, emphasizing the importance of international collaboration in science. Initially, the UK was barred from Horizon due to a disagreement concerning the Northern Ireland Brexit trading agreement. The return deal was established in February 2023, with some disputes regarding the UK's financial contribution. One of Horizon Europe's primary objectives is to address climate change, support the UN's Sustainable Development Goals, and amplify the EU's competitiveness and growth.",
  image: 'https://s.yimg.com/ny/api/res/1.2/_q6_uzNOhMU86Wg6b8cm_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/94aec6f0-4e26-11ee-bbf7-7e7ca192712e',
  url: 'https://www.wired.com/story/fast-forward-tesla-dojo-supercomputer-elon-musk-ai-revolution/',
  tags: ["Sustainable Development", "Environmental Law"]
},
{
  title: "Is the U.N.'s 2030 Sustainable Development Plan a Failure?",
  creator: "NPR",
  summary: "Despite setbacks, the U.N. reassesses its Sustainable Development Goals (SDGs) at their midway point. Global challenges have slowed progress, but there's debate on whether the approach or ambition is to blame.",
  bigSummary: "In 2015, the UN set 17 Sustainable Development Goals (SDGs) for 2030, addressing global issues like poverty, education, and climate change. Yet, recent data shows that half of these goals have seen limited progress due to challenges like the COVID-19 pandemic, political conflicts, and climate disasters. Currently, 50% of 140 targets lag, with 30% stagnating or regressing. If unchecked, by 2030, millions will face extreme poverty, malnutrition, and a lack of education. Despite setbacks, there've been achievements like reduced child mortality. Leaders like U.N. Secretary General Antonio Guterres advocate for enhanced funding, emphasizing commitment. While some critique the SDGs' ambition, others highlight the importance of global accountability and unity.",
  image: 'https://media.npr.org/assets/img/2023/09/21/un-sustainablegoals-graphic_wide-8d3308b2e77ef1f560e6602fad0e0dd701004a0c-s1400-c100.jpg',
  tags: ["Sustainable Development", "Environmental Policy"],
  url: "https://incolumitas.com/pages/BotOrNot/"
},
{
  title: "Cautious Optimism Arises from Climate Week Developments",
  creator: "Insider",
  summary: "Despite past disappointments, Climate Week shows hints of progress with stricter participation criteria and a focus on action over rhetoric. Yet, concerns over the sincerity of commitments linger.",
  bigSummary: "Climate Week often showcases global leaders' climate commitments, but with emissions still rising post-2015 Paris Agreement, doubts persist. By 2023, 929 companies pledged net-zero emissions, though many lack tangible plans. Notably, U.N. Secretary-General Guterres tightened participation criteria, sidelining top polluters like the US and China. Colombia and Panama aim to limit coal usage, and Brazil seeks tougher emissions targets. California's Gov. Newsom criticized fossil fuels, and UAE's Sultan Al Jaber, despite potential COP28 role conflicts, recognized the need to reduce them. Prominent city and state leaders, especially women, are becoming central in the climate conversation, directly confronting climate challenges and driving solutions.",
  image: "https://i.insider.com/650dc73a19f33e0019048549?width=1200&format=jpeg",
  tags: ["Climate Change Mitigation", "Sustainable Development"],
  url: "https://venturebeat.com/ai/generative-ai-in-production-rethinking-development-and-embracing-best-practices/"
},
{
  title: "Judge Strikes Down Trump-Era Old-Growth Logging Rule",
  creator: "NPR",
  summary: "A Trump-era rule allowing logging of old-growth forests in the Pacific Northwest has been ruled unlawful. The judge found it in violation of multiple environmental laws.",
  bigSummary: "A Trump-era rule allowing old-growth forest logging in the Pacific Northwest violates multiple laws, determined by U.S. Magistrate Judge Andrew Hallman. This 2021 rule, which changed a 1994 protection, was contested by environmental groups. Hallman urged the Forest Service to re-evaluate its environmental assessment and produce a full environmental impact statement. The rule, covering an area the size of Maryland, intended to enhance forest resilience to wildfires. However, a lawsuit argued this could increase fire severity and underlined large trees' importance for biodiversity and climate. Oregon Wild's Rob Klavins called for the Biden administration to reverse this rule, referencing Biden's commitment to tree preservation.",
  image: "https://media.npr.org/assets/img/2023/08/31/ap23244070218899_wide-ea2f53956e95198e1d3adc9ae2a3bedc03b625ca-s1400-c100.jpg",
  tags: ["Environmental Law", "Environmental Policy"],
  url: "https://www.engadget.com/caesars-reportedly-paid-millions-to-stop-hackers-releasing-its-data-081052820.html"
}, {
  title: "Utility Monopoly vs. Deregulated Energy: A Deep Dive",
  summary: "Understanding the difference between regulated and deregulated utility markets has direct implications for electricity costs and delivery. Both models present their own sets of advantages and drawbacks.",
  bigSummary: "In a regulated utility market, a singular utility company is responsible for both the supply and delivery of power, supervised by state governments. It offers consumers simplicity but may come with rate fluctuations. On the other hand, deregulated utility markets decouple supply from delivery, allowing consumers to choose their power supplier while the delivery remains constant. Deregulation promises competitive pricing, diverse contract setups, and renewable energy options. However, it may be riddled with transparency issues and higher rates in practice. Historically, deregulated energy markets emerged post the 1978 federal policy, a reaction to the 1973 oil crisis, giving states the autonomy to choose their energy structure. The results have varied across states.",
  image: "https://www.cnet.com/a/img/resize/91c32d0773b69244a03235359bbdc4a8fd95a1e3/hub/2023/06/16/93020120-1541-4321-b9fe-e09971ba6a7d/artboard-4-copy3x.png?auto=webp&fit=crop&height=675&width=1200",
  creator: "CNET",
  tags: ["Natural Gas Distribution", "Environmental Policy"],
  url: "https://www.cnet.com/home/energy-and-utilities/utility-monopoly-vs-deregulated-energy-which-is-better-for-you/"
},
{
  title: "The Rise of Massive IoT: Powering Tomorrow with LoRaWAN",
  creator: "ReadWrite",
  summary: "The emergence of the 'Massive IoT' era, characterized by vast sensor deployments, promises transformative business operations. LoRaWAN's features, like cost-efficiency and scalability, make it a prime choice for managing this IoT expansion.",
  bigSummary: "The 'Massive IoT' age is upon us, marked by a surge in sensors and devices. This growth offers novel ways to run businesses and tackle global issues previously unthinkable. The key to IoT's efficient function at this magnitude is the development of Low Power Wide Area Networks (LPWANs), essential for managing vast sensor deployments. Leading the LPWAN solutions is LoRaWAN, celebrated for its affordability, long-range capabilities, and open design. This technology is now operational in over 76,000 cities globally. Illustrating its value, IoT, powered by LPWANs like LoRaWAN, is revolutionizing public safety, conserving resources, and offering unprecedented benefits. Examples include monitoring air quality in smart buildings, detecting natural gas leaks, and smart water metering to conserve dwindling water resources.",
  image: "https://readwrite.com/wp-content/uploads/2023/07/Reshaping-Business-and-Society.jpg",
  tags: ["Climate Change Mitigation"],
  url: "https://readwrite.com/how-lorawan-and-massive-iot-are-reshaping-business-and-society/"
}

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
