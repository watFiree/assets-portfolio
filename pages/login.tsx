import Head from 'next/head'
import { signIn } from "next-auth/react"
import { Button } from '@mantine/core'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>

        <Button onClick={() => signIn('google', { callbackUrl: '/' })}>Login with Google</Button>
        <Button onClick={() => signIn('apple', { callbackUrl: '/' })}>Login with Apple</Button>
      </main>
    </>
  )
}
