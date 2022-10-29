import React from "react";
import "../styles/Home.css";
import IMG from '../images/email.svg';
const Home = ({ isAuth, setIsAuth }) => {
  return (
    <div id="Home" className={`${isAuth.open ? "active" : ""}`}>
      <div className="container">
      <div className="img">
      <img src={IMG} alt="IMG" />
      </div>
      <div className="text-btns">
        <p>Bem vindo a tela de Adimin da L&L Motors aqui você ira cadastrar seu veiculo</p>
        <div className="btns">
        <a
            href="#!"
            className="login-btn"
            onClick={() => setIsAuth({ open: true, form: "login" })}
          >
            Login
          </a>          
          <a
            href="#!"
            className="register-btn"
            onClick={() => setIsAuth({ open: true, form: "register" })}
          >
            {" "}
            Register
          </a>        </div>
        <span>Você pode cadastrar com sua media social</span>
        <div className="via-social">
        <a href="#!">
        <i class="fa-brands fa-facebook-f"></i>
        </a>
        
        <a href="#!">
        <i class="fa-brands fa-google"></i>
        </a>
        
        <a href="#!">
        <i class="fa-brands fa-twitter"></i>
        </a>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Home;
