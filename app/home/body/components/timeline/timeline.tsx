export default function Timeline() {
    return (
        <div id="careers" className="container mx-auto py-12 flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-200 text-center mb-20">Careers</h2>

                <div className="border-l-2 border-info-100 sm:max-w-xl sm:mx-auto w-full sm:px-0 ">
                    <ol>
                        <li>
                            <div className="flex flex-col md:flex-row" >
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
                                        elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
                                    </p>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
                                        elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
                                    </p>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
                                        elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}