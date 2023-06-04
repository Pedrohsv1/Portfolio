import axios from "axios";
import { useEffect, useState } from "react";
import { Skill } from "./components/Skills";
import { Link } from "./components/LinkContact";
import { H1, H2, Li } from "./components/comp";

interface IUser {
  name: string;
  avatar_url: string;
  login: string;
}

interface IRepos {
  name: string;
  html_url: string;
  description: string;
  visibility: number;
  homepage: string | null;
  language: string;
}

const App = () => {
  const [user, setUser] = useState<IUser | undefined>();
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Pedrohsv1")
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://api.github.com/users/Pedrohsv1/repos")
      .then(function (response) {
        setRepos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={`flex justify-center ${darkMode ? 'dark' : ''} transition-all`}>
      
      {/* O conteúdo do seu aplicativo aqui */}
      <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 md:m-4 md:min-w-[740px] lg:min-w-[900px] lg:max-w-[1024px] sm:min-w-[600px] min-w-[333px] m-6 gap-4 bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl font-body">
        <div className="lg:col-span-3 md:col-span-2 md:mb-0 mb-4 flex justify-end">
          <button onClick={toggleDarkMode} className="bg-indigo-100 dark:bg-gray-800 p-1 rounded-md dark:hover:bg-gray-950 hover:bg-indigo-200 transition-all"><img src={`${darkMode === true ? 'moon.png':'sun.png'}`} height={24} width={24} alt="Modo Dark Butão" /></button>
        </div>
        <div className="flex flex-col gap-6 md:min-w-[320px]">
          {user && ( // Conditionally render user data if available
            <div className="bg-indigo-100 dark:bg-gray-800 flex flex-col gap-6 justify-center items-center p-6 rounded-xl">
              <img src={user.avatar_url} alt="Foto de perfil de Pedro Varela" className="rounded-full border-2 border-indigo-400" height={128} width={128}/>
              <div className="flex flex-col gap-2 justify-center items-center">
                <H1 title={user.login}/>
                <em><p className="text-sm text-gray-700 dark:text-gray-400">Front-End Developer</p></em>
              </div>
            </div>
          )}
          <div className="bg-indigo-100 dark:bg-gray-800 flex flex-col gap-2 p-6 rounded-xl">
            <H2 title="Contact"/>
            <Link url="map-pin.png" description="Map pin" title="Natal, RN" link="https://www.google.com/maps/place/Natal,+RN/@-5.799919,-35.2222442,12z/data=!3m1!4b1!4m6!3m5!1s0x7b3aaac26460531:0x5d8b404cf00fed69!8m2!3d-5.7841695!4d-35.1999708!16zL20vMDMwY3Jt?entry=ttu"/>
            <Link url="briefcase.png" description="Maleta" title="CSA" link="https://csa.cnat.ifrn.edu.br/"/>
            <Link url="github.png" description="Github Logo" title="Pedrohsv1" link="https://github.com/Pedrohsv1"/>
            <Link url="linkedin.png" description="Linkedin" title="Pedro Varela" link="https://www.linkedin.com/in/pedro-varela-185051220/"/>
            <Link url="mail.png" description="Email" title="pedrao.varela@gmail.com" link="mailto: pedrao.varela@gmail.com"/>
          </div>
          <div className="bg-indigo-100  dark:bg-gray-800 grid grid-cols-2 gap-4 p-6 rounded-xl">
            <H2 title="Skills"/>
            <p></p>
            <Skill url="ts.svg" title="TypeScript" description="Logo TypeScript"/>
            <Skill url="js.png" title="JavaScript" description="Logo JavaScript"/>
            <Skill url="tailwind.svg" title="Tailwind" description="Logo Tailwind"/>
            <Skill url="react.png" title="React" description="Logo React"/>
            {/* <Skill url="git.png" title="Git" description="Logo Git"/> */}
            <Skill url="python.png" title="Python" description="Logo Python"/>
            <Skill url="figma.png" title="Figma" description="Logo Figma"/>
          </div>
          
        </div>
        <div className="md:mt-0 mt-4 flex flex-col gap-6 lg:col-span-2">
          <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6">
            <div className="bg-indigo-100 dark:bg-gray-800 flex flex-col gap-4 p-6 rounded-xl">
              <H2 title="Experiencias"/>
              <ul className="flex flex-col gap-4">
                <Li title="Centro de Soluções Aplicas - Incra" description="Aplicação Web React" year="2023"/>
                <Li title="Centro de Soluções Aplicas - Incra" description="Aplicação Web React" year="2022"/>
              </ul>
            </div>
            <div className="bg-indigo-100 dark:bg-gray-800 flex flex-col gap-4 p-6 rounded-xl">
              <H2 title="Estudos"/>
              <ul className="flex flex-col gap-4">
                <Li title="Informática Para Internet - Incra" description="IFRN" year="2020 - 2023"/>
                <Li title="Python" description="Curso em Video" year="2020 - 20212"/>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-100 dark:bg-gray-800 flex justify-between items-center p-6 rounded-xl">
            <H1 title="Meus Projetos"/>
            <a target="_blank" href="https://github.com/Pedrohsv1?tab=repositories" className="text-sm text-gray-500 hover:text-gray-700 transition-all dark:text-gray-400 dark:hover:text-gray-100">Mais</a>
          </div>
          <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6">
            {repos && repos.map((repo, index) => {
              if(index > 3)
              {
                return
              }
              else{
                return(
                  <a href={repo.html_url} key={index} className="bg-indigo-100 dark:bg-gray-800 p-6 rounded-xl grid gap-4 hover:bg-indigo-200 dark:hover:bg-gray-950 transition-all">
                  <div className="flex gap-4 items-center">
                    <img src="folder.svg" alt="Pasta" height={24} width={24}/>
                    <h2 className="text-sm text-gray-700 font-bold dark:text-gray-400">{repo.name}</h2>
                  </div>
                  <div>
                  </div>
                  <div className="h-10">
                    {repo.description &&
                      <p className="text-sm text-gray-500">{repo.description.length > 70 ? repo.description.slice(0, 70) : repo.description}</p>
                    }
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-500">{repo.visibility}</p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <p className="text-sm text-gray-500">{repo.language}</p>
                        <div className={`h-4 w-4 ${repo.language === 'TypeScript' ? 'bg-indigo-400' : '' } ${repo.language === 'JavaScript' ? 'bg-yellow-400' : '' } ${repo.language === 'C#' ? 'bg-emerald-400' : '' } ${repo.language === 'HTML' ? 'bg-orange-400' : '' } ${repo.language === 'CSS' ? 'bg-blue-400' : '' } ${repo.language === 'C++' ? 'bg-red-400' : '' } ${repo.language === 'Python' ? 'bg-green-400' : '' } rounded-full`}></div>
                      </div>
                    </div>
                </a>
                )
              }
            })
          }
          
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
