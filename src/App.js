import "./App.css";
import Button from "./components/UI/Button";
import CheckBox from "./components/UI/CheckBox";
import AllRoute from "./route/AllRoute";

function App() {
  return (
    <div className="App">
      <AllRoute />
      <CheckBox/>
      <Button>Sing in</Button>
    </div>
  );
}

export default App;
