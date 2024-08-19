const App = () => {
  const [test, setTest] = React.useState("버튼");
  const handleButton = (e) => {
    const text = e.target.textContent;
    text === "클릭해라" ? setTest("클릭했다.") : setTest("눌렀다.");
  };
  return (
    <>
      <h1>{test}</h1>
      <button onClick={(e) => handleButton(e)}>클릭해라</button>
      <button onClick={(e) => handleButton(e)}>눌러라</button>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
