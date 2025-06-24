import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import gmailLogo from './assets/gmail.png'
import loginMusic from './assets/audio/Uwa!!-So-Temperate.mp3'
import { useRef } from 'react'

function App() {
  const navigate = useNavigate()
  const loginAudioRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
  const audio = new Audio(loginMusic)
  audio.loop = true
  audio.volume = 0.5
  loginAudioRef.current = audio

  return () => {
    audio.pause()
    audio.currentTime = 0
  }
}, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden font-mono text-white bg-black">
      {/* Título superior con transición suave entre fuentes */}
      {/* Etiqueta DEMO */}
      <div className="relative z-10 px-2 py-1 text-2xl text-white transform rounded-bl-lg bottom-6 left-44 rotate-12 pixel-font demo-shadow">
        <h1 className="absolute text-4xl text-white font-white-shadow">DEMO</h1>
        <h1 className="absolute text-4xl text-white animate-fade-in-out font-black-shadow">DEMO</h1>
      </div>
      <div className="relative flex items-center justify-center w-full h-20 mb-10">
        <h1 className="absolute text-white text-7xl font-white-shadow">SOUL RUNE</h1>
        <h1 className="absolute text-white text-7xl animate-fade-in-out font-black-shadow">SOUL RUNE</h1>
      </div>

      {/* Contenedor del login */}
      <div className="flex flex-col items-center justify-center w-full gap-6">

        {/* Cuadro de login */}
        <div className="w-full max-w-sm p-8 mx-4 border-4 border-white shadow-xl bg-zinc-900 rounded-2xl">
          <form
            className="flex flex-col gap-4"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/menu')
            }}
          >
            <input
              type="text"
              placeholder="Usuario"
              className="p-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 pixel-font"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 pixel-font"
            />
            <button
              type="submit"
              className="py-2 font-bold text-black transition rounded-md bg-cyan-500 hover:bg-cyan-600 pixel-font"
            >
              Entrar
            </button>
          </form>
        </div>

        {/* Cuadro: Iniciar con Google */}
        <div className="w-full max-w-xs p-0 mx-4 mt-4 text-center border-4 border-white shadow-lg bg-zinc-900 rounded-2xl">
          <button
            type="button"
            className="flex items-center justify-center w-full gap-3 px-4 py-3 text-base text-white transition-all duration-200 bg-black border border-white rounded-md hover:border-cyan-400 hover:bg-zinc-800 pixel-font"
            onClick={() => alert('Iniciar con Google (no implementado aún)')}
          >
            <img src={gmailLogo} alt="Gmail" className="h-12 w-13" />
            Iniciar con Google
          </button>
        </div>

        {/* Cuadro: Regístrate */}
        <div className="w-full max-w-xs p-3 mx-4 text-center border-4 border-white shadow-md bg-zinc-700 rounded-2xl">
          <a
            href="#"
            className="text-sm text-cyan-400 hover:underline pixel-font"
          >
            ¿No tienes cuenta? Regístrate aquí
          </a>
        </div>
        {/* Cuadro: Activar música */}
        <div className="w-full max-w-xs p-3 mx-4 text-center border-4 border-white shadow-md bg-zinc-800 rounded-2xl">
          <button
            onClick={() => loginAudioRef.current?.play()}
            className="w-full py-2 text-sm text-white transition bg-black border border-white rounded-md hover:border-cyan-400 hover:bg-zinc-900 pixel-font"
          >
            🎵 Activar música
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
