/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById('year');
const projectsEl = document.getElementById('projects');

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
  {
    name: 'Calculator App',
    img: '4.png',
    codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
    liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/'
  },
  {
    name: 'Slider App',
    img: '5.png',
    codeUrl: 'https://github.com/justdecodeme/periodic-table',
    liveUrl: 'https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html'
  },
  {
    name: 'Calculator App',
    img: '4.png',
    codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
    liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/'
  },
  {
    name: 'Slider App',
    img: '5.png',
    codeUrl: 'https://github.com/justdecodeme/periodic-table',
    liveUrl: 'https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html'
  },
  {
    name: 'Calculator App',
    img: '4.png',
    codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
    liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/'
  },
  {
    name: 'Slider App',
    img: '5.png',
    codeUrl: 'https://github.com/justdecodeme/periodic-table',
    liveUrl: 'https://justdecodeme.github.io/periodic-table/day-01-20-periodic-table.html'
  },
]

let output = '';

for (let i = 0; i < projects.length; i++) {
  output += `<div class="project">
  <img src="img/${projects[i].img}" alt="Calculator Project Image">
  <div class="content flex">
    <p>${projects[i].name}</p>
    <p class="flex">
      <a href="${projects[i].codeUrl}" target="_blank"><img src="github.svg" alt="GitHub"></a>
      <a href="${projects[i].liveUrl}" target="_blank"><img src="arrow-up-right-from-square-solid.svg" alt="External link"></a>
    </p>
  </div>
</div> `
}

projectsEl.innerHTML = output;


// string literal > inside we can use variables

// var names = ['akash', 'bhim', 'cherry'];
// var marks = [90, 80, 85];

var name = '<h1>rakesh</h1>';

// console.log(names[0])

// var students = [
//   {
//     name: 'akash',
//     marks: 90,
//   },
//   {
//     name: 'bhim',
//     marks: 80
//   },
// ]

// console.log(students[0].name, students[1].marks)