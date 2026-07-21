import  ContentForm from "../components/ContentComponents/ContentLayout.jsx"
import DashboardContainer from "../components/ContentComponents/DashboardContainers"

export function Dashboard() {
    return (
        <>
        <ContentForm title={"Dashboard"}>
            <DashboardContainer />
        </ContentForm>
        </>
        
    )
}