import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import MovieRow from "./common/components/MovieRow";
import Banner from "./components/Banner";
import { MovieRowList } from "./constants/MovieRowList";
import TanStackQueryClientProvider from "./provider/TanStackQueryClientProvider";

const App = () => {
  return (
    <TanStackQueryClientProvider>
      <Header />
      <Banner />
      <div style={{ padding: "30px 0" }}>
        {MovieRowList.map((row) => (
          <MovieRow key={row.id} {...row} />
        ))}
      </div>
      <Footer />
    </TanStackQueryClientProvider>
  );
};

export default App;
