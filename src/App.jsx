import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { routes } from "./Routes/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ Component, path }, id) => (
            <Route
              index={path ? true : false}
              key={id}
              path={path}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
