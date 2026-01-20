function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="original_release_date">{book.original_release_date}</p>
      <p className="genre">{book.genre}</p>
      <p className="description">{book.description}</p>
      <button>Add to reading list</button>
    </div>
  );
}

export default BookCard;