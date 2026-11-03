// Campus Navigator demo: sample routes only. Replace with verified campus information.
const routes = {
  block34: {
    name: "Demo Gate 2 → Block 34",
    time: "Example: 10–12 min",
    destination: "Block 34",
    steps: [
      "Start at Demo Gate 2 (example starting point).",
      "Walk towards the library landmark shown on the sample map.",
      "At the example junction, follow the Block 31 direction sign.",
      "Continue along the sample route to Block 34.",
      "Once inside, check the verified floor and room signs to find your classroom."
    ],
    path: "M65 285 L65 225 L150 225 L150 160 L260 160 L260 95 L365 95"
  },
  library: {
    name: "Demo Gate 2 → Central Library",
    time: "Example: 5–8 min",
    destination: "Central Library",
    steps: [
      "Start at Demo Gate 2 (example starting point).",
      "Follow the main path on the illustrative map.",
      "Look for the sample library landmark sign.",
      "Arrive at the Central Library example destination."
    ],
    path: "M65 285 L65 225 L150 225 L150 160 L110 95"
  },
  sports: {
    name: "Demo Gate 2 → Sports Ground",
    time: "Example: 8–10 min",
    destination: "Sports Ground",
    steps: [
      "Start at Demo Gate 2 (example starting point).",
      "Follow the main path towards the example library junction.",
      "Continue along the path shown on the sample map.",
      "Look for the Sports Ground landmark sign."
    ],
    path: "M65 285 L65 225 L150 225 L260 225 L365 235"
  },
  block31: {
    name: "Demo Gate 2 → Block 31",
    time: "Example: 7–9 min",
    destination: "Block 31",
    steps: [
      "Start at Demo Gate 2 (example starting point).",
      "Follow the sample path towards the library landmark.",
      "At the example junction, follow the Block 31 sign.",
      "Continue to the Block 31 example destination."
    ],
    path: "M65 285 L65 225 L150 225 L150 260 L105 260"
  }
};

const destination = document.getElementById("destination");
const findButton = document.getElementById("findButton");

function showRoute() {
  const route = routes[destination.value] || routes.block34;
  document.getElementById("routeName").textContent = route.name;
  document.getElementById("routeTime").textContent = route.time;
  document.getElementById("mapDestination").textContent = route.destination;
  document.getElementById("routePath").setAttribute("d", route.path);

  const list = document.getElementById("directions");
  list.replaceChildren();
  route.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    list.appendChild(item);
  });
  document.getElementById("routeResults").scrollIntoView({ behavior: "smooth", block: "start" });
}

findButton.addEventListener("click", showRoute);
destination.addEventListener("change", showRoute);

document.querySelectorAll(".feedback-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".feedback-button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    document.getElementById("feedbackMessage").textContent = "Thanks! Feedback recorded in this demo view.";
  });
});

showRoute();
