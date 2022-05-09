import Binod from "../images/Binod.png"
function Header(){
    return(
        <div className="Header">
            <img src={Binod} alt="" className="Logo-image" />
            <h1 className="Header--title">Meme Generator</h1>
        </div>
    )
}
export default Header;