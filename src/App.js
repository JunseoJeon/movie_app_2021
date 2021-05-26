

function Food({name}){
  return(
    <h2>I like {name} </h2>
  )
}

function App() {
  return (
    <div className="App">
       <h1>hello</h1>
       <Food name="chicken" source={true} kind={["뿌링클",1,2]} />
    </div>
  );
}


export default App;
