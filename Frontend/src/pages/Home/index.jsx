import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

    const [users, setUsers] = useState([])

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function getUsers(){
        const usersFromApi = await api.get('/usuarios')
        
        setUsers(usersFromApi.data)
    }
    async function createUsers(){

        try{
            if(inputName.current.value !== '' && inputAge.current.value !== '' && inputEmail.current.value !== ''){
                await api.post('/usuarios',{
                    name: inputName.current.value,
                    age: inputAge.current.value,
                    email: inputEmail.current.value 
                })                
            }else{
                alert("campos incompletos!")
            }


            getUsers()            
        }catch(error){
            if(error.response && error.response.status === 409){
                // If the email is already in use
                alert("Email já em uso, utilize outro usuario")
            }
        }

        
    }

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        /*<div>
          <h1>Olá</h1>
        </div>*/

        <div className="container">
            <h1>Cadastro</h1>
            <form>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" ref={inputName}/>

                <input type="number" id="idade" name="idade" placeholder="Digite sua idade" ref={inputAge} />


                <input type="email" id="email" name="email" placeholder="Digite seu email" ref={inputEmail}/>


                {/* Botão Cadastrar */}
                <button type="button" onClick={() => {createUsers(); 
                    document.getElementById('nome').value = '';document.getElementById('idade').value = '';document.getElementById('email').value = '';}}>Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>
                    <button onClick={() => deleteUsers(user.id)}>
                        <img src={Trash} />
                    </button>
                </div>
            ))}



        </div>
    )
}

export default Home
