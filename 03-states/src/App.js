import NumberBox from './NumberBox'
import ImageSwitcher from './ImageSwitcher'
import Counter from './Counter'
import Timer from './Timer'

function App() {
  return (
    <div className="App">
        <Timer/>
        <Counter/>
        <NumberBox startingNumber={10}/>
        <ImageSwitcher/>

    </div>
  );
}

export default App;
