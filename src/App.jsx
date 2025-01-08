import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './components/HomePage/HomePage'
import { Route, Routes, BrowserRouter } from 'react-router'
import './App.css'

function App() {

const albums = [
  {
    id: 1,
    name: "Twenty One Pilots",
    release: 2009,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/a/af/Twenty_One_Pilots_album_cover.png",
    description: "Álbum debut de la banda, lanzado de manera independiente. Contiene temas introspectivos y una mezcla de estilos.",
    color: "#55732E" // Azul grisáceo, representando un inicio introspectivo.
  },
  {
    id: 2,
    name: "Regional at Best",
    release: 2011,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/3/3d/Regional_at_Best.png",
    description: "Un álbum conceptual que sentó las bases del sonido característico de la banda. Contiene varias canciones que luego serían regrabadas para álbumes futuros.",
    color: "#A8DADC" // Amarillo vibrante, reflejando esperanza y energía.
  },
  {
    id: 3,
    name: "Vessel",
    release: 2013,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/0/0f/Twenty_One_Pilots_-_Vessel.png",
    description: "Primer álbum bajo el sello Fueled by Ramen. Combina letras profundas con elementos electrónicos y alternativos.",
    color: "#6B7A8F" // Azul claro, simbolizando introspección y frescura.
  },
  {
    id: 4,
    name: "Blurryface",
    release: 2015,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Blurryface_by_Twenty_One_Pilots.png/220px-Blurryface_by_Twenty_One_Pilots.png",
    description: "Álbum icónico que consolidó a la banda en la escena musical global. Contiene éxitos como 'Stressed Out' y 'Ride'.",
    color: "#741b1b" // Rojo intenso, representando la lucha interna y la pasión.
  },
  {
    id: 5,
    name: "Trench",
    release: 2018,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/f/f3/Trench_Twenty_One_Pilots.png",
    description: "Un álbum conceptual que explora temas de lucha interna y resistencia. Incluye canciones como 'Jumpsuit' y 'My Blood'.",
    color: "#eeca3c" // Amarillo brillante, reflejando la supervivencia y el coraje.
  },
  {
    id: 6,
    name: "Scaled and Icy",
    release: 2021,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Twenty_One_Pilots_-_Scaled_and_Icy.png/220px-Twenty_One_Pilots_-_Scaled_and_Icy.png",
    description: "Un álbum más optimista y colorido, lanzado en medio de la pandemia. Representa un contraste con el tono oscuro de álbumes previos.",
    color: "#f07ba6" // Azul pastel, simbolizando un tono ligero y optimista.
  },
  {
    id: 7,
    name: "Clancy",
    release: 2024,
    urlCover: "https://upload.wikimedia.org/wikipedia/en/d/db/Twenty_One_Pilots_-_Clancy.png", // Placeholder para imagen ficticia.
    description: "",
    color: "#d33a35" // Verde oliva, representando esperanza y resistencia.
  }
];



  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage albums={albums}/>} />
        </Routes> 
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
