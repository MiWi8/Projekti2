import { useState } from 'react'
import "./CreateAccountPageStyle.css"
import "../Components/Button_style.css"

const CreateAccountPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleAccountCreation = (e) => {
        e.preventDefault()
        console.log("Create account attempt:", { username, password, email })
        // Add account detail saving logic
    }

    return (
      <div>
        <h1>Luo käyttäjätili</h1>
        <form onSubmit={handleAccountCreation} className="form-container">
          <div className="form-group">
            <label htmlFor="username" className="label">Käyttäjänimi:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Anna käyttäjänimi"
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Salasana:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Anna salasana"
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Vahvista Salasana:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Vahvista salasana"
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Sähköposti:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Anna sähköposti"
              className="input"
              required
            />
          </div>
          <button type="submit" className="mybutton">Luo tili</button>
        </form>
      </div>
    )
}

export default CreateAccountPage