export default function Timeline() {
    return (
        <div id="careers">
            <h2 className="text-7xl font-bold text-gray-200 mb-4">Careers</h2>

            <div className="py-9 sm:max-w-xl sm:mx-auto w-full sm:px-0">
                <ol className="border-l-2 border-info-100">
                    <li>
                        <div className="flex-start md:flex">
                            <div className="rounded-full bg-blue-500 border-white border-4 w-17 h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src="/static/imgs/unobravo.png" alt="Icon" className="w-8 h-8" />
                            </div>
                            <div
                                className="mb-10 ml-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div className="mb-1 flex justify-between">
                                        <p className="text-lg font-bold">Unobravo</p>
                                        <p className="text-gray-500 text-lg font-extralight">Apr. 2023 - current</p>
                                </div>
                                <div className="mb-4 flex justify-between">
                                    <p className="text-sm text-gray-600 font-bold"> Backend Engineer</p>
                                </div>
                                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    scelerisque diam non nisi semper, et elementum lorem ornare.
                                    Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                    sodales vehicula.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex-start md:flex">
                            <div
                                className="rounded-full bg-blue-500 border-white border-4 w-17 h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src="/static/imgs/engineering.png" alt="Icon" className="w-8 h-8" />
                            </div>
                            <div
                                className="mb-10 ml-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div className="mb-1 flex justify-between">
                                        <p className="text-lg font-bold">Engineering</p>
                                        <p className="text-gray-500 text-lg font-extralight">Dec. 2021 - Apr. 2023</p>
                                </div>
                                <div className="mb-4 flex justify-between">
                                    <p className="text-sm text-gray-600 font-bold"> Software Engineer</p>
                                </div>
                                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    scelerisque diam non nisi semper, et elementum lorem ornare.
                                    Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                    sodales vehicula.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex-start md:flex">
                            <div
                                className="rounded-full bg-blue-500 border-white border-4 w-17 h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <img src="/static/imgs/vidyasoft.png" alt="Icon" className="w-8 h-8" />
                            </div>
                            <div
                                className="mb-10 ml-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div className="mb-1 flex justify-between">
                                        <p className="text-lg font-bold">Vidyasoft</p>
                                        <p className="text-gray-500 text-lg font-extralight">Sept. 2020 - Dec. 2021</p>
                                </div>
                                <div className="mb-4 flex justify-between">
                                    <p className="text-sm text-gray-600 font-bold"> Software Engineer</p>
                                </div>
                                <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    scelerisque diam non nisi semper, et elementum lorem ornare.
                                    Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                    sodales vehicula.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>


        </div>
    );
}