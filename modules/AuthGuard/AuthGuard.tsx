import React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'


export const AuthGuard: React.FC<any> = ({ children }) => {
  // const router = useRouter()
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     return router.push('/login');
  //   },
  // })

  // if (status === "loading" && router.pathname !== "/login") {
  //   return "Loading or not authenticated...";
  // }

  return children;
}