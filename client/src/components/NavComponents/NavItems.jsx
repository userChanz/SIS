import { Link } from "react-router-dom"
import { DashboardIcon, AddStudentIcon, StudentListIcon } from "./NavIcons"

export function NavItems() {
    const links = [
        { to: '/', label: 'Dashboard', Icon: DashboardIcon},
        { to: '/addStudents', label: 'Add Student', Icon: AddStudentIcon},
        { to: '/studentList', label: 'Student List', Icon: StudentListIcon},
    ]

    return (
        /* align-items-stretch forces children to span 100% of the container width */
        <div className="w-100 d-flex flex-column align-items-stretch gap-2">
            {links.map((link) => {
                const { to, label, Icon } = link;

                return (
                    <Link 
                        to={to} 
                        key={to} 
                        className="sidebar-link d-flex align-items-center p-3 text-decoration-none"
                    >
                        <Icon />
                        <span className="text-white ms-3">
                            {label}
                        </span>    
                    </Link>
                )
            })}
        </div>
    )
}