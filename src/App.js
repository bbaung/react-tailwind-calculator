// import logo from './logo.svg';
// import './App.css';
import Calculator from "./components/Calculator";


function App() {
  return (
    <div className="py-5">
      <div className="w-[1280px] mx-auto bg-gray-50">

        <div className="flex flex-col w-full ml:w-80 h-[1500px] ml:h-auto mx-auto">
          <Calculator/>
        </div>

      </div>
    </div>
  );
}

export default App;
