import { createFileRoute, redirect } from '@tanstack/react-router'
import Home from '../pages/Home'


export const Route = createFileRoute('/about')({
  component: RouteComponent,
//   beforeLoad: async ({ location }) => {
//    throw redirect({
//         to: '/login',
//         search: {
//         //   redirect: location.href,
//         },
//       })
    // try {
    //   const user = await verifySession() // might throw on network error
    //   if (!user) {
    //     throw redirect({
    //       to: '/login',
    //       search: { redirect: location.href },
    //     })
    //   }
    //   return { user }
    // } catch (error) {
    //   // Re-throw redirects (they're intentional, not errors)
    //   if (isRedirect(error)) throw error

    //   // Auth check failed (network error, etc.) - redirect to login
    //   throw redirect({
    //     to: '/login',
    //     search: { redirect: location.href },
    //   })
    // }
//   },
})

function RouteComponent() {
  return <>
  <Home></Home>
  </>
}
