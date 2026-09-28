import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
