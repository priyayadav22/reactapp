import React, { useState } from 'react';

const Contact = () => {
    const [data,setData] = useState({
        fullname: " ",
        phone: " ",
        email: " ",
        msg: " ",
    });

    const InputEvent= (event)=>{
        const{name, value} = event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit=(e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone}. My email adress is ${data.email} and my message is ${data.msg}`);
    };
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className=' col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="9876543210" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Contact;