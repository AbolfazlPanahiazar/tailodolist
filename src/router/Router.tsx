import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { routes } from "router/routes";

const Router: FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
