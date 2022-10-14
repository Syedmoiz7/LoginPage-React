import './index.css';

function Login() {

    return (
        <div className='mainCont'>
            <div className='image'>

            </div>
            <div className="loginForm">
                <div className="loginHeading">
                    Login to continue
                </div>
                <div className="emailInput">
                    <form>
                        <div className="email" data-validate="Valid email is required: ex@abc.xyz">
                            <input type="email" id="email" className='inputs' required />
                            <span>Email</span>
                        </div>
                        <div className="password">
                            <input type="password" id="pass" className='inputs' required />
                            <span>Password</span>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}



export default Login;


