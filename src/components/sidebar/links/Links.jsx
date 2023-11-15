const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contacts", "About"];

  const renderedItems = items.map((item) => {
    return (
      <div className="link" key={item}>
        <a href={`#${item}`}>{item}</a>
      </div>
    );
  });
  return <div className="links">{renderedItems}</div>;
};

export default Links;
