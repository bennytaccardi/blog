export default function Education() {
    return (
        <div id="education" className="container mx-auto py-12 flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-200 text-center mb-20">Education</h2>

                <div className="border-l-2 border-info-100 sm:max-w-xl sm:mx-auto w-full sm:px-0">
                    <ol>
                        <li>
                            <div className="flex flex-col md:flex-row">
                                <div
                                    className="rounded-full bg-zinc-800 border-white border-4 w-12 sm:w-17 h-12 sm:h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                </div>
                                <div className="mb-6 md:ml-10 block max-w-md rounded-lg bg-neutral-50 p-4 sm:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-xl font-bold">Master&apos;s degree</p>
                                        <p className="text-gray-500 text-lg font-extralight sm:text-xl">2019 - 2021</p>
                                    </div>
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-sm text-gray-600 font-bold">Computer Engineering</p>
                                    </div>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        Database, IoT, Network Systems, Parallel Algorithms, Operative Systems, DSS, Robotics, Deep Learning & Computer Vision, Machine Learning, Software Engineering
                                    </p>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        I wrote three scientific papers:
                                    </p>
                                    <ul>
                                        <li className="mb-3">
                                            <a className="text-blue-500 underline" href="https://www.researchgate.net/publication/348256234_An_innovative_AAL_system_based_on_neural_networks_and_IoT-aware_technologies_to_improve_the_quality_of_life_in_elderly_people">An innovative AAL system based on neural networks and IoT-aware technologies to improve the quality of life in elderly people</a>;
                                        </li>
                                        <li className="mb-3">
                                            <a className="text-blue-500 underline" href="https://www.researchgate.net/publication/334887168_A_Smart_Approach_able_to_face_Distraction_Issue_due_to_Smartphone_Usage_running_Social_Networks">A Smart Approach able to face Distraction Issue due to Smartphone Usage running Social Networks</a>;
                                        </li>
                                        <li>
                                            <a className="text-blue-500 underline" href="https://www.researchgate.net/publication/362470893_HF-SCA_Hands-Free_Strong_Customer_Authentication_Based_on_a_Memory-Guided_Attention_Mechanisms">HF-SCA: Hands-Free Strong Customer Authentication Based on a Memory-Guided Attention Mechanisms</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-col md:flex-row">
                                <div
                                    className="rounded-full bg-zinc-800 border-white border-4 w-12 sm:w-17 h-12 sm:h-17 absolute -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                </div>
                                <div className="mb-6 md:ml-10 block max-w-md rounded-lg bg-neutral-50 p-4 sm:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-xl font-bold">Bachelor&apos;s degree</p>
                                        <p className="text-gray-500 text-lg font-extralight sm:text-xl">2015 - 2019</p>
                                    </div>
                                    <div className="mb-2 flex justify-between">
                                        <p className="text-sm text-gray-600 font-bold">Computer Engineering</p>
                                    </div>
                                    <p className="mb-4 text-neutral-700 dark:text-neutral-200">
                                        Software Engineering, Math, Geometry, Physics, Statistics, Probability, Digital & Analog Electronic, Database
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