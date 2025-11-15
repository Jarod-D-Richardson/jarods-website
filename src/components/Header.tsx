import "./../App.css"


export default () => {
    return (
        <div class="header">
            <NavButtons />
            <Links />
        </div>

    )
}

const NavButtons = () => {
    return (
        <div class="nav_bar">
            <button>Home</button>
            <button>About Me</button>
            <button>Passions</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    )

}

// Github, LinkedIn
const Links = () => {
    return (
        <div class="links">
            <button>Github</button>
            <button>LinkedIn</button>
            <button>Resume</button>
        </div>
    )
}






