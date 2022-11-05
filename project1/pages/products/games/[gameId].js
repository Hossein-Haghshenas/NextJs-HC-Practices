import { useRouter } from 'next/router';

const gameDetail = () => {
    const router = useRouter()
    const gameId = router.query.gameId
    return (
        <div>Details for game {gameId} </div>
    )
}

export default gameDetail