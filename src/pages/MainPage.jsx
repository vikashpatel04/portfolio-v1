import background from '../assets/images/bg.jpg';
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
        <main 
        className="h-screen w-full max-sm:px-3 font-primaryBold flex flex-col items-center justify-center gap-3 bg-cover bg-center max-md:text-center"
        style={{backgroundImage: `url(${background})`}}
        >
          <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl">Heyy..👋🏻, I&apos;m Vikash Patel</h1>
          <p className="text-2xl max-lg:text-xl max-md:text-lg font-primary">Know more <Link to="/about" className="hover:underline decoration-blue-700 max-md:underline">about me</Link>, see <Link to="/projects" className="hover:underline decoration-blue-700 max-md:underline">my projects</Link> and <Link to="/contact" className="hover:underline decoration-blue-700 max-md:underline">contact me</Link> here.</p>
        </main>
    </>
  );
}
