document.startViewTransition(() => {
  requestAnimationFrame(() => {
    document.getElementById('body')?.classList.toggle('loaded');
  });
});