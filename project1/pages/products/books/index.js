import Link from 'next/link';
import Image from "next/image"

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const BooksList = () => {
  return (
    <div>
      <h1>BooksList</h1>
      {source.map((elem) => {
        const imgSrc = `https://picsum.photos/id/${elem}/250/300`
        return (
          <div key={elem} >
            <h5>book {elem}</h5>
            <p><Link href={`/products/books/${elem}`} >Click to see details</Link> </p><br />
            <Image src={imgSrc} loader={() => imgSrc} unoptimized
              width="250" height="250" alt='' /><hr />
          </div>
        )
      })}
    </div>
  )
}

export default BooksList