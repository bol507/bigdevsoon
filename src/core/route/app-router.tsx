import { lazy, ReactNode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AppLayout = lazy(() => import("../../shared/layouts/app-layout"));
const HomePage = lazy(() => import("../../features/home/pages/home"));
const RestaurantReservationPage = lazy(() => import("../../features/restaurant-reservation/pages/restaurant-reservation"));
const TaskBoardPage = lazy(() => import("../../features/task-board/pages/task-board"));


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
          <Route index element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
            } />
          <Route path="restaurant-reservation" element={
            <Suspense fallback={<div>Loading...</div>}>
              <RestaurantReservationPage />
            </Suspense>
            } />
          <Route path="task-board" element={
            <Suspense fallback={<div>Loading...</div>}>
              <TaskBoardPage />
            </Suspense>
            } />
        
        </Route>
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;