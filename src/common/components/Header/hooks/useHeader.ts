import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const useHeader = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsShow(true);
      else setIsShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const onClickReload = () => {
    navigate("/");
  };

  return { isShow, searchKeyword, onChangeKeyword, onClickReload };
};

export default useHeader;
