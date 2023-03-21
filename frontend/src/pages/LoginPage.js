import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <div className="max-w-[1240px] m-auto p-4 h-screen">
        <h1 className="text-2xl font-bold text-center p-4">Войти в аккаунт</h1>
        <form className="max-w-[600px] m-auto">
          <input
            className="w-full my-2 border shadow-lg p-3 first-letter:"
            type="text"
            placeholder="Ваша почта"
          />

          <input
            className="w-full my-2 border shadow-lg p-3 first-letter:"
            type="text"
            placeholder="Ваш пароль "
          />

          <button type="submit" className="border shadow-lg p-3 w-full mt-2">
            Войти в аккаунт
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
