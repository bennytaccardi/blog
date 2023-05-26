import { use } from "react";
import Footer from "../basic/footer"
import Header from "../basic/header"

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <Header/>
        
            <main>
                {children}
            </main>
        </div>
    )
  }