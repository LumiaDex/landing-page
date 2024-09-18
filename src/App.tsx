import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import GlobalLoading from "./components/GlobalLoading";
import Modal from "./components/Modal/Modal";
import { router } from "./routes";

function App() {
  return (
    <>
      <GlobalLoading />
      <Modal />
      <ToastContainer autoClose={1500} />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
