// Select all accordion headers
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  const header = acc.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // Close other accordions
    accordions.forEach(item => {
      if (item !== acc) item.classList.remove('active');
    });

    // Toggle the clicked one
    acc.classList.toggle('active');
  });
});
