import { useState } from "react";

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // You can perform any necessary actions with the collected email here, such as sending it to a server or storing it in a database.
        console.log(email);
        // Clear the form
        setEmail('');
      };

    return(
        <div>
            <h2 className="text-7xl font-bold text-gray-200 mb-4">Download my CV</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                >
                Submit
                </button>
            </div>
        </form>
        </div>
    );
}