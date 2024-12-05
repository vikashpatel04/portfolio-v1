import Profile from '../assets/images/profile.jpg';
import Footer from '../components/Footer';

export default function AboutMe() {
  return (
    <>
    <div className="font-primary w-full h-screen py-4">
        <h1 className="font-primaryBold text-6xl text-center">About Me</h1>
        <div className="flex flex-col items-center justify-center gap-8 pt-8 mx-60 max-lg:mx-32 max-md:mx-8">
            <img src={Profile} alt="Vikash Patel" className="h-40 w-40 rounded-full cursor-none"/>
            <p className="text-xl max-lg:text-lg max-md:text-md text-center">
            Hey! I’m Vikash Patel, a full-stack developer who, umm, kinda loves building stuff that just works, you know? I’m all about making tech feel less complicated and more, well, awesome. Whether it’s coding up cool web apps, experimenting with AI ideas, or brainstorming businesses that people actually need, I’m in my zone.
            <br /><br />
            Oh, and when I’m not at my desk, you’ll probably catch me gaming 🎮, scrolling through random tech articles, or, like, totally getting lost in some good music. I’m also a sucker for learning new things—there’s always something cool out there, right?  
            <br /><br />
            So, yeah, that’s me in a nutshell. Take a look around, and if you vibe with my work, let’s chat! 🚀
            </p>
        </div>
    </div>
    </>
  )
}
