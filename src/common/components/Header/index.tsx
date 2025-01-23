import st from "./Header.module.scss";
import useHeader from "./hooks/useHeader";
import clsx from "clsx";

const Header = () => {
  const { isShow, searchKeyword, onChangeKeyword, onClickReload } = useHeader();

  return (
    <header className={clsx(isShow && st.background)}>
      <img
        src="/images/logo.png"
        onClick={onClickReload}
        className={st.logo}
        alt="logo"
      />
      <input
        type="text"
        value={searchKeyword}
        className={st.searchInput}
        onChange={onChangeKeyword}
        placeholder="영화를 검색해주세요."
      />
      <img src="/images/avatar.png" className={st.avatar} alt="avatar" />
    </header>
  );
};

export default Header;
