import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Projects = lazy(() => import("./pages/Projects"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<div style={{ background: "#0b080c", minHeight: "100vh" }} />}>
                <Projects />
              </Suspense>
            }
          />
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;
