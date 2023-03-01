
const Header = ({user}) => {
    return (
        <div>
            <header className="p-2 mb-3 fixed-top">
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                        <div className="ticker">
                            <div className="ticker__item"> Hello {user.nickname}! Welcome to Simple Planer. </div>
                            <div className="ticker__item"> Here, you can write tasks you need.  </div>
                            <div className="ticker__item">You can save, edit, and delete them. </div>
                            <div className="ticker__item">Mark it done when it is done. </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;