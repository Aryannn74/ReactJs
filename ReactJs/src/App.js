import './App.css';

function Book(props) {
  return (
  <div className='books'>
  <p>book name = {props.name} </p>
  <p>book id = {props.id}</p>
  </div>
  );
}

function App() {
  const library = "This library consists all Books";
  const year = 2026;
  return (
    <div>
      <p>Project : {library}</p>
      <p>Year : {year} </p>
      <Book name ="Harry potter" id="1011"/>
      <Book name ="Internet security" id="4102"/>
      <Book name ="Data Science" id="5103"/>

    </div>
  );
}

export default App;
