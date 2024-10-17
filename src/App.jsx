import "./App.css";

function App() {
  return (
    <>
      <main className="pt-10 mx-24 font-primary h-screen flex flex-col gap-14 ">
        <h1 className="text-5xl mb-6 font-primaryBold">Heyy👋🏻, This is Vikash Patel</h1>
        <div className="flex flex-col gap-5 w-3/5 text-2xl">
        <p>
          Welcome to my website. I&apos;m Vikash Patel—a full-stack developer,
          problem solver, and future tech innovator. I build platforms that push
          boundaries, combining cutting-edge tech with real-world impact. Right
          now, I&apos;m working on something big. Let&apos;s just say, it&apos;s
          going to redefine how you think about social media automation. Stay
          tuned.
        </p>
        <p>
          I don&apos;t just code; I create. Whether it&apos;s AI integration,
          slick web apps, or scaling a startup from zero to infinity, I&apos;m
          all in. Ready to disrupt industries and make things happen.
        </p>
        <p>
          Explore what I&apos;ve built at{" "}
          <a href="https://github.com/vikashpatel04" className='underline underline-offset-2 decoration-blue-500'>projects</a> and stick
          around—things are just getting started.
        </p>
        </div>
      </main>
    </>
  );
}

export default App;
