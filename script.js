const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  preview.src = URL.createObjectURL(file);
});

// --- New: Save postcard as image ---
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const postcard = document.getElementById("postcard");

  html2canvas(postcard).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-postcard.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});