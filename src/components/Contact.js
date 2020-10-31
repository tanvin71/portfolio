import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)

        emailjs.sendForm('service_92vhg0s','template_n4huq1a', e.target, 'user_ggdTBRLv5Vz9BBab8Yiud')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 from-group mx-auto">
                            <input type="text" className="form-control" placeholder="name" name="user_name"/>
                        </div>
                        <div className="col-8 from-group  pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                        </div>
                        <div className="col-8 from-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 from-group pt-2 mx-auto">
                            <textarea className="form-control" name="message" id="" cols="30" rows="8"placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-8 from-group pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="send Message"name="name"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;