import BackLink from "../components/backLink/backLink"
import homer from "../img/homer.jpeg"

export default function NotFoundPage() {
    return (
        <>
            <BackLink />
            <h1 style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15 }}>Oh no, it's a not found page...</h1>
            <div style={{ display:'flex', justifyContent:'center'}}><img src={homer} alt="homer" /></div>
    </>
    )
}