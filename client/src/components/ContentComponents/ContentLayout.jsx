
function ContentForm({ title, children}) {

    return (
        <>
        <div className="content-title border-bottom mb-5">
            <h1>{title}</h1>
        </div>
        <div className="content-main">
            {children}
        </div>
        </>
    )
}

export default ContentForm