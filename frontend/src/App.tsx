import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./pages/layouts/RootLayout";
import Landing from "./pages/Landing";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <div className="h-screen bg-background-purple">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
