import Aboutme from "./components/aboutme/aboutme";
import Generics from "./components/generics/generics";
import ProfileAvatar from "./components/profileavatar/profileavatar";
import Timeline from "./components/timeline/timeline";

export default function Body () {
    return (
        <>
        <div className="h-screen">
            <ProfileAvatar/>
        </div>
        <div>
            <Aboutme />
            <Timeline />
        </div>
        </>
    );
}