import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
import MyName from "./components/MyName";
import Form from "./components/Form";

import Mycount from "./components/Mycount";
import Users from "./components/Users";
import Event from "./components/Event";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="John FrontEnd developer" />
      <Title name="John Mobile developer" />
      <Title name="John Blockchain developer" />
      <MyName />
      <Form />
      <Mycount />
      <Users />
      <Event />
      <Alert/>
    </div>
  );
}

export default App;
