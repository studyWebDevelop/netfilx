import Header from "./common/components/Header";
import Banner from "./components/Banner";
import TanStackQueryClientProvider from "./provider/TanStackQueryClientProvider";

const App = () => {
  return (
    <TanStackQueryClientProvider>
      <Header />
      <Banner />
    </TanStackQueryClientProvider>
  );
};

export default App;
