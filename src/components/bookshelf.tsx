import React from 'react'
import Image from 'next/image'
import styles from './bookshelf.module.css'

interface Book {
  url: string
  image: string
  title: string
}

interface BookshelfProps {
  books: Book[]
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  return (
    <div className={styles.bookshelf}>
      {books.map((book, index) => (
        <div key={index} className={styles.book}>
          <a href={book.url} target="_blank" title={book.title}>
            {/* <img src={book.image} alt={book.title} className={styles.image} /> */}
            <Image src={book.image} alt={book.title} width={500} height={500} />
            <div className={styles.title}>{book.title}</div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Bookshelf
