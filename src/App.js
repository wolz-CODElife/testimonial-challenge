import Navbar from "./layouts/Navbar";
import Testimonials from "./layouts/Testimonials";

function App() {
  return (
    <div className='bg-white m-0 p-0 font-Poppins'>
      {/* Navbar component begins here */}
      <Navbar />
      {/* Navbar component ends here */}   

      {/* Body subheader begines here */}
      <div className="mt-16 p-10 flex flex-col items-center justify-center">
        <img src="https://i.postimg.cc/XYzvKYLC/image.png" alt="badge" className="h-16 w-16" />
        <div className="flex my-3 relative">
          <h2 className="text-3xl font-bold font-Poppins">Testimonials I’ve left</h2> 
          <span className="border-[1px] border-border-grey text-lable-secondary font-medium w-12 h-8 rounded-full flex items-center justify-center absolute right-[-70px] top-0">47</span>
        </div>
        <img src="https://i.postimg.cc/9M4ZPkyW/image.png" alt="svg" className="h-5 w-20" />
      </div>
      {/* Body subheader ends here */}

      {/* Testimonials component begins here */}
      <Testimonials />
      {/* Testimonials component ends here */}   

    </div>
  );
}

export default App;
