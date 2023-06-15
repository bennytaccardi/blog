import './styles.css';

export default function Generics() {

  return (
    <>
      <h1 className="font-extrabold mb-4 text-4xl leading-none tracking-tight text-transparent text-8xl bg-clip-text bg-gradient-to-r from-violet-400 via-blue-900 to-teal-500 background-animate md:text-5xl lg:text-8xl">
        <a
          className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-te-toggle="tooltip"
          title="Benito"
        >Benny</a> Taccardi</h1>
      <p className="mb-4 text-base font-bold text-gray-700 md:text-lg lg:text-xl leading-none">Backend Software Engineer @Unobravo</p>
    </>
  );
}