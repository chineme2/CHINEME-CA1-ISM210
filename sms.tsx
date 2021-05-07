import React, {useState, /*useEffect*/ /*useRef*/} from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Sms: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [phonenumber, setPhonenumber] = useState(0);

    const changePhonenumber = (event: any) => {
        setPhonenumber(event.target.value);
    }

    const [message, setmessage] = useState('');

    const changemessage = (event: any) => {
        setmessage(event.target.value);
    }
    /*let userInput: any = useRef();*/

    /*useEffect(() => {
        userInput.current.focus(); //focus on the referenced input field after fetching initial data       
    }, []);*/
    // SET Phonenumber WILL CHANGE THE EMPTY STRING TO CONTAIN what has been TYPED. 
    return (
        <div>
            <div className="box">
            <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter a phone number" onInput={changePhonenumber} />
                    <p>
                
                </p>
                </div>
            </div>
            <p>

            </p>

            <div>
                <div className="field">
                    <label className="label">Message </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Message here" onInput={changemessage} />
                    </div>
                </div>
            </div>
            <p>

            </p>
            <div>
                <QRCode value={`SMS: ${phonenumber}:${message}`} size={256} fgColor="red"  />
            </div>
            </div>
            



        </div>
    )
}
export default Sms;

