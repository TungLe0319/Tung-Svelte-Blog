const CategoryEnum = {
  Technology: "Technology",
  Art: "Art",
  SoftwareDevelopment: "Software Development",
  // Add more categories as needed
};

const posts = [
  {
    id: "7c5e38cc-5b6e-4e11-b1dd-7d92acdeff81",
    image:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
    title: "The Future of Artificial Intelligence",
    subtitle: "Exploring the latest advancements and trends in AI technology.",
    description: " loremsdfgsdgf",

    category: CategoryEnum.Technology,
    author: "John Doe",
    date: "2023-10-12",
    likes: 42,
    comments: [
      {
        id: "a7d2f9e6-2d75-4dcb-9c6e-20de04ea792f",
        text: "Great article! Thanks for sharing.",
        author: "Alice Smith",
        date: "2023-10-13",
      },
    ],
  },
  {
    id: "87654321-4321-8765-4321-876543218765",
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?w=1380&t=st=1696706958~exp=1696707558~hmac=915127938d46a0bb99856028a23d91a3c3d387a41abb2ec71997280b3f7022f9",
    title: "Artificial Intelligence in Healthcare",
    subtitle: "How AI is revolutionizing the healthcare industry.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Technology,
    author: "Emily Johnson",
    date: "2023-10-18",
    likes: 28,
    comments: [],
  },
  {
    id: "abcd1234-5678-wxyz-9876-abcdef123456",
    image:
      "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1696707019~exp=1696707619~hmac=c4b75a5346b4fedff57ba5b1d42bb0ba76ba5cee02e365e5ed56b46191b52172",
    title: "AI Ethics and Responsibility",
    subtitle: "The ethical considerations of AI development and usage.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Technology,
    author: "Michael Brown",
    date: "2023-10-20",
    likes: 15,
    comments: [],
  },

  {
    id: "12345678-1234-5678-1234-567812345678",
    image:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
    title: "Another Article on AI",
    subtitle: "Discussing the impact of AI on various industries.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Technology,
    author: "Jane Smith",
    date: "2023-10-15",
    likes: 35,
    comments: [],
  },

  {
    id: "art1",
    image:
      "https://img.freepik.com/free-photo/painting-door-that-is-open-sun_1340-43325.jpg?t=st=1696707152~exp=1696710752~hmac=137dee541144f02ac9b9bbf3802455276240be2efc8e4dda5fc0cd56157d7fb4&w=826",
    title: "Exploring the Art of Midjourney",
    subtitle: "A deep dive into the work of the artist Midjourney.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Art, // Assuming you have a CategoryEnum for art
    author: "Eleanor Artiste",
    date: "2023-10-25",
    likes: 18,
    comments: [],
  },
  {
    id: "art2",
    image:
      "https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-12395.jpg?w=1380",
    title: "The Enigma of Banksy's Art",
    subtitle: "Unmasking the mystery behind Banksy's iconic street art.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Art, // Assuming you have a CategoryEnum for art
    author: "Art Aficionado",
    date: "2023-10-26",
    likes: 23,
    comments: [],
  },
  {
    id: "art3",
    image:
      "https://img.freepik.com/free-photo/3d-geometric-shapes-natural-background_23-2150697454.jpg?t=st=1696707203~exp=1696710803~hmac=4483f6111e5dcf6667b1bfe0bfac4d7742bbfdf2de201815974b28d282d3e87f&w=826",
    title: "Art in the Digital Age",
    subtitle: "Exploring the intersection of art and technology.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: CategoryEnum.Art, // Assuming you have a CategoryEnum for art
    author: "Digital Artist",
    date: "2023-10-27",
    likes: 12,
    comments: [],
  },
];

export default posts;
