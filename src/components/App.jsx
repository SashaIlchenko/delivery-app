import { Layout } from "../Layout";
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

const ShopPage = lazy(() => import('../pages/ShopPage'));
const BascetPage = lazy(() => import('../pages/BascetPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route path="/cart" element={BascetPage} />
      </Route>
    </Routes>
  );
};
