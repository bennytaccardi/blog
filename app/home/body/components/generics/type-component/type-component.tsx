import Typed from "react-typed";

export default function TypeComponent() {
    return (
        <div className="font-mono text-3xl space-x-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-900 to-teal-500
            sm:text-4xl sm:space-x-4
            md:text-5xl md:space-x-5
            lg:text-6xl lg:space-x-6
            xl:text-7xl xl:space-x-7
            ">
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