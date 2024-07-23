
export default function decorate(block) {
  // Add a class to the main container
  block.classList.add('columns-prices');

  // Select all inner divs
  const innerDivs = block.querySelectorAll(':scope > div > div');

  innerDivs.forEach((div) => {
    // Add a class to each pricing column
    div.classList.add('pricing-column');

    // Add specific classes to elements for styling
    const title = div.querySelector('h3');
    if (title) title.classList.add('pricing-title');

    const paragraphs = div.querySelectorAll('p');
    paragraphs.forEach((p, pIndex) => {
      if (pIndex === 2) {
        p.classList.add('price');
      } else if (pIndex === 3) {
        p.classList.add('action');
      }
    });

    const links = div.querySelectorAll('a');
    links.forEach((link, lIndex) => {
      if (lIndex === 0) {
        link.classList.add('superscript-link');
      } else {
        link.classList.add('buy-now');
      }
    });
  });
}
