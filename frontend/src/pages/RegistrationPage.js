import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const RegistrationPage = () => {
    let {registerUser} = useContext(AuthContext)
    return (
          <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">Регистрация</h1>
      <form className="max-w-[600px] m-auto" onSubmit={registerUser}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 first-letter:"
            type="text"
            name="firstName"
            placeholder="Ваше имя"
          />
          <input
            className="border shadow-lg p-3 first-letter:"
            type="text"
            name="lastName"
            placeholder="Ваша фамилия"
          />
        </div>
        <input
          className="w-full my-2 border shadow-lg p-3 first-letter:"
          type="email"
          name="email"
          placeholder="Ваша почта"
        />
        <input
          className="w-full my-2 border shadow-lg p-3 first-letter:"
          type="text"
          name="number"
          placeholder="Ваш номер"
        />
        <input
          className="w-full my-2 border shadow-lg p-3 first-letter:"
          type="password"
          name="password"
          placeholder="Создайте пароль "
        />
        <div className="py-4">
          <p className="text-xl font-bold ">Ваша роль</p>
            <input type="radio" name="role" value="Student" /> {' '}
          <label for="html">Ученик</label> {' '}
          <input type="radio" name="role" value="Teacher" /> {' '}
          <label for="javascript">Учитель</label>
        </div>
        <button type="submit" className="border shadow-lg p-3 w-full mt-2">
          Создать аккаунт
        </button>
      </form>
    </div>
    )
}

export default RegistrationPage
