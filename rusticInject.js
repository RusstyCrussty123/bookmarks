document.getElementById("mainDivInject") && (document.getElementById("mainDivInject").remove(), alert("refreshed")), function () {
  const mainDiv = document.createElement("div"), toggle = document.createElement("button"), hiddenDiv = document.createElement("div"), title = document.createElement("h2");
  hiddenDiv.appendChild(title), mainDiv.appendChild(toggle), mainDiv.appendChild(hiddenDiv), document.body.appendChild(mainDiv), mainDiv.id = "mainDivInject", mainDiv.style.width = "50%", mainDiv.style.height = "25%", mainDiv.style.color = "white", mainDiv.style.position = "absolute", mainDiv.style.top = "0px", mainDiv.style.zIndex = "10000", hiddenDiv.style.backgroundColor = "black", hiddenDiv.style.resize = "both", hiddenDiv.style.overflow = "scroll", toggle.innerHTML = "Toggle", title.innerHTML = "Bookmark", toggle.addEventListener("click", () => {
    "none" == hiddenDiv.style.display ? hiddenDiv.style.display = "block" : hiddenDiv.style.display = "none";
  });
  let addRustic = document.createElement("button"), br = document.createElement("br"), runCode = document.createElement("button"), codeInput = document.createElement("input");
  addRustic.innerHTML = "add rustic", runCode.innerHTML = "Eval", hiddenDiv.appendChild(addRustic), hiddenDiv.appendChild(br), hiddenDiv.appendChild(runCode), hiddenDiv.appendChild(codeInput), addRustic.addEventListener("click", () => {
    let e = document.createElement("iframe");
    e.src = "https://rustic.glitch.me/", e.style.width = "100%", e.style.height = "100%", e.style.resize = "both", hiddenDiv.appendChild(e);
  }), runCode.addEventListener("click", () => {
    eval(codeInput.value);
  });
}();
