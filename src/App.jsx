import Lightning from "./components/Lightning";
import BlurText from "./components/BlurText";

function App() {
    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };
    return (
        <>
            <div className="fixed inset-0 z-0">
                <Lightning
                    hue={260}
                    xOffset={0}
                    speed={1}
                    intensity={1}
                    size={3}
                />
            </div>
            <div>
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
                            Hello, My name is
                            <BlurText
                                text="Enmanuel"
                                delay={200}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-center justify-center text-4xl md:text-7xl font-bold text-white"
                            />
                        </h1>
                    </div>
                    <a
                        href="#"
                        className="py-3 px-6 md:py-3 md:px-8 font-medium bg-white rounded-full"
                    >
                        My Projects
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
