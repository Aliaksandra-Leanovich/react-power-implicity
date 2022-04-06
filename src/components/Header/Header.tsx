import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="slider">
        <h1 className="slider__title">The Power of Simplicity</h1>
        <p className="slider__text">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button aria-label="learn" className="slider__button">
          Learn
        </button>
        <ol className="slider__list">
          <li className="slider__eclipse"></li>
          <li className="slider__eclipse"></li>
          <li className="slider__eclipse slider__eclipse--active"></li>
          <li className="slider__eclipse"></li>
          <li className="slider__eclipse"></li>
        </ol>
      </div>
    </header>
  );
};
export default Header;
