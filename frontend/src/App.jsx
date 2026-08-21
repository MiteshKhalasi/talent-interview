import { SignInButton, SignOutButton, UserButton, Show } from '@clerk/react'

function App() {


  return (
    <>
      <h1>heoo</h1>

      <Show when="signed-out">
        <SignInButton mode="modal">
          <button>Login in</button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <SignOutButton />
      </Show>
      <UserButton />

    </>
  )
}

export default App
