import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      {/* special children props */}
      <Button>Short by date</Button>
      {/* card section */}
      <Card></Card>
      {/* button */}
    </div>
  );
}

export default App;
