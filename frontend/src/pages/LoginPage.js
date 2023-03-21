import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
         <div>
      <div className="max-w-[1240px] m-auto p-4 h-screen">
        <h1 className="text-2xl font-bold text-center p-4">Войти в аккаунт</h1>
        <form className="max-w-[600px] m-auto" onSubmit={loginUser}>
          <input
            className="w-full my-2 border shadow-lg p-3 first-letter:"
            type="text"
            name="username"
            placeholder="Ваша почта"
          />

          <input
            className="w-full my-2 border shadow-lg p-3 first-letter:"
            type="text"
            name="password"
            placeholder="Ваш пароль "
          />

          <input type="submit"/>
        </form>
      </div>
    </div>
    )
}

export default LoginPage
