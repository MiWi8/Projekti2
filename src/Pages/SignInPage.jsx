import { useState } from "react"
import "./SignInPageStyle.css"

const SignInPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()
        console.log('Sign in attempt:', { username, password })
        // Add authentication logic here
        setUsername('')
        setPassword('')
    }

    return (
      <div>
        <h1>Kirjaudu sisään</h1>
        <form onSubmit={handleSignIn} className="form-container">
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
          <button type="submit" className = "mybutton">Kirjaudu sisään</button>
        </form>
      </div>
    )
}

export default SignInPage