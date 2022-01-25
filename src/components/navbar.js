export default function Navbar(){
    return(
    <nav className="navbar bg-indigo-600">
    <div className="container flex mx-auto items-center">
      <div className="w-3/12">
        <div className="logo text-white uppercase font-semibold tracking-widset text-center text-2xl">
          denita okta
        </div>
      </div>
      <div className="w-6/12">
        <ul className="nav flex justify-center space-x-10 py-12 text-lg">
        <li className="nav-item text-white text-opacity-60 font-semi-bold text-lg">profil</li>
        <li className="nav-item text-white text-opacity-60 font-semi-bold text-lg">skill</li>
        <li className="nav-item text-white text-opacity-60 font-semi-bold text-lg">projects</li>
        <li className="nav-item text-white text-opacity-60 font-semi-bold text-lg">contact</li>
       
      </ul>

      </div>

      <div className="w-3/12">
        <div className="button text-center">
          <a className="button text-lg font-semibold text-yellow-300 border rounded-full border-yellow-300 py-2 px-6">
          contact
          </a>
        </div>
      </div>
    </div>
  </nav>
    )
}