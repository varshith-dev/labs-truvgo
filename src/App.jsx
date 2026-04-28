import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorScene from './ErrorScene';

export default function App() {
  return (
    <Routes>
      <Route
        path="/404"
        element={
          <ErrorScene
            code="404"
            title="Page Not Found"
            message="This route does not exist in the TWISTEMS deployment."
          />
        }
      />
      <Route
        path="/500"
        element={
          <ErrorScene
            code="500"
            title="Server Error"
            message="Something failed while serving this request. Please try again shortly."
          />
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
