import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Detail from "./pages/Detail";
import JsonText from "./pages/jsonText";
import Dashboard from "./pages/dashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/chart" element={<JsonText />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
