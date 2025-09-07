import Lightning from "./components/Lightning";
import BlurText from "./components/BlurText";
import Linksbio from "./pages/Linksbio.jsx";
function App() {
    const handleAnimationComplete = () => {};
    return (
        <>
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Lightning
                        hue={260}
                        xOffset={0}
                        speed={1}
                        intensity={1}
                        size={3}
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
                        Hello, My name is
                        <BlurText
                            text="Enmanuel"
                            delay={400}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-center justify-center text-4xl md:text-7xl font-bold text-white"
                        />
                    </h1>
                </div>
                <a
                    href="#"
                    className="relative z-10 py-3 px-6 md:py-3 md:px-8 font-medium bg-white rounded-full"
                >
                    My Projects
                </a>
            </section>
            {/* El resto del contenido se ve al hacer scroll */}
            <Linksbio />
        </>
    );
}

export default App;
