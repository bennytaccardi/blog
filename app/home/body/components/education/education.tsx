export default function Education() {
    return (
        <div id="education">
            <h2 className="text-7xl font-bold text-gray-200 mb-4">Education</h2>
            <div className="py-9 sm:max-w-xl sm:mx-auto w-full sm:px-0">
                <ol className="border-l-2 border-info-100">
                    <li>
                        <div className="flex-start md:flex">
                            <div className="rounded-full bg-blue-500 border-white border-4 w-17 h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                            </div>
                            <div
                                className="mb-10 ml-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div className="mb-1 flex justify-between">
                                    <p className="text-lg font-bold">Master's degree</p>
                                    <p className="text-gray-500 text-lg font-extralight">2019 - 2021</p>
                                </div>
                                <div className="mb-4 flex justify-between">
                                    <p className="text-sm text-gray-600 font-bold"> Computer Engineering</p>
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
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                            </div>
                            <div
                                className="mb-10 ml-10 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div className="mb-1 flex justify-between">
                                    <p className="text-lg font-bold">Bachelor's degree</p>
                                    <p className="text-gray-500 text-lg font-extralight">2015 - 2019</p>
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