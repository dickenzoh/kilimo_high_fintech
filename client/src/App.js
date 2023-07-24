import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import Spinner from "./components/spinner/spinner";

const LazyRegister = lazy(() => import("./pages/Register/Register"));
const LazyStreams = lazy(() => import("./pages/Streams/Streams"));
const LazySingleStream = lazy(() =>
  import("./pages/SingleStream/SingleStream")
);
const LazySingleStudentPage = lazy(() =>
  import("./pages/SingleStudentPage/SingleStudentPage")
);
const LazyStudentsPage = lazy(() => import("./pages/Students/StudentsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazyRegister />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazyRegister />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/streams"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazyStreams />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/stream/:id"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazySingleStream />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/students"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazyStudentsPage />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/student/:id"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazySingleStudentPage />
              </Suspense>
            </MasterLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
