class Book {
  constructor(images, container) {
    this.images = images;
    this.container = container;
    this.template = `
      <div class="page">
        <div class="left">
          <div class="spine"></div>
          <img />
        </div>
        <div class="right">
          <div class="spine"></div>
          <img />
        </div>
      </div>
    `;
    
    this.init();
  }

  createBookElement() {
    const book = document.createElement('div');
    book.className = 'book';
    return book;
  }

  createPage(template) {
    const div = document.createElement('div');
    div.innerHTML = template.trim();
    return div.firstChild;
  }

  init() {
    const book = this.createBookElement();
    const numPages = this.images.length;

    if(numPages & 2 !== 0) {
      console.log("WARNING! WARNING! DANGER WILL ROBINSON!\
        \n========================================\
        \nYour book has an uneven number of pages.\
        \nYour last page will not be visible.");
    }

    const finishedBook = this.buildPages(book, numPages);

    book.addEventListener("click", this.handleClick);
    this.container.appendChild(finishedBook);
  }

  buildPages(book, numPages) {
    this.images.forEach((image, idx) => {
      let page = this.createPage(this.template);
      let addPage = true;

      if(idx === 0) {
        page.querySelector('.left').remove();
        page.querySelector('.right').querySelector('img').src = image;
        page.classList.add('current');
      } else if (idx === numPages-1) {
        page.querySelector('.left').querySelector('img').src = image;
        page.querySelector('.right').remove();
      } else {
        if(idx & 2 !== 0) {
          page.querySelector('.left').querySelector('img').src = image;
          page.querySelector('.right').querySelector('img').src = this.images[idx+1];
        } else {
          addPage = false;
        }
      }
      
      if(addPage) {
        book.appendChild(page);
      }
    });

    return book;
  }

  handleClick(event) {
    let firstPage = event.currentTarget.getElementsByClassName('page')[0];
    let visiblePages = event.currentTarget.getElementsByClassName('current');
    let currentPage, nextPage;

    if(visiblePages.length > 0) {
      currentPage = visiblePages[0];
      nextPage = visiblePages[0].nextElementSibling;
    }

    currentPage.classList.remove('current');

    if(nextPage) {
      nextPage.classList.add('current');
    } else {
      firstPage.classList.add('current');
    }
  }
}
