import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-10 ">
            {" "}
            AI Image Enhancer
          </h1>
          <p className="text-lg text-gray-500">
            Upload your image and let AI to generate image.
          </p>
        </div>
        <Home />
        <div className="text-lg text-gray-500 mt-6">
          <p>Image Upload and Preview</p>
          <p>Powered by @Research Dhamala</p>
        </div>
      </div>
    </>
  );
}

export default App;
