import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'

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
        <div className="flex space-x-5 mt-5 justify-center items-center">
          <span>Нет аккаунта?</span>
          <Link
            className="rounded-full bg-blue-400 px-5 py-3 text-base  font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700"
            to="/register">
            Зарегистрируйтесь
          </Link>
        </div>
      </div>
    </div>
    )
}

export default LoginPage
