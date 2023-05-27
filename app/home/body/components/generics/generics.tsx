import './styles.css';
import { TypeAnimation } from 'react-type-animation';

export default function Generics() {

    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-300 md:text-5xl lg:text-8xl">Benny Taccardi</h1>
            <p className="mb-4 text-base font-bold text-gray-700 md:text-lg lg:text-xl leading-none">This is a small description.</p>
            <div className="font-mono text-5xl flex space-x-3 ">
            <TypeAnimation
              sequence={[
                2000,
                'I am a software engineer', // Types 'One'
                2000, // Waits 1s
                'I am a backend engineer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'I am a thinker', // Types 'Three' without deleting 'Two'
                () => {
                  console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-mono text-5xl flex space-x-3 text-purple-800"
            />
          </div>
        </>
    );
}