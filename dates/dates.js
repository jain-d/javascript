let dateElem = document.body.querySelector(".date");
let experiment = document.body.querySelector(".exp");
let dateString = "2024-12-29T00:00:00Z";
let monthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let parsedDate = new Date(dateString);

dateElem.innerHTML = `${parsedDate}<br>"${monthMap[parsedDate.getMonth()]} ${parsedDate.getDate()}"`;

experiment.innerHTML = `London: ${parsedDate.toLocaleString("en-us", { timeZone: "Europe/London"})}`;

experiment.innerHTML = `EST: ${parsedDate.toLocaleString("en-us", { timeZone: "America/New_York"})}`;

experiment.innerHTML = `India: ${parsedDate.toLocaleString("en-us", { timeZone: "Asia/India"})}`;
