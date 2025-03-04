
import SocialCard from "./components/social-card";
import MotionCard from "./components/motion-card";
import GithubIcon from "./components/icons/github.icon";
import LinkedinIcon from "./components/icons/linkedin.icon";
import { CursorClickIcon } from "./components/icons/cursor-click.icon";

function App() {
  return (
    <div className="flex flex-col items-center min-h-[600px] min-w-[400px]">
      <div className="w-full bg-white rounded-3xl overflow-hidden relative">
        <div className="p-6 flex flex-col">
          <div className="relative mb-4">
            <img
              src="https://github.com/Darlley.png"
              alt="Darlley"
              width={96}
              height={96}
              className="object-cover rounded-full"
            />
          </div>

          <h1 className="text-3xl font-bold">
            Darlley Brasil de Brito Furtado
          </h1>
          <p className="text-gray-500 mb-6">Desenvolvedor Web Fullstack</p>

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
              <div className="col-start-1 row-start-1">
                <SocialCard
                  icon={<LinkedinIcon className="w-10 h-10" />}
                  title="/darlleybrito"
                  description="linkedin.com"
                  actionLabel="Follow"
                  className="border border-gray-200 h-full bg-blue-50 hover:border-blue-300 text-blue-500"
                  href="https://www.linkedin.com/in/darlleybrito/"
                />
              </div>
              <div className="col-start-1 row-start-2 h-full">
                <SocialCard
                  icon={<GithubIcon className="w-10 h-10" />}
                  title="/Darlley"
                  description="github.com"
                  actionLabel="Follow"
                  className="border border-gray-200 h-full"
                  href="https://github.com/Darlley"
                />
              </div>
              <div className="row-span-2">
                <a href="https://www.figma.com/@darlleybrito" target="_blank">
                  <img
                    src="figma-card.png"
                    className="rounded-xl hover:opacity-80 transition-opacity hover:scale-95 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div className="col-span-2">
              <MotionCard className="text-gray-800 hover:opacity-80 transition-opacity hover:scale-95 transition-transform" />
            </div>
          </div>
        </div>

        <a
          className="absolute top-4 right-4 hover:scale-110 transition-transform"
          href="https://darlley.dev"
          target="_blank"
        >
          <CursorClickIcon className="stroke-1" />
        </a>
      </div>
    </div>
  );
}

export default App;
