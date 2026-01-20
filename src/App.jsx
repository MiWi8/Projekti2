import { useState, useEffect } from "react"
import CreateAccountPage from "./Pages/CreateAccountPage.jsx"
import SignInPage from "./Pages/SignInPage.jsx"
import MyBooks from "./Pages/MyBooksPage.jsx"
import HomePage from "./Pages/Home.jsx"
import Button from "./Components/Button.jsx"
import "./Components/Button_style.css"
import "./StyleGlobal/Global.css"

const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }
    return (
        <div className="app-container backround-color">
          <h1 onClick={() => handleNavigate("home")} style={{ cursor: "pointer" }}>Kirja sovellus</h1>
          <nav className="navbar">
            {/*{<Button 
              onClick={() => handleNavigate("home")}
              variant={currentPage === "home" ? "primary" : "secondary"}
              className="mybutton"
            >
              Home
            </Button>*/}
            <Button 
              onClick={() => handleNavigate("mybooks")}
              variant={currentPage === "mybooks" ? "primary" : "secondary"}
              className="mybutton"
            >
              Kirjat
            </Button>
            <Button 
              onClick={() => handleNavigate("signinpage")}
              variant={currentPage === "signinpage" ? "primary" : "secondary"}
              className="rightsidebuttons"
            >
              Kirjaudu sisään
            </Button>
            <Button 
              onClick={() => handleNavigate("createaccountpage")}
              variant={currentPage === "createaccountpage" ? "primary" : "secondary"}
              className="rightsidebuttons"
            >
              Luo Tili
            </Button>
          </nav>
          <div className="page-content">
            {currentPage === "home" && <HomePage />}
            {currentPage === "mybooks" && <MyBooks />}
            {currentPage === "signinpage" && <SignInPage />}
            {currentPage === "createaccountpage" && <CreateAccountPage />}
          </div>
          <div className="footer">
            <p></p>
            <p></p>
          </div>
        </div>
    )
}


export default App
