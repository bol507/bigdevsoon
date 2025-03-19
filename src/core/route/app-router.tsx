import { lazy, ReactNode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AppLayout = lazy(() => import("../../shared/layouts/app-layout"));

interface AppRouterProps {
  children: ReactNode;
}
export const AppRouter = ({ children }: AppRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AppLayout />
            </Suspense>
          }
        >
          <Route index element={<div>Home</div>} />
        
        </Route>
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;