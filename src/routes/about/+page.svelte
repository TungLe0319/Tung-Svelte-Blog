
<script>
    const educationData = [
    {
      level: "BootCamp Graduate",
      school: "Boise CodeWorks",
      duration: "Aug, 2022 - November, 2022",
    },
    // Add more education data as needed
  ];

  const iconsData = [
 "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  "https://raw.githubusercontent.com/zumrudu-anka/zumrudu-anka/master/images/dotnetcore.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://raw.githubusercontent.com/zumrudu-anka/zumrudu-anka/master/images/vscode.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
  ];
</script>

<div class="p-8 mt-24 flex justify-center  items-center flex-col">
  <img src="src\assets\images\Profilephoto.png" width="300px" height="300px" alt="Profile Photo" class="   rounded-full shadow-lg">

  <div class="text-center mt-2">
    <p class="text-2xl">Hello, I'm</p>
    <p class="text-2xl   font-bold text-orange-400">Tung Le</p>
    <p class="mt-4 text-md text-gray-500 font-semibold">Passionate about information-technology and development</p>
  </div>
</div>

<!-- Education Section -->
<div class="p-8 mt-8 flex flex-col md:flex-row">
  <div class="md:w-1/2 flex justify-center">
    <img src="src\assets\images\BoiseCodeWorkslogo.png" alt="Education Image" class="md:h-64  ">
  </div>
  <div class="mt-4 md:w-1/2 md:pl-8">
    <h2 class="text-xl font-semibold">Education</h2>
    {#each educationData as item (item.level)}
      <div class="mt-2">
        <p class="text-lg font-semibold">{item.level}</p>
        <p class="text-gray-600">{item.school}</p>
        <p class="text-gray-600">{item.duration}</p>
      </div>
    {/each}
  </div>
</div>

<!-- Icons Section -->
<div class="p-8 mt-8 flex flex-col items-center justify-center">
  <h2 class="text-xl font-semibold">Skills</h2>
  <div class="mt-4 grid grid-cols-3 md:grid-cols-4 gap-8    ">
    {#each iconsData as iconUrl}
      <img src={iconUrl} alt="Skill Icon" class="w-16 h-16 md:w-20 md:h-20" />
    {/each}
  </div>
</div>