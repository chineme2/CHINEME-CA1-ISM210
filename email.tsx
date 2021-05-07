/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, { useState, /*useEffect*/ /*useRef*/ } from 'react';

type Props = {
    name?: string;
    other?: string;
}

const Email: React.FC<Props> = (props) => {
    const QRCode = require('qrcode.react');
    //const [state, setState] = useState(initialState);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    //let userInput: any = useRef(); //any is used here to accommodate possible undefined.

    //to be called when refetch is required. User id is read from input with ref attribute name userIdInput
    const showEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const showSubject = (event: any) => {
        setSubject(event.target.value);
    };

    const showMessage = (event: any) => {
        setMessage(event.target.value);
    };



    //useEffect(() => {
    //userInput.current.focus(); //focus on the referenced input field after fetching initial data       
    //}, []);

    //prepare conditional showing of user

    return (
        <div>
            <div className="box">
                <div className="field">
                    <label className="label">Email:</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Receipient" onInput={showEmail} />
                    </div>
                </div>

                <div>
                    <div className="field">
                        <label className="label">Subject: </label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter Subject" onInput={showSubject} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="field">
                        <label className="label"> Body: </label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter Message" onInput={showMessage} />
                        </div>
                    </div>
                </div>
                <p>

                </p>

                <div>
                    {<QRCode value={`mailto: ${email}?subject=${subject}&body=${message}`} size={256} fgColor="purple" />}
                </div>

            </div>

        </div>
    )
}
export default Email;
