import Typed from "react-typed";

export default function TypeComponent() {
    return (
        <div className="font-mono text-5xl space-x-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-900 to-teal-500">
            <Typed
                strings={[
                    "I'm a Full Stack Developer",
                    "I Love Software Development",
                    "I Love All My Subscribers",
                ]}
                typeSpeed={75}
                backSpeed={60}
                loop
            />
        </div>
    );
}