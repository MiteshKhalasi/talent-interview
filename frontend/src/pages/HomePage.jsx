import { SignInButton, SignOutButton, Show, UserButton } from '@clerk/react'
import toast from 'react-hot-toast'

function HomePage() {

    return (
        <div>
            <button
                className='btn btn-secondary'
                onClick={() => toast.success("Toast success")}
            >Click me
            </button>
            <Show when="signed-out">
                <SignInButton mode="modal">
                    <button>Login in</button>
                </SignInButton>
            </Show>
            <Show when="signed-in">
                <SignOutButton />
            </Show>
            <UserButton />
        </div>
    )
}

export default HomePage

//refetch
    //when you focus on the window it fetches data immediately again
    //with tanStack if you want to fetch data you have useQuery()