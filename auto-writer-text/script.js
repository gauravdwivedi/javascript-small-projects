const text =
  "I should upload many videos on youtube to get started professionally";

let index = 0;

function writeText() {
  document.body.innerHTML = text.slice(0, index);

  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);
