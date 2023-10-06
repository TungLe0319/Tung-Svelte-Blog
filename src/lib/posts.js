const CategoryEnum = {
  Technology: "Technology",
  art: "Art",
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
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
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
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?w=996&t=st=1696532542~exp=1696533142~hmac=27446533c4a9846e9edc67a297c322ab94a794c103c06e67572bbcdb3280f514",
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
];

export default posts;
