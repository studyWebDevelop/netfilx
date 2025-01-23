import MovieRow from "../common/components/MovieRow";
import Banner from "../components/Banner";
import { MovieRowList } from "../constants/MovieRowList";

const MainPage = () => {
  return (
    <>
      <Banner />
      <div style={{ padding: "30px 0" }}>
        {MovieRowList.map((row) => (
          <MovieRow key={row.id} {...row} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
