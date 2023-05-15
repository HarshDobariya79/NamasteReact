import { useParams } from "react-router-dom"

const Dynamic = () => {
    const {id} = useParams();
    return (
            <div>
                {"Dynamic" + id}
            </div>
        )
}

export default Dynamic;