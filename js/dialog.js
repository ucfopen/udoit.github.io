const dialog = document.getElementById('imageDialog');
if (dialog) {
  const dialogImg = dialog.querySelector('img');
  const dialogCaption = dialog.querySelector('figcaption');
  const closeBtn = dialog.querySelector('button');

  // Open dialog when any image is clicked
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      dialogImg.src = img.src.replace('/400/300', '/1200/900'); // optional: load larger version
      dialogImg.alt = img.alt;
      dialogCaption.textContent = img.alt; // set caption text
      dialog.showModal();
    });
  });

  // Close dialog when clicking button or backdrop
  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close(); // click outside image to close
  });
}