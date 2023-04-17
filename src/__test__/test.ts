import Cart from '../Cart';
import Book from '../Book';
import Movie from '../Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);

});

test('add cart Movies', () => {
  const cart = new Cart();
  const movie = new Movie(33, "Avengers", 2012, 'Avengers Assemble', 'Фантастика', 137, 500);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});

test('summPrice', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'book1', 'author1', 23, 100);
  const book2 = new Book(2, 'book2', 'author2', 77, 90);
  const book3 = new Book(3, 'book3', 'author3', 100, 80);
  cart.add(book1);
  cart.add(book2);
  cart.add(book3);
  expect(cart.summPrice()).toBe(270);
  expect(cart.summPriceDiscount(10)).toBe(243);
});

test('deleteId', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'book1', 'author1', 23, 100);
  const book2 = new Book(2, 'book2', 'author2', 77, 90);
  cart.add(book1);
  cart.add(book2);
  expect(cart.items.length).toBe(2);
  cart.deleteId(1)
  expect(cart.items.length).toBe(1);
});
