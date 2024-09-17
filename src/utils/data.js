export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "Typescript", percentage: "80%" },
      { skill: "React.js", percentage: "80%" },
      { skill: "NextJs", percentage: "60%" },
      { skill: "Ember", percentage: "60%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Python", percentage: "75%" },
      { skill: "Express.js", percentage: "75%" },
      { skill: "PostgreSQL", percentage: "70%" },
      { skill: "MongoDB", percentage: "50%" },
      { skill: "Supabase", percentage: "50%" },
      { skill: "Docker", percentage: "65%" },
      { skill: "Kubernetes", percentage: "50%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "AWS", percentage: "65%" },
      { skill: "Expo (React Native)", percentage: "50%" },
    ],
  },
  // {
  //   title: "Soft Skills",
  //   icon: "./assets/images/soft-skills-icon.png",
  //   skills: [
  //     { skill: "Problem-solving", percentage: "80%" },
  //     { skill: "Collaboration", percentage: "85%" },
  //     { skill: "Attention to Detail", percentage: "75%" },
  //   ],
  // },
];

export const WORK_EXPERIENCE = [
  {
    title: "Full Stack Software Engineer at Avise, Inc",
    date: "June 2022 - September 2024",
    responsibilities: [
      "Designed and implemented an automated support rotation system, easing the workload on customer support by seamlessly scheduling engineers on call and managing handoff events.",
      "Developed a reusable page filter component, reducing the implementation time to under 10 minutes, significantly boosting developer productivity.",
      "Led the development of a highly-requested feature, driving customer acquisition and contributing to a Net Promoter Score (NPS) of 80+.",
      "Automated the customer offboarding process, cutting the time from over 30 minutes to under 10 minutes, enhancing operational efficiency.",
    ],
  },
  {
    title: "Full Stack Software Engineer at CoSchedule",
    date: "June 2020 - May 2022",
    responsibilities: [
      "Migrated an EmberJS/Restful API calendar system to a NextJS/GraphQL solution, implementing a comprehensive permissions and authentication overhaul to improve security and performance.",
      "Collaborated with product designers and QA to revamp the user onboarding process, resulting in a 20% increase in user conversion rates.",
      "Refactored EmberJS classic components into optimized, user-friendly Glimmer components using a Test-Driven Development (TDD) approach.",
      "Developed a content filtering feature in partnership with Customer Support Managers, reducing customer churn by over 30%.",
      "Produced detailed technical design specifications for new features and ensured rigorous testing and user satisfaction through close collaboration with QA and product designers.",
    ],
  },
  {
    title: "Software Developer at Project Rebel",
    date: "Feb 2020 - May 2020",
    responsibilities: [
      "Developed secure user authentication systems using AWS Cognito user pools, ensuring reliable access control and user management.",
      "Created an algorithm to auto-generate thumbnails from images and videos utilizing AWS S3 and Lambda functions, enhancing media processing efficiency.",
      "Guided entry-level programmers on best practices for React and Test-Driven Development (TDD), fostering a culture of high-quality code and continuous improvement.",
    ],
  },
  {
    title: "Research Assistant at Multimedia University",
    date: "October 2017 - September 2019",
    responsibilities: [
      "Developed a big data aggregation algorithm using MapReduce and Hadoop for distributed systems.",
      "Presented a research paper on the aggregation algorithm at an IEEE conference, earning the Best Paper Award.",
      "Engineered an emotion detection system using Python and OpenCV, specifically designed to detect anger in drivers in Malaysia, contributing to road safety improvements.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    text: `I had the pleasure of working with Imran a few years back, and I can confidently say he’s a fantastic software engineer. He is a team player always. He knows how to collaborate effectively and is always willing to step in and help wherever needed. He’s also not afraid to challenge the status quo when it makes sense. Imran can balance being respectful while still challenging things that can be improved. That makes him a strong asset to any team.

One of the things I appreciated most about working with him is his problem-solving mindset. He’s the kind of person who doesn’t get stuck when facing challenges. On top of that, he’s always eager to learn and grow. I’ve seen him dive into new tools and concepts head-first, and it’s clear he’s driven to keep improving and honing his craft.

On a personal level, Imran is easy to get along with. He’s someone you enjoy working with day-to-day, and I think that makes all the difference in team dynamics. Overall, I highly recommend him. He is talented, motivated, and a great person to work with.`,
    user: "Gustavo San Jose - Software Engineer at Bezos Academy (USA)",
  },
  {
    text: "Imran is a productive and reliable engineer. He manages to achieve a very high output of high quality code. I was consistently impressed by both how quickly he would come back to the team with solutions and how well designed they were; code review was never so easy. Imran is an absolute delight to have on the team. He brings a big smile an a witty sense of humor to his workplace dealings. I'm happy to have his friendship.",
    user: "Jon Kiersey - Senior Software Engineer at Impact (USA)",
  },
  {
    text: "Imran was on my team for several months before being tapped by the company for greater challenges. He is a conscientious young man, learns quickly, asks good questions, and communicates well. The thing that most impressed me about him is his persistence. He will not stop until a problem is solved. In a sink or swim situation, he definitely swims.",
    user: "Paul Sethre - Senior Software Engineer at HashiCorp (USA)",
  },
  {
    text: "Imran is incredibly intelligent and hard working. He is extremely committed to solving the problem in front of him. He works tirelessly to get the best solution possible. He will research when necessary and will defend his ideas. That being said, he'll gladly accept an idea presented to him if it is a better idea. On top of all that, he is a great guy and a joy to be around. Imran would be an immensely valuable addition to any team!",
    user: "Nolan Nordlund - Founder of Project Rebel (USA)",
  },
  {
    text: "Imran is a very dedicated and hardworking person. He consistently full of motivation and always strive to achieve his respective aims/goals. He got a very good problem solving and analytical skills, that enable him to excel in his field of study.",
    user: "Anang Hudaya Muhamad Amin - PhD., FHEA, SMIEEE (Dubai)",
  },
  {
    text: "Imran takes his carrier very seriously and often would take on side project to stay update of the newest developments in programming. He also has a published paper on “Performance Analysis of the Effect of a Combiner on a MapReduce Job”. His continuing professional development course has helped him to easily learn new techniques and perform complex tasks the first time around.",
    user: "Harerimana Radjab - Senior Software Engineer at Wavelet Solutions (Malaysia)",
  },
];

export const PROJECTS = [
  {
    title: "Mobile Travel App (React Native)",
    description:
      "A mobile travel app that showcases the culture and beauty of Zimbabwe. Built using React Native with Expo.",
    image: "./assets/images/mobile.png",
    link: "",
  },
  {
    title: "Accessory Shop (React JS)",
    description:
      "E-commerce site that sells accessories. Built with ReactJs and Sanity.io",
    image: "./assets/images/shop.png",
    link: "https://reeds-shop.vercel.app/",
  },
];
