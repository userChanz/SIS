import { Navbar } from "./components/NavComponents/Navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <>
        <div className="body row vh-100 w-100 m-0">
            <div className="nav col-sm-3 p-3 m-0">
                <Navbar />
            </div>
            <main className="main col-sm-9 p-3 m-0">
                    <Outlet />
            </main>
            
        </div>
        
        
        </>
    )
}