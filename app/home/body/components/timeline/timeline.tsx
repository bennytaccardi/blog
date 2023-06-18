export default function Timeline() {
    return (
        <div id="careers" className="container mx-auto py-12 flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-200 text-center mb-20">Careers</h2>

                <div className="border-l-2 border-info-100 sm:max-w-xl sm:mx-auto w-full sm:px-0 ">
                    <ol>
                        <li>
                            <div className="flex flex-col md:flex-row">
                                <div className="rounded-full bg-zinc-800 border-white border-4 w-12 sm:w-17 h-12 sm:h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <img src="/static/imgs/unobravo.png" alt="Icon" className="w-6 sm:w-8 h-6 sm:h-8" />
                                </div>
                                <div className="mb-6 md:ml-10 block max-w-md rounded-lg bg-neutral-50 p-4 sm:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-xl font-bold">Unobravo</p>
                                        <p className="text-gray-500 text-lg font-extralight sm:text-xl">Apr. 2023 - current</p>
                                    </div>
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-sm text-gray-600 font-bold">Backend Engineer</p>
                                    </div>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        Unobravo is the first online psychology service formed by a diverse team of psychologists and psychotherapists who exclusively work through video calls, providing a flexible, accessible, and convenient service.                                    </p>
                                    <ul className="mb-4 italic text-neutral-700 dark:text-neutral-200">
                                        <li>NodeJS, Typescript, Javascript</li>
                                        <li>AWS</li>
                                        <li>CI/CD using GitHub Actions</li>
                                        <li>Scrum</li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-col md:flex-row">
                                <div className="rounded-full bg-zinc-800 border-white border-4 w-12 sm:w-17 h-12 sm:h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <img src="/static/imgs/engineering.png" alt="Icon" className="w-6 sm:w-8 h-6 sm:h-8" />
                                </div>
                                <div className="mb-6 md:ml-10 block max-w-md rounded-lg bg-neutral-50 p-4 sm:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-xl font-bold">Engineering</p>
                                        <p className="text-gray-500 text-lg font-extralight sm:text-xl">Dec. 2021 - Apr. 2023</p>
                                    </div>
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-sm text-gray-600 font-bold">Software Engineer</p>
                                    </div>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        Engineering S.p.A. is one of the largest consulting companies in Italy, specializing in various areas. In my case, I have worked specifically in the field of Research and Development (R&D).                                    </p>
                                    <ul className="mb-4 italic text-neutral-700 dark:text-neutral-200">
                                        <li>FastAPI, Python, SpringBoot, Java, GeoPandas</li>
                                        <li>Angular, React</li>
                                        <li>Apache Superset</li>
                                        <li>Postgres, PostGIS</li>
                                        <li>Docker, VMWare</li>
                                        <li>Postgres, PostGIS. QGis</li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-col md:flex-row">
                                <div className="rounded-full bg-zinc-800 border-white border-4 w-12 sm:w-17 h-12 sm:h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <img src="/static/imgs/vidyasoft.png" alt="Icon" className="w-6 sm:w-8 h-6 sm:h-8" />
                                </div>
                                <div className="mb-6 md:ml-10 block max-w-md rounded-lg bg-neutral-50 p-4 sm:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-xl font-bold">Vidyasoft</p>
                                        <p className="text-gray-500 text-lg font-extralight sm:text-xl">Sept. 2020 - Dec. 2021</p>
                                    </div>
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-sm text-gray-600 font-bold">Software Engineer</p>
                                    </div>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        Vidyasoft s.r.l is a fintech consultancy company that primarily focuses on cloud and IoT solutions for finance. During my time at Vidyasoft, I developed a deep-learning-based fraud detection algorithm, which can be found <a href="https://www.mdpi.com/1758766" className="text-blue-500 underline">here</a>.
                                    </p>
                                    <ul className="mb-4 italic text-neutral-700 dark:text-neutral-200">
                                        <li>SpringBoot, Angular, Python</li>
                                        <li>SQServer, Docker</li>
                                        <li>DialogFlow</li>
                                        <li>PyTorch</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}