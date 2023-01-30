import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Addexpense from "./pages/add-expense/Addexpense";
import Addcategory from "./pages/add-category/Addcategory";
import Details from "./pages/details/Details";
import Header from "./components/header";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import Edit from "./pages/editExpense/Edit";
import Announcement from "./components/marque/Announcement";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="add-expense" element={<Addexpense />} />
        <Route path="/edit-expense/:id" element={<Edit />} />

        <Route path="details" element={<Details />} />
        <Route path="add-category" element={<Addcategory />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
