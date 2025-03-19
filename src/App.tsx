import { Form } from "@/components/form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900 text-white gap-3">
      <h1 className="text-lg">Vite + React + TS</h1>
      <Form />
      <ToastContainer />
    </div>
  );
}

export default App;
