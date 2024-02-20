import {
  RouterProvider as TanstackRouterProvider,
  Outlet,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import PendingComponent from "@/components/generic/PendingComponent";
import NotFoundComponent from "@/components/generic/NotFoundComponent";

/*** Layouts ***/
/*** Layouts ***/

/*** Routes ***/
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: NotFoundComponent,
});
/*** Routes ***/

// Creating route
const routeTree = rootRoute.addChildren([]);

const router = createRouter({
  routeTree,
  defaultPendingComponent: PendingComponent,
});

/*** Routes ***/

// Provider
function RouterProvider() {
  const { loggedInUser } = useAuth();

  useEffect(() => {
    router.invalidate();
  }, [loggedInUser]);

  return <TanstackRouterProvider router={router} />;
}

export default RouterProvider;
