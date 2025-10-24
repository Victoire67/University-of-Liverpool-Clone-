let navDescription = document.getElementById("nav-description");
let nav = document.getElementById("nav").getElementsByTagName("li");
let descriptions = [
  document.getElementById("student"),
  document.getElementById("student-life"),
  document.getElementById("research"),
  document.getElementById("global"),
  document.getElementById("about"),
];
[...nav].map((x) => {
  x.addEventListener("click", function (e) {
    [...nav].map((x) => x.classList.remove("bg-white", "text-black"));
    if (navDescription.open === true) {
      document.getElementById(e.target.textContent).classList.toggle("hidden");
      this.classList.remove("bg-white", "text-black");
      navDescription.close();
    } else {
      this.classList.add("bg-white", "text-black");
      // switch(i){
      //   case 0
      // }
      txt.classList.toggle("hidden");
      navDescription.show();
    }
  });
});
