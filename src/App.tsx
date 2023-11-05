import Logo from "./assets/logo";

function App() {
  return (
    <div className="min-h-screen h-full w-screen bg-teal-700 py-12 px-12 flex justify-center">
      <div className="max-w-3xl">
        <header className="flex-row mb-[10vh]">
          <Logo width={60} height={60} color="#fff7ed" />
        </header>
        <div>
          <h1 className="text-4xl font-display text-orange-50 flex items-center py-8">
            Hi
          </h1>
          <p className="text-2xl font-display text-orange-50 py-8">
            My name is Betty Kronemeijer. I am a software engineer from the
            Netherlands and I'm currently working at{" "}
            <a className="text-orange-600 underline" href="https://www.q42.nl/">
              Q42
            </a>
            . I love creating beautiful interfaces that are sleek, but also fun
            and easy to use. Having a background in geography, I also enjoy
            visualising and making spatial data accessible.
          </p>
          <p className="text-2xl font-display text-orange-50 py-8">
            In my spare time, I enjoy doing anything related to water. From
            drinking it to sailing and surfing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
