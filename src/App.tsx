import React from "react";
import MyForm from "./components/MyForm";
import ReducerSample from "./components/ReducerSample";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};
export default App;
