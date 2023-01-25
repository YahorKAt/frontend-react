
const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Minsk, Belarus</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="tel:+79051234567">+375 (29) 223-20-47</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:yahokatk@gmail.com">yahokatk@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}

export default Contacts;