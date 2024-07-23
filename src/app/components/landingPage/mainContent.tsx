import web3EduLogo from "../../images/Web3EduBrasil_logo.png";
import MainFunctions from "./mainFunctions";
import Image from "next/image";
import UserDocIcon from "../../images/user-doc-icon.svg";
import ForumIcon from "../../images/forum-icon.svg";
import TrailIcon from "../../images/forum-icon.svg";

const MainContent = () => {
  return (
    <div className="h-full pt-12">
      <div className="flex h-5/6 justify-center items-center">
        <section className="flex flex-col text-center py-20 px-20 w-3/5 text-black h-full z-0 overflow-auto justify-center items-center relative">
          <h1 className="text-5xl font-bold text-justify">
            Transforme Conhecimento em Oportunidades de Crescimento
          </h1>
          <p className="mt-4 text-lg text-justify">
            Explore nossos recursos educacionais abrangentes para entender como
            as criptomoedas funcionam e porque a tokenização de ativos está
            transformando diversos setores.
          </p>
        </section>
        <div className="flex w-2/5 h-full justify-center items-center">
          <Image src={web3EduLogo} alt="" className="w-4/6" />
        </div>
      </div>
      <div className="h-dvh">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fcedb2"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,138.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="h-3/5 bg-[#fcedb2] flex justify-center items-center flex-col">
          <p className="text-4xl font-bold text-black">Principais Funções</p>
          <div className="h-4/5 flex justify-evenly items-center w-screen px-10">
            <MainFunctions
              functionName={"Sistema de Recompensas"}
              content={
                "Texto Sistema de Recompensas Texto Sistema de Recompensas Texto Sistema de Recompensas Texto Sistema de Recompensas"
              }
              image={UserDocIcon}
            />
            <MainFunctions
              functionName={"Fórum Colaborativo"}
              content={
                "Nós oferecemos um fórum para que nossos usuários possam compartilhar experiências e relatos relacionados a investimentos, criptomoedas e tecnologia blockchain."
              }
              image={ForumIcon}
            />
            <MainFunctions
              functionName={"Trilhas de Aprendizagem"}
              content={
                "Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem "
              }
              image={TrailIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
