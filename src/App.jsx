import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { DiscographyPage } from "./pages/DiscographyPage/DiscographyPage";
import { AlbumPage } from "./pages/AlbumPage/AlbumPage";
import { Route, Routes, BrowserRouter } from "react-router";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/discography" element={<DiscographyPage />} />
                    <Route
                        path="/discography/:albumId"
                        element={<AlbumPage />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
