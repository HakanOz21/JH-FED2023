import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookEditDetails from "./components/BookEditDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBook from "./components/AddBook";
import Login from "./components/Login";
import AboutPage from "./components/AboutPage";
import { UserContextProvider } from "./models/LoginContext";
import PrivateRoute from "./models/PrivateRoute";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />

          {/* These are just for logged users available */}
          <Route element={<PrivateRoute />}>
            <Route path="/books/:id/edit" element={<BookEditDetails />} />
            <Route path="/books/add" element={<AddBook />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}
export default App;
