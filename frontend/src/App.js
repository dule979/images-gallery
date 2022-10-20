import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <Header title="Image Gallery" />
      <Search input={input} onInput={setInput} onHandleInput={handleInput} />
    </div>
  );
}

export default App;
