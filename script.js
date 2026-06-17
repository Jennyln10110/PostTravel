const upload = document.getElementById("upload"); //holds the file the user uploads
const preview = document.getElementById("preview"); //holds the image the user uploaded here

let imageBase64 = null; //this later stores the picture, but for now it's an empty variable


//this function checks if the upload button is clicked which triggers the event.
//if nothing is uploaded then the function stops here.
upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  //the FileReader converts the file into a long string of text that can be read
  const reader = new FileReader();
  reader.onload = (event) => { //it then takes that string to show a preview on the screen
    imageBase64 = event.target.result; // store base64 version
    preview.src = imageBase64;         // use base64 for preview too
  };
  reader.readAsDataURL(file);
});

const saveBtn = document.getElementById("save-btn"); //stores data into the variable in this case the button id

saveBtn.addEventListener("click", () => { //when the button is activated, the screenshot happens
  const postcard = document.getElementById("postcard");
  const textarea = document.querySelector("textarea.content");
  const titleInput = document.querySelector("input.title-content");

  // Swap inputs for divs so html2canvas captures text
  const tempMsg = document.createElement("div");
  tempMsg.style.whiteSpace = "pre-wrap";
  tempMsg.style.fontSize = "11px";
  tempMsg.style.fontFamily = "'Courier New', monospace";
  tempMsg.style.flex = "1";
  tempMsg.style.padding = "2px";
  tempMsg.innerText = textarea.value;

  const tempTitle = document.createElement("div");
  tempTitle.style.fontSize = "11px";
  tempTitle.style.fontFamily = "'Courier New', monospace";
  tempTitle.style.flex = "1";
  tempTitle.innerText = titleInput.value;

  textarea.replaceWith(tempMsg);
  titleInput.replaceWith(tempTitle);

  html2canvas(postcard, {
    useCORS: true,
    allowTaint: true,
    logging: false
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-postcard.png";
    link.href = canvas.toDataURL();
    link.click();

    tempMsg.replaceWith(textarea);
    tempTitle.replaceWith(titleInput);
  });
});