import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import hoverEffect from "hover-effect";

let app = document.querySelector("#app");
let container = document.createElement("div");
container.id = "container";
app.appendChild(container);

var myAnimation1 = new hoverEffect({
  parent: document.querySelector("#container"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
  image2:
    "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});

var myAnimation2 = new hoverEffect({
  parent: document.querySelector("#container"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
  image2:
    "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});

var myAnimation3 = new hoverEffect({
  parent: document.querySelector("#container"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
  image2:
    "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});

var myAnimation4 = new hoverEffect({
  parent: document.querySelector("#container"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
  image2:
    "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});

var myAnimation5 = new hoverEffect({
  parent: document.querySelector("#container"),
  intensity1: 0.1,
  intensity2: 0.1,
  angle2: Math.PI / 2,
  image1:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
  image2:
    "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80",
  displacementImage:
    "https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true",
});
