import './styles.css';
import { TypeAnimation } from 'react-type-animation';

export default function Generics() {

    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-300 md:text-5xl lg:text-8xl">Benny Taccardi</h1>
            <p className="mb-4 text-base font-bold text-gray-700 md:text-lg lg:text-xl leading-none">Backend Software Engineer @Unobravo</p>
            <div className="font-mono text-5xl flex space-x-3 ">
            <TypeAnimation
              sequence={[
                2000,
                'I am a software engineer',
                2000,
                'I am a backend engineer',
                2000,
                'I am a thinker',
                2000,
                'I love tech stuff',
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