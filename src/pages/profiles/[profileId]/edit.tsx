// @ts-ignore
import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"
import AdminLayout from "core/layouts/AdminLayout"
import getProfileForEdit from "profiles/queries/getProfileForEdit"
import updateProfile from "profiles/mutations/updateProfile"
import { ProfileForm, FORM_ERROR } from "profiles/components/ProfileForm"
// import ShowProfileIndexAdminPage from "../[profileId]";

export const EditProfile = () => {
  const router = useRouter()
  // const profileId = useParam("profileId", "string")
  const profileId = useParam("profileId", "string")
  // const profileId = useParam("profileId")

  // const profileId = useParam("profileId")
  const [profile, { setQueryData }] = useQuery(
    getProfileForEdit,
    { id: profileId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateProfileMutation] = useMutation(updateProfile)

  return (
    <>
      <h1>Edit Profile {profile.id}</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>

      <ProfileForm
        submitText="Update Profile"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={UpdateProfile}
        initialValues={profile}
        onSubmit={async (values) => {
          try {
            const updated = await updateProfileMutation({
              id: profile.id,
              ...values,
            })
            await setQueryData(updated)
            // await router.push(Routes.ShowProfileIndexAdminPage({ profileId: updated.id }))
            await router.push(`/${updated.username}`)
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </>
  )
}

const EditProfilePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditProfile />
      </Suspense>

      <p>
        <Link href={Routes.ProfilesPage()}>Profiles</Link>
      </p>
    </div>
  )
}

EditProfilePage.authenticate = true
EditProfilePage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>

export default EditProfilePage
