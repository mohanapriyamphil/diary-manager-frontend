import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
        </nav>

        <span>Diary Manager App</span>
    </header>
  )
}
