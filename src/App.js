import Header from "./componentes/Header/Header";
import Footer from "./componentes/footer/footer";
import Home from "./page/Home/Home";
import Nav from "./componentes/nav/nav";
import "./style.css"
import Card from "./componentes/Card/Card";

import StyledGlobal, {ContainerMain, TelaInteira} from "./styledGlobal";

function App() {

  function reproduzirVideo() {
    alert("O vídeo está sendo reproduzido")

  }

  return (
    <>
    <StyledGlobal/>

    {/* <div class="tela-inteira"> */}
    <TelaInteira>
      <Header/>

        <ContainerMain>
            <Nav/>

            <Home reproduz={reproduzirVideo}/>
          </ContainerMain>

        
      <Footer/>
    {/* </div> */}
    </TelaInteira>
  </>
  );
}

export default App;
