const CategoryEnum = {
  Technology: "Technology",
  art: "Art",
  SoftwareDevelopment: "Software Development",
  // Add more categories as needed
};

const posts = [
  {
    id: "7c5e38cc-5b6e-4e11-b1dd-7d92acdeff81", // Unique GUID ID
    image:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
    title: "The Future of Artificial Intelligence",
    subtitle: "Exploring the latest advancements and trends in AI technology.",
    description:
      "Artificial Intelligence (AI) has been a fascinating and transformative force in our lives, and it's poised to shape our future in even more profound ways. As we look ahead to what lies on the horizon for AI, it's clear that the potential is limitless. In this post, we'll explore some of the most exciting developments and trends that will define the future of AI.Enhanced Automation: AI-powered automation is becoming increasingly prevalent across industries. From self-driving cars to smart manufacturing, automation is streamlining processes, reducing errors, and boosting efficiency. In the future, we can expect to see more jobs augmented by AI, allowing humans to focus on creative and strategic tasks. Personalized Experiences: AI is revolutionizing the way businesses interact with customers. Chatbots and virtual assistants are already providing personalized customer service, but the future promises even greater customization. AI will anticipate our needs, personalize content, and enhance user experiences across platforms. Healthcare Advancements: AI is making waves in healthcare, aiding in disease diagnosis, drug discovery, and patient care. In the future, AI-powered tools will enable early disease detection, assist in surgery, and improve healthcare accessibility through telemedicine. AI Ethics and Regulation: As AI's role in society grows, so does the need for ethical guidelines and regulations. The future will see increased discussions around AI ethics, fairness, transparency, and accountability. Striking the right balance between innovation and responsibility will be a critical challenge. AI in Education: Personalized learning experiences powered by AI will become the norm in education. AI tutors will adapt to individual student needs, making education more accessible and effective. Gamified learning and AI-driven assessments will reshape traditional classrooms. AI and Creativity: Contrary to fears of AI replacing human creativity, it will serve as a tool for enhancing creativity. Artists, writers, and musicians will use AI to generate new ideas, designs, and compositions, pushing the boundaries of what's possible. AI in Research: AI is accelerating scientific research by analyzing vast datasets and running simulations. From climate modeling to drug discovery, AI-driven research will lead to breakthroughs that address some of the world's most pressing challenges. AI in Governance: Governments are harnessing AI for policy analysis, disaster management, and cybersecurity. The future will see AI-powered governance tools that enhance decision-making and public services while addressing privacy concerns. AI and Sustainability: AI will play a pivotal role in sustainability efforts. It will optimize energy consumption, reduce waste, and help address environmental issues, such as deforestation and climate change. AI-Enhanced Human Abilities: Brain-computer interfaces and AI-powered prosthetics will enhance human capabilities, benefiting individuals with disabilities and expanding the boundaries of human potential. In conclusion, the future of AI is a realm of endless possibilities. While AI promises to bring about remarkable advancements, it also raises important ethical and societal questions that we must address responsibly. As we navigate this future, collaboration among technologists, policymakers, and society at large will be crucial in ensuring that AI continues to be a force for good, empowering us to achieve new heights in innovation, knowledge, and human potential.",

    category: CategoryEnum.Technology,
    author: "John Doe", // Author name
    date: "2023-10-12", // Date of publication
    likes: 42, // Number of likes
    comments: [
      {
        id: "a7d2f9e6-2d75-4dcb-9c6e-20de04ea792f", // Unique GUID ID for comments
        text: "Great article! Thanks for sharing.",
        author: "Alice Smith", // Comment author
        date: "2023-10-13", // Date of comment
      },
      // More comments can be added here
    ],
  },
  // {
  //   id: "f8e9ce3a-6b45-4b99-980a-d12ff7a568e9",
  //   image:
  //     "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1696532578~exp=1696533178~hmac=3bfbf904a9933c0b284e12bf1f8f2670c24a8ad270aa6d4911b22bef344e2b84",
  //   title: "The Evolution of Virtual Reality",
  //   subtitle:
  //     "A journey through the development of VR technology and its applications.",
  //   category: CategoryEnum.Technology,
  //   author: "Emily Johnson",
  //   date: "2023-10-18",
  //   likes: 28,
  //   comments: [
  //     {
  //       id: "7f0ea4ac-8c59-4ebf-a8b3-46d4a5e2e6a1",
  //       text: "I love VR! Can't wait to see what the future holds.",
  //       author: "Mark Wilson",
  //       date: "2023-10-19",
  //     },
  //     // More comments can be added here
  //   ],
  // },
  // {
  //   id: "9b0ea34d-1cf6-4f61-b23d-35aa6e986b2f",
  //   image:
  //     "https://img.freepik.com/free-vector/technology-particle-dots-vector-5g-digital-corporate-background_53876-110570.jpg?w=1380&t=st=1696532606~exp=1696533206~hmac=7bc4b1b2a3f2436ab60415dba20f173dc01d64c2d4f0171a58813b3723fcc35b",
  //   title: "The Power of 5G Networks",
  //   subtitle:
  //     "Exploring the impact of 5G technology on industries and everyday life.",
  //   category: CategoryEnum.Technology,
  //   author: "Sarah Davis",
  //   date: "2023-10-20",
  //   likes: 35,
  //   comments: [
  //     {
  //       id: "4a92c982-7ff7-41a3-a28e-ec11f6e6c94d",
  //       text: "5G is a game-changer!",
  //       author: "Michael Lee",
  //       date: "2023-10-21",
  //     },
  //     // More comments can be added here
  //   ],
  // },
  // {
  //   id: "d865f91e-d91a-4d04-86ab-d0f90c3a7a44",
  //   image:
  //     "https://img.freepik.com/free-photo/spiral-colorful-lights-is-surrounded-by-galaxy-stars_1340-40227.jpg?t=st=1696532628~exp=1696536228~hmac=c9f67b3bbfdfaef9a1e5b406a97a2c5c4bcbe8f53adb4d600ac63ac2f8e742a9&w=1380",
  //   title: "The Future of Quantum Internet",
  //   subtitle:
  //     "A glimpse into the potential of quantum internet for secure communication.",
  //   category: CategoryEnum.Technology,
  //   author: "Alexandra Turner",
  //   date: "2023-10-22",
  //   likes: 19,
  //   comments: [
  //     {
  //       id: "3b7a9c61-546b-4b45-89de-8dc6ed45e0d7",
  //       text: "Quantum internet sounds fascinating!",
  //       author: "Jessica White",
  //       date: "2023-10-23",
  //     },
  //     // More comments can be added here
  //   ],
  // },
  // {
  //   id: "75ef95a4-6f4c-4335-b7e1-c58a4637b496",
  //   image:
  //     "https://img.freepik.com/free-photo/creative-artists-work-painting-colorful-patterns-generated-by-ai_188544-43093.jpg?t=st=1696532665~exp=1696536265~hmac=0ba82dc7f97a36d2500f91f00e334ce515b4ca031e1feaf2e67f2dedd3e2b50f&w=1380",
  //   title: "The Impact of AI in Education",
  //   subtitle:
  //     "Examining how artificial intelligence is transforming the education sector.",
  //   category: CategoryEnum.Technology,
  //   author: "Daniel Brown",
  //   date: "2023-10-24",
  //   likes: 42,
  //   comments: [
  //     {
  //       id: "209e5ed5-2e01-490a-8454-8f8dd77d5ed1",
  //       text: "AI has the potential to revolutionize learning!",
  //       author: "Sophie Clark",
  //       date: "2023-10-25",
  //     },
  //     // More comments can be added here
  //   ],
  // },
  // {
  //   id: "4d6aa1c7-7f79-4c91-8c93-68a4b84d03b7",
  //   image:
  //     "https://img.freepik.com/free-photo/sunset-sky-powers-wind-solar-energy-generated-by-ai_188544-26193.jpg?t=st=1696532714~exp=1696536314~hmac=2808a66ba648610168a3c1d92685d5d62d5f94c995777013da7e8f4122dbc8f3&w=1380",
  //   title: "The Future of Sustainable Tech",
  //   subtitle:
  //     "Exploring innovative technologies for a greener and more sustainable future.",
  //   category: CategoryEnum.Technology,
  //   author: "David Wilson",
  //   date: "2023-10-26",
  //   likes: 31,
  //   comments: [
  //     {
  //       id: "b1c826e7-3a12-4840-9d70-0d2832b31a61",
  //       text: "Sustainability is key to our future!",
  //       author: "Olivia Smith",
  //       date: "2023-10-27",
  //     },

  //   ],
  // },
];

export default posts;
