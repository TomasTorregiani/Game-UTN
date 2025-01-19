import "../styles/components/pages/homePage.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addUser } from "../state/userSlice"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.nombre || !formData.apellido){
            alert(`Por favor complete todos los campos`)
            return
        } else {
            dispatch(addUser(formData))
            navigate("/townCenter")
        }

    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <main  className="homePageMain">
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre" required/>
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Ingrese su apellido" required/>
                    <button type="submit">Jugar</button>
                </form>
            </div>
        </main>
    )
}


export default HomePage;


