import Aboutme from "./components/aboutme/aboutme";
import ContactForm from "./components/contactform/contactform";
import Education from "./components/education/education";
import Generics from "./components/generics/generics";
import ProfileAvatar from "./components/profileavatar/profileavatar";
import Timeline from "./components/timeline/timeline";

export default function Body() {
    return (
        <div className="w-screen">
            <div className="h-screen m-7">
                <ProfileAvatar />
            </div>
            <div className="m-7">
                <Aboutme />
                <Timeline />
            </div>
            <div className="m-7">
                <Education />
            </div>
        </div>
    );
}