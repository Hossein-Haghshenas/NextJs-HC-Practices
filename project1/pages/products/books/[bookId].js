import { useRouter } from 'next/router';

const BookDetail = () => {
    const router = useRouter()
    const bookId = router.query.bookId
    return (
        <div>Details for book {bookId} </div>
    )
}

export default BookDetail