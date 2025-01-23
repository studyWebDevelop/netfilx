import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import TanStackQueryClientProvider from "./provider/TanStackQueryClientProvider";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <TanStackQueryClientProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TanStackQueryClientProvider>
  );
};

export default App;
