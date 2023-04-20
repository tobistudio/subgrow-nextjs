import { useRouter } from "next/router"
import HomeLayout from "core/layouts/HomeLayout"
import { SignupForm } from "auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <HomeLayout type="signup" title="Sign Up">
      {/*<SignupForm onSuccess={() => router.push(Routes.Home())} />*/}
      <SignupForm
        onSuccess={(_user) => {
          console.log("SignupForm onSuccess,", _user)
          // TODO: very slow to forward to next page, needs loading
          const next = router.query.next
            ? decodeURIComponent(router.query.next as string)
            : "/dashboard"
          return router.push(next)
        }}
      />
    </HomeLayout>
  )
}

export default SignupPage
