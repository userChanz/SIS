
function DashboardContainer() {
    const items = [
        {label: 'Student Total', total: 0},
        {label: 'Courses Total', total: 0},
        {label: 'Instructor Total', total: 0}
    ]
    return (
        <div className="row g-4 w-100 p-4">
            {items.map((item) => {
                const { label, total } = item;

                return (
                    <div key={label} className="dashboard-card col-3 border p-3 rounded d-flex flex-column me-2">
                        <strong className="text-muted">{label}</strong>
                        <span className="fs-2 fw-bold text-dark">{total}</span>
                    </div>
                );
            })}
        </div>
    )
    
    
}

export default DashboardContainer