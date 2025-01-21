import st from "./Header.module.scss";
import useHeader from "./hooks/useHeader";
import { reload } from "./utils";
import clsx from "clsx";

const Header = () => {
  const { isShow } = useHeader();

  console.log(isShow);
  return (
    <header className={clsx(isShow && st.background)}>
      <img
        src="/images/logo.png"
        onClick={reload}
        className={st.logo}
        alt="logo"
      />
      <img src="/images/avatar.png" className={st.avatar} alt="avatar" />
    </header>
  );
};

export default Header;
