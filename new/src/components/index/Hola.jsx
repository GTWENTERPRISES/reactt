import Mundo from "./Mundo"
const Hola=({
    numero1,numero2
})=>{
    

    const elemento=(e)=>{
        e.preventDefault()
        console.log(numero1+numero2)
    }

    return (
        <>
        <Mundo numero1={numero1} numero2={numero2}/>
        <button
        onClick={e=>elemento(e)}
        className="bg-blue-300 p-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            sumar
        </button>
        </>
    )
}
export default Hola