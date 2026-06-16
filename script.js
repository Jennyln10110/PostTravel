const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  preview.src = URL.createObjectURL(file);
});