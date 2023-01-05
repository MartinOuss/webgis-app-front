import './App.css';
import { Navbar } from './Components/Navbar';
import {Dashboard} from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar className="z-1000"> </Navbar>
      <section id='Home' >
      <div
        class="container h-screen flex flex-col items-center px-8 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Bringing order to the fields with our simplified scheduling platform
          </h1>
          
          
        </div>
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
      <p class="max-w-sm text-center text-black md:text-left">
          "Our scheduling platform is designed to help oasis farmers and optimize their daily tasks.
          By using our platform to carefully plan and schedule irrigation, 
          farmers can significantly reduce water usage and save valuable resources.
          Additionally, our platform includes a visual map feature that allows farmers to see exactly where each task is located;
           connection points and scheduled fields, making it easier to plan and optimize time. Whether you're managing a small family farm or a large commercial operation,
           our platform has the tools you need to increase productivity and optimize water usage.”
          </p>
          <div class="flex justify-center md:justify-start">
          <button className=' mb-4 mt-4 h-12 py-3  p-1 px-4 text-slate-900 font-bold border border-white  bg-slate-300  hover:bg-black hover:text-white   rounded-md'> 
                Get started </button>
          </div>

      </div>
       
      </div>
      



      </section>
      <section id='Dashboard'>
      <Dashboard/>
      </section>
  
      
    </div>
  );
}

export default App;
