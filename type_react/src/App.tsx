import React from "react";
  import Button from "./button";

  function App() {
      const alarm = () => {
      alert("Hi~");
    };

    return (
      <div>
        <Button width={100} onClick={alarm}>
          <div>This is Button</div>
        </Button>
      </div>
    );
  }

export default App;
