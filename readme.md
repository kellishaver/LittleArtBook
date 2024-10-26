Little Art Book
====

Little Art Book is a tool designed for displaying small, image-based booklets. You could also use it for a small gallery or portfolio.

It's small (have I mentioned that already?), lightweight, and foregoes fancy animations or transitions in favor of being clean and highly responsive, suitable for both mobile and desktop.

Given that it's meant for art books, it preserves two-page spreads for artwork that spans both pages.

Given that it's meant for *small* art books, page navigation is one way only - simply click the book to cycle through the pages. Click the back cover to return to the front of the book.

All you have to do to use it is call `new Book` and pass in an array of images along with a container element. You can have multiple books on a page, so long as they have unique container elements.

Like this:

````
const images = ['cover.jpg', 'page1.jpg', 'page2.jpg', 'page3.jpg', 'back.jpg'];
const container = document.getElementById('myBook');
new Book(images, container);
````

There are two CSS files. `./css/book.css` is for the book display and `./css/page.css` is for everything else around it.

You can adjust the `max-width` and `max-height` values in `./css/book.css` to incrase or decrease the overall size of the book. 

If you wish to maintain the current aspect ratio, it's: `2(maxHeight x 0.625) = maxWidth`.

The aspect ratio for of your images would then simply be `(imgHeight x 0.625) = imgWidth`.

There's no reason you can't change this ratio if you want to.

Please note, you must have an even number of images or your back cover will not display. This is not a bug - it's how books work.

It might be fun - and should be easy - to make a textbook variant that accepts and renders text or HTML instead of iamges. :)

Comments, questions, venmo cash, and hate mail can all be sent to kelli@kellishaver.com