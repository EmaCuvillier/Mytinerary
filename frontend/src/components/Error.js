import { Link } from 'react-router-dom'
const Error = () =>{
    return (
        <>
            <div className='serverError' style={{backgroundImage: "url('./assets/serverError.jpg')"}}>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}
export default Error