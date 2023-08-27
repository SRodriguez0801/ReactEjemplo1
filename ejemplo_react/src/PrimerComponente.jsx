import React from 'react'

export const PrimerComponente = () => {
    return (
        <>

            <h1>Usuario</h1>

            <form>
                <label>Nombre Usuario</label>
                <br />
                <input type='text' />
                <br />
                <label>Contraseña</label>
                <br />
                <input type='pasword' />
                <br/>
                <label>Imagen de Perfil</label>
                <br />
                <input type='file'/>

            </form>
            <button>Enviar Datos</button>

        </>









    )
}
