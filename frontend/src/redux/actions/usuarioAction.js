import axios from 'axios'

const usuarioAction = {
    pedirInformacionDelUsuario: (token) =>{
        return async (dispatch, getState)=>{
            try{
                const respuesta = await axios.get('http://localhost:4000/api/infoUsuario', {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                return respuesta.data
            }catch(err){
                console.log(err)
            }
        }
    }
}
export default usuarioAction