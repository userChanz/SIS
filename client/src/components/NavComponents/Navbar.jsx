import { NavItems } from "./NavItems"

export function Navbar() {
    return (
        <>
        <nav className="text-center w-100">
            <div className="title  mb-5 border-bottom">
                <h1>SIS</h1>
            </div>
            <div className="nav-btn p-4 d-flex flex-column align-items-start gap-4">
                <NavItems />
            </div>
        </nav>
            
        </>
    )
}