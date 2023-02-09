/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: "Calculator App",
		img: "4.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
	},
	{
		name: "Slider App",
		img: "5.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
	},
	{
		name: "Calculator App",
		img: "4.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
	},
	{
		name: "Slider App",
		img: "5.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
	},
	{
		name: "Calculator App",
		img: "4.png",
		codeUrl: "https://github.com/justdecodeme/js-practice-01-change-bg",
		liveUrl: "https://justdecodeme.github.io/js-practice-01-change-bg/",
	},
	{
		name: "Slider App",
		img: "5.png",
		codeUrl: "https://github.com/justdecodeme/periodic-table",
		liveUrl: "https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html",
	},
];

let output = "";

for (let i = 0; i < projects.length; i++) {
	output += `<div class="project">
  <img src="img/project/${projects[i].img}" alt="Calculator Project Image">
  <div class="content flex">
    <p>${projects[i].name}</p>
    <p class="flex">
      <a href="${projects[i].codeUrl}" target="_blank"><img src="img/icon/github.svg" alt="GitHub"></a>
      <a href="${projects[i].liveUrl}" target="_blank"><img src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link"></a>
    </p>
  </div>
</div> `;
}

projectsEl.innerHTML = output;
