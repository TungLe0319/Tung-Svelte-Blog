const posts = [
  {
    id: "7c5e38cc-5b6e-4e11-b1dd-7d92acdeff81", // Unique GUID ID
    image:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
    title: "The Future of Artificial Intelligence",
    description:
      "Exploring the latest advancements and trends in AI technology.",
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
  {
    id: "f8e9ce3a-6b45-4b99-980a-d12ff7a568e9",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1696532578~exp=1696533178~hmac=3bfbf904a9933c0b284e12bf1f8f2670c24a8ad270aa6d4911b22bef344e2b84",
    title: "The Evolution of Virtual Reality",
    description:
      "A journey through the development of VR technology and its applications.",
    author: "Emily Johnson",
    date: "2023-10-18",
    likes: 28,
    comments: [
      {
        id: "7f0ea4ac-8c59-4ebf-a8b3-46d4a5e2e6a1",
        text: "I love VR! Can't wait to see what the future holds.",
        author: "Mark Wilson",
        date: "2023-10-19",
      },
      // More comments can be added here
    ],
  },
  {
    id: "9b0ea34d-1cf6-4f61-b23d-35aa6e986b2f",
    image:
      "https://img.freepik.com/free-vector/technology-particle-dots-vector-5g-digital-corporate-background_53876-110570.jpg?w=1380&t=st=1696532606~exp=1696533206~hmac=7bc4b1b2a3f2436ab60415dba20f173dc01d64c2d4f0171a58813b3723fcc35b",
    title: "The Power of 5G Networks",
    description:
      "Exploring the impact of 5G technology on industries and everyday life.",
    author: "Sarah Davis",
    date: "2023-10-20",
    likes: 35,
    comments: [
      {
        id: "4a92c982-7ff7-41a3-a28e-ec11f6e6c94d",
        text: "5G is a game-changer!",
        author: "Michael Lee",
        date: "2023-10-21",
      },
      // More comments can be added here
    ],
  },
  {
    id: "d865f91e-d91a-4d04-86ab-d0f90c3a7a44",
    image:
      "https://img.freepik.com/free-photo/spiral-colorful-lights-is-surrounded-by-galaxy-stars_1340-40227.jpg?t=st=1696532628~exp=1696536228~hmac=c9f67b3bbfdfaef9a1e5b406a97a2c5c4bcbe8f53adb4d600ac63ac2f8e742a9&w=1380",
    title: "The Future of Quantum Internet",
    description:
      "A glimpse into the potential of quantum internet for secure communication.",
    author: "Alexandra Turner",
    date: "2023-10-22",
    likes: 19,
    comments: [
      {
        id: "3b7a9c61-546b-4b45-89de-8dc6ed45e0d7",
        text: "Quantum internet sounds fascinating!",
        author: "Jessica White",
        date: "2023-10-23",
      },
      // More comments can be added here
    ],
  },
  {
    id: "75ef95a4-6f4c-4335-b7e1-c58a4637b496",
    image:
      "https://img.freepik.com/free-photo/creative-artists-work-painting-colorful-patterns-generated-by-ai_188544-43093.jpg?t=st=1696532665~exp=1696536265~hmac=0ba82dc7f97a36d2500f91f00e334ce515b4ca031e1feaf2e67f2dedd3e2b50f&w=1380",
    title: "The Impact of AI in Education",
    description:
      "Examining how artificial intelligence is transforming the education sector.",
    author: "Daniel Brown",
    date: "2023-10-24",
    likes: 42,
    comments: [
      {
        id: "209e5ed5-2e01-490a-8454-8f8dd77d5ed1",
        text: "AI has the potential to revolutionize learning!",
        author: "Sophie Clark",
        date: "2023-10-25",
      },
      // More comments can be added here
    ],
  },
  {
    id: "4d6aa1c7-7f79-4c91-8c93-68a4b84d03b7",
    image:
      "https://img.freepik.com/free-photo/sunset-sky-powers-wind-solar-energy-generated-by-ai_188544-26193.jpg?t=st=1696532714~exp=1696536314~hmac=2808a66ba648610168a3c1d92685d5d62d5f94c995777013da7e8f4122dbc8f3&w=1380",
    title: "The Future of Sustainable Tech",
    description:
      "Exploring innovative technologies for a greener and more sustainable future.",
    author: "David Wilson",
    date: "2023-10-26",
    likes: 31,
    comments: [
      {
        id: "b1c826e7-3a12-4840-9d70-0d2832b31a61",
        text: "Sustainability is key to our future!",
        author: "Olivia Smith",
        date: "2023-10-27",
      },
      // More comments can be added here
    ],
  },
  // Add more posts with similar structures
];

export default posts;
