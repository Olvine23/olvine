/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import me from './me.jfif';
import {Header} from './components/Nav';
import {Content} from './components/Content';
import {Content_two} from './components/Extra';
import {Footer} from './components/MyFooter';
import {Statistic} from './components/Stats';
import {Team} from './components/Teams';
import mine from './logo.png';
 
function App() {

 const name = "Olvine George";
  return (
    
<main class=" font-mono bg-white relative overflow-hidden ">
    
    <div class="hidden md:block absolute -bottom-32 -left-32 w-96 h-96">
        <div class="absolute text-extrabold text-xl right-12 z-20 text-start top-1/4">
            <span class="text-7xl">
                🎨
            </span>
            <p>
                Got a project ?
            </p>
            <a href= "#" className="underline">
                Let&#x27;s talk
            </a>
        </div>
        <svg viewBox="0 0 200 200" class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFDBB9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)">
            </path>
        </svg>
    </div>
    <header class="h-24 sm:h-32 flex bg-green-500 items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
                 
                <span class="text-xs text-yellow-500 ml-3 mt-1">
                    {/* olivinegeorge@gmail.com */}
                    <img width="250px"   src={mine} alt="" />
                </span>
            </div>
            <div class="flex items-center ">
                <nav class="font-sen text-gray-800   uppercase text-lg lg:flex items-center hidden">
                    <a href="#" class="py-2 px-6 flex hover:text-yellow-500">
                        Works
                    </a>
                    <a href="#" class="py-2 px-6 flex hover:text-yellow-500">
                        Resume
                    </a>
                    <a href="#" class="py-2 px-6 flex hover:text-yellow-500">
                        Services
                    </a>
                    <a href="#" class="py-2 px-6 flex hover:text-yellow-500">
                        Contact
                    </a>
                </nav>
                <button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="flex relative z-20 items-center">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div class="flex flex-col">
                <img src={me} alt="Olvine George" className="rounded-full w-28  mx-auto"/>
                <p class="text-3xl my-6 text-center  ">
                    Hi, I&#x27;m {name} 🤘
                </p>
                <h2 class="max-w-3xl text-4xl md:text-6xl font-bold mx-auto   text-gray-800 text-center py-2">
                    I build fast scaling applications and stuning websites.
                </h2>
                <div class="flex items-center justify-center mt-4">
                    <a href="#" class="uppercase py-2 my-2 px-4 md:mt-1 bg-transparent dark:text-gray-800 dark:bg-yellow-500 hover:dark:bg-gray-100 border-2  border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-black text-md">
                        CONNECT WITH ME
                    </a>
                   
                </div>
                 
            </div>
        </div>
       
    </div>
    <Header />
    <Content />
    <Content_two />
    <Team />
    <Statistic />
    <Footer/>
     
</main>

  );
}

export default App;
