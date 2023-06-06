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
        <div id="contact">
            <h2 className="text-7xl font-bold text-gray-200 mb-4">Get in touch</h2>
            <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <button>Say Hello</button>
        </div>
    );
}