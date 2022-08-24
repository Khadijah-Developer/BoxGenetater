import { useState } from "react";

function useInputHook() {
   const [inputColor, setInputColor] = useState("");
  function handleChange(event) {
    setInputColor(event.target.value);
  }

    return {
        value: inputColor,
        onChange: handleChange
    }
}
export { useInputHook };