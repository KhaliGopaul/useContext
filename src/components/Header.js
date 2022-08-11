const Header = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>

        <li>
          <a href="">Links</a>
        </li>
      </ul>

      <div className="menu">
        <a href="" className="menu__link">
          link 1
        </a>
        <a href="" className="menu__link">
          link 2
        </a>
        <a href="" className="menu__link">
          link 3
        </a>
      </div>
    </>
  );
};

export default Header;
