import Link from 'next/link';
import Image from "next/image"

const source = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


const GamesList = () => {
  return (
    <div>
      <h1>GamesList</h1>
      {source.map((elem) => {
        const imgSrc = `https://picsum.photos/id/${elem}/250/300`
        return (
          <div key={elem} >
            <h5>game {elem}</h5>
            <p><Link href={`/products/games/${elem}`} >Click to see details</Link> </p><br />
            <Image src={imgSrc} loader={() => imgSrc} unoptimized
              width="250" height="250" alt='' /><hr />
          </div>
        )
      })}
    </div>
  )
}

export default GamesList