import { useState } from 'react'
import './App.css'

export default function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

  const buscarClima = async (e) => {
    e.preventDefault()
    
    // Validação
    if (!cidade.trim()) {
      setErro('Por favor, digite o nome de uma cidade')
      return
    }

    setCarregando(true)
    setErro('')
    setClima(null)

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cidade.trim()
      )}&appid=${apiKey}&units=metric&lang=pt_br`

      const resposta = await fetch(url)
      const dados = await resposta.json()

      if (dados.cod === '404' || !resposta.ok) {
        setErro('Cidade não encontrada. Tente novamente.')
        return
      }

      setClima({
        cidade: dados.name,
        pais: dados.sys.country,
        temperatura: Math.round(dados.main.temp),
        descricao: dados.weather[0].description,
        maxima: Math.round(dados.main.temp_max),
        minima: Math.round(dados.main.temp_min),
        humidade: dados.main.humidity,
        vento: Math.round(dados.wind.speed),
        icone: dados.weather[0].main,
      })
    } catch (erro) {
      console.error('Erro:', erro)
      setErro('Erro ao buscar dados. Verifique sua conexão.')
    } finally {
      setCarregando(false)
    }
  }

  const getWatherEmoji = (icone) => {
    const emojis = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Smoke': '💨',
      'Haze': '🌥️',
      'Dust': '🌪️',
      'Fog': '🌫️',
      'Sand': '🌪️',
      'Ash': '💨',
      'Squall': '💨',
      'Tornado': '🌪️',
    }
    return emojis[icone] || '🌍'
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌤️ Previsão do Tempo</h1>
          <p>Descubra o clima de qualquer cidade</p>
        </header>

        <form onSubmit={buscarClima} className="busca-form">
          <input
            type="text"
            id="cidade"
            placeholder="Digite o nome da cidade..."
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            disabled={carregando}
            className="input-cidade"
          />
          <button type="submit" disabled={carregando} className="btn-buscar">
            {carregando ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {erro && <div className="erro">{erro}</div>}

        {clima && (
          <div className="resultado">
            <div className="clima-header">
              <span className="emoji-grande">{getWatherEmoji(clima.icone)}</span>
              <div className="cidade-info">
                <h2>{clima.cidade}, {clima.pais}</h2>
                <p className="descricao">{clima.descricao}</p>
              </div>
            </div>

            <div className="temperatura-principal">
              <span className="temp-grande">{clima.temperatura}°</span>
              <span className="unidade">C</span>
            </div>

            <div className="detalhes-grid">
              <div className="detalhe">
                <span className="label">Máxima</span>
                <span className="valor">{clima.maxima}°C</span>
              </div>
              <div className="detalhe">
                <span className="label">Mínima</span>
                <span className="valor">{clima.minima}°C</span>
              </div>
              <div className="detalhe">
                <span className="label">Umidade</span>
                <span className="valor">{clima.humidade}%</span>
              </div>
              <div className="detalhe">
                <span className="label">Vento</span>
                <span className="valor">{clima.vento} m/s</span>
              </div>
            </div>
          </div>
        )}

        {!clima && !erro && !carregando && (
          <div className="placeholder">
            <p>🔍 Digite uma cidade para começar</p>
          </div>
        )}
      </div>
    </div>
  )
}
