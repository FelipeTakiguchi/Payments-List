import { useEffect } from "react"
import './styles.css';

export default function Alert(props){
    useEffect(() => {
        if(props.show){
            setTimeout(() => {
                props.setShow(false)
            }, 3000)
        }
    }, [props.show])

    if(props.show)
        return(
            <p className="alert">Titulo alterado</p>
        )
    return <></>
}