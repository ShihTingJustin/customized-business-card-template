// 資料，你可以換成你的檔案，但請不要更動架構
const profile = {
  name: "Sam Lin",
  avatar: "https://avatars2.githubusercontent.com/u/3960142?s=400&v=4",
  info: "Hi, this is Sam Lin!",
  experiences: [
    "Project manager @pubGame",
    "Web #10 @Alpha Camp",
    "Software Enginner @GGV",
    "Software Engineer @Crypto.com",
  ],
};

// 選出 .my-card 節點做容器
const myCard = document.querySelector(".my-card");

// 由於 experiences 是陣列，最好先用迴圈把 <li></li> 的 template 整理好
let experiencesText = "";
for (let i = 0; i < profile.experiences.length; i++) {
  experiencesText += `<li>${profile.experiences[i]}</li>`;
}

// 用 myCard.innerHTML 抽換內容
myCard.innerHTML = `
    <img src="${profile.avatar}" alt="Avatar" class="rounded float-right pr-3" width="200">
    <h3 class="my-name text-uppercase">${profile.name}</h3>
    <p class="info">${profile.info}</p>
    <div class="experience text-mute">
      <h6>Experience</h6>
      <ul class="small">
      </ul>
    </div>
`;
