const upload = document.getElementById("upload"); //variable that references the upload input element
const preview = document.getElementById("preview"); //varable that references the image's preview

upload.addEventListener("change", (e) => {  //when the upload button is clicked on this will help display the image
  const file = e.target.files[0]; //variable that stores the uploaded file
  if (!file) return;  //if no file is selected, stop running the function

  preview.src = URL.createObjectURL(file); //creates a temporary URL so the uploaded image can be previewed
});

// --- Save postcard as image ---
const saveBtn = document.getElementById("save-btn");  //this is a variable in which grabs the button's id and has it reference that data

saveBtn.addEventListener("click", () => { //when the user clicks the button
  const postcard = document.getElementById("postcard"); //this will grab everything in the postcard id

  html2canvas(postcard).then((canvas) => { //turns the everything in postcard section into a snapshot in order to download it
    const link = document.createElement("a");
    link.download = "my-postcard.png"; //downloads the post card and has a default name 
    link.href = canvas.toDataURL();
    link.click();
  });
});
