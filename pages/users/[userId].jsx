// next provides hooks for using params
import { useRouter } from "next/router"

export default function UserIdPage() {
    //open an instance of useRouter
    const router = useRouter()
    // pull the path param
    const { userId } = router.query
    return (
        <div>
            <h1>Hello user with an id of {userId}</h1>
        </div>
    )
}