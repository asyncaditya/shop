import cartImg from '../assets/cart.png';


function Header() {
    return (
        <div className="header">
            <div>
                <img src={cartImg} alt="cart" />
            </div>
            <div className='count'>0</div>
        </div>
    )
}

export default Header;