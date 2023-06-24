import react, { useState } from 'react'

export default function About() {

    const [mystyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [btntext, setBtnText] = useState("Enable light Mode")

    const togglestyle = () => {
        if (mystyle.color == "black") {
            setMystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable light Mode")
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");

        }
    }
    
    
return (
    <>
    <div className="container" style={mystyle}>
        <h1 className="my-3">About Us</h1>
        <div className="row g-2">
            <div className="col-md">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInputGrid" style={mystyle} placeholder="name@example.com" value="mdo@example.com" />
                    <label for="floatingInputGrid">Email address</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" style={mystyle}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelectGrid">Works with selects</label>
                </div>
            </div>
        </div>
        <div className="container my-3">

        </div>
        <button onClick={togglestyle} style={mystyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>
    </>
)

}