import { LOGO_URL } from "../utils/constants";

export const Header = () =>{
    return(
        <div className = "header">
            <div className="logo-container">
                <img
                className="logo"
                src = {LOGO_URL} 
                />
            </div>
            <div> 
                <h1 className="heyram"> मन जाहि राच्यो मिलहि सो
                    वर सहज सुन्दर सांवरो ।</h1>
            </div>
                <div className="nav-items">
                    <ul>
                        <li className="home">Home</li>
                        <li className="about">About Us</li>
                        <li className="contact">Contact Us</li>
                        <li className="cart">Cart</li>
                    </ul>
                </div>
        </div>
    )
}
export default Header;