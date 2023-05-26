import IArticle from "@/models/article";
import { title } from "process";
import { useEffect, useState } from "react"

export default function Home() {
    const [data, setData] = useState<Array<IArticle>>([]);

    useEffect(() => {
        fetch("api/home")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <p>Home page</p>
            {data.map((item, idx)=><li key={idx}>Title: {item.title} - Description: {item.description} </li>)}
        </div>
    )
}