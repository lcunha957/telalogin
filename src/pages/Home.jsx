import React from "react";
import "../styles/Home.css";
import IMG from '../images/email.svg';
const Home = () => {
  return (
    <div id="Home">
      <div className="container">
      <div className="img">
      <img src={IMG} alt="IMG" />
      </div>
      <div className="text-btns">
        <p>Bem vindo a tela de Adimin da L&L Motors aqui você ira cadastrar seu veiculo</p>
        <div className="btns">
          <a href="#!" className="login-btn">Login</a>
          <a href="#!" className="register-btn">Register</a>
        </div>
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
