import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./pages/layouts/RootLayout";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="product" element={<ProductPage />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <div className="bg-background-purple">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
