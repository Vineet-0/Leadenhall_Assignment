import MainBody from "./components/MainBody";
import MainCol from "./components/MainCol";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className="w-full min-h-screen flex-col gap-4 overflow-y-scroll hideScrollBar">
        <div>
          <NavBar />
        </div>
        <div className="flex">
          <MainCol />
          <MainBody />
        </div>
      </div>
  );
}

export default App;
