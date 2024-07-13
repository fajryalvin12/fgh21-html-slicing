const footer1 = document.getElementById("footer-1");
const footer2 = document.getElementById("footer-2");
const footer3 = document.getElementById("footer-3");

function addContent(targetElement, content) {
  content.forEach((item) => {
    const textContainer = document.createElement("li");
    textContainer.textContent = item;
    targetElement.appendChild(textContainer);
  });
}

const content = [
  ["About us", "Features", "Blog", "Payment", "Mobile Apps"],
  ["Booking", "Create Event", "Discover", "Register"],
  ["Partnership", "Help", "Terms of Service", "Privacy Policy", "Sitemap"],
];

addContent(footer1, content[0]);
addContent(footer2, content[1]);
addContent(footer3, content[2]);
