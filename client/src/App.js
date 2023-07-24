import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import Spinner from "./components/spinner/spinner";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithPopup, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  if (isAuthenticated) {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))
      ? JSON.parse(localStorage.getItem("userDetails"))
      : {};
    userDetails["email"] = user.email;
    userDetails["name"] = user.given_name;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }

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
          path="/student"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazySingleStudentPage />
              </Suspense>
            </MasterLayout>
          }
        />
        <Route
          path="/singlestream"
          element={
            <MasterLayout>
              <Suspense fallback={<Spinner />}>
                <LazySingleStream />
              </Suspense>
            </MasterLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
