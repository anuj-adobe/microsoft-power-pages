
export default function decorate(block) {
  block.classList.add('columns-usecases');

  // Select the direct children of the block
  const rows = block.querySelectorAll(':scope > div');
  
  rows.forEach((row) => {
    row.classList.add('columns-usecases-row');
    const items = row.querySelectorAll(':scope > div');
    items.forEach((item) => {
      item.classList.add('columns-usecases-item');

      const imgWrapper = item.querySelector('picture');
      if (imgWrapper) {
        imgWrapper.classList.add('columns-usecases-img-wrapper');
      }

      const img = item.querySelector('img');
      if (img) {
        img.classList.add('columns-usecases-img');
      }

      const h3 = item.querySelector('h3');
      if (h3) {
        h3.classList.add('columns-usecases-title');
      }

      const pTags = item.querySelectorAll('p');
      if (pTags.length > 1) {
        pTags[1].classList.add('columns-usecases-description');
      }

      const a = item.querySelector('a');
      if (a) {
        a.classList.add('columns-usecases-link');
      }
    });
  });
}
