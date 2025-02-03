import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchQuakes } from "../redux/slices/quakesSlice";
// icons
import { RefreshIcon, InfoIcon, GitHubIcon } from "./Icons";
// components
import HeaderBtn from "./HeaderBtn";

function Header() {
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    dispatch(fetchQuakes());
  };

  const openWebsite = () => {
    window.open("https://anastasxgr.github.io");
  };

  const openGitHub = () => {
    window.open("https://github.com/anastasxgr/seismosgr");
  };

  return (
    <div className="header">
      {/* appname and icon */}
      <a className="logo" href="https://seismos.gr" target="_blank" />

      <div className="buttons">
        <HeaderBtn
          tooltip="Ανανέωση λίστας"
          icon={<RefreshIcon />}
          handle={handleRefresh}
        />

        <HeaderBtn tooltip="Σχετικά" icon={<InfoIcon />} handle={openWebsite} />

        <HeaderBtn
          tooltip="Kώδικας"
          icon={<GitHubIcon />}
          handle={openGitHub}
        />
      </div>
    </div>
  );
}

export default Header;
