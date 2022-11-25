import React from 'react'
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom';

function Index() {
    const style = {
      backgroundColor: '#111827',
      marginTop: '20px',
    }
    return (
      <div className="bg-black m-0">
        <header className="d-flex w-100 p-3 mb-4">
          <img className="me-auto" height="25px" src={Logo} alt="logo"/>
          <p className="border border-light rounded p-2 text-white">EN</p>
        </header>
        <div className="container w-100 d-flex align-items-center flex-wrap justify-content-center pt-5 mb-5">
            <img className="hero-img" width="100%" src="images/hero.png" alt="" />
            <article className="d-flex gap-2 mt-2 flex-wrap justify-content-center">
                <div className="btn border gap-1 d-flex align-items-center px-4 mt-1">
                    <img height="40px" src="/images/bitcoin-btc-logo.png" alt="" />
                    <div className="ms-1 d-flex align-items-start flex-wrap flex-column">
                        <p className="m-0 text-white fs-5 fw-bold">$<span id="btc">18097.59</span></p>
                        <p  className="m-0 text-white fs-6">Bitcoin</p>
                    </div>
                </div>
                <div className="btn border gap-1 d-flex align-items-center px-4 mt-1">
                    <img height="40px" src="/images/ethereum-eth-logo.png" alt="" />
                    <div className="ms-1 d-flex align-items-start flex-wrap flex-column">
                        <p className="m-0 text-white fs-5 fw-bold">$<span id="eth">1252.46</span></p>
                        <p  className="m-0 text-white fs-6">Ethereum</p>
                    </div>
                </div>
                <div className="btn border gap-1 d-flex align-items-center px-4 mt-1">
                    <img height="40px" src="/images/dogecoin-doge-logo.png" alt="" />
                    <div className="ms-1 d-flex align-items-start flex-wrap flex-column">
                        <p className="m-0 text-white fs-5 fw-bold">$<span id="doge">0.08481</span></p>
                        <p  className="m-0 text-white fs-6">Dogecoin</p>
                    </div>
                </div>
            </article><br/><br/>
        </div>
        <main className="pt-5" style={style}>
            <h5 className="text-light text-center fs-4">Please Select Issue Category</h5>
            <p className="text-light text-center">Which of these is related to your issue?</p>
            <div className="container d-grid justify-content-center align-items-center gap-4 mt-4">
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Swap/Exchange</h5>
                    <p>
                        We will support you in any related issues 
                        with swapping and/or exchange of coins. 
                        Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Connect to Dapps</h5>
                    <p>
                        Connect decentralized web applications to mobile wallet. 
                        Enable DAPP on mobile wallet/extension. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Login Issues</h5>
                    <p>
                        Do you have issues login into your wallet. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Missing Funds</h5>
                    <p>
                        Lost access to funds or funds is missing. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Rectifcation</h5>
                    <p>
                        To rectify your wallet issues. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Migration</h5>
                    <p>
                        We will support you in any related issues with 
                        swapping and/or exchange of coins. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>High Fees</h5>
                    <p>
                        Increase in transaction fees. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Transaction Delay</h5>
                    <p>
                        Do you have issues with transaction being delayed? Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Issues with trading wallet</h5>
                    <p>
                        Do you have problems with your trading account. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Unable to purchase coins</h5>
                    <p>
                        If your account is not recognized as a trusted payment 
                        source you may not be able to buy crypto and add coins. 
                        Kindly click here and follow the process to get started
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Migration</h5>
                    <p>
                        Have your . Kindly click here and follow the process to get started
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
  
                <div className="problems border rounded p-3 text-white">
                    <i className="fa-brands fa-instagram fs-4 mb-4"></i>
                    <h5>Locked Account</h5>
                    <p>
                        If you are locked out due to activity on account. Kindly click here
                    </p>
                    <Link to='/wallet'>Click Here <i className="fa-solid fa-arrow-right fs-6"></i></Link>
                </div>
            </div>
            <div className="ready mx-auto my-4 p-3 text-center">
                <h2>Ready to Start</h2>
                <h3 className="fs-5 fw-semibold">
                    We are ready to provide help in any related 
                    issues you are having with your wallet account
                </h3>
                <textarea className="border rounded mt-3" name="" id=""></textarea>
                <button className="btn bg-info mb-4">Get Started <i className="fa-solid fa-arrow-right fs-6"></i></button>
            </div>
        </main>
        <footer className="text-center text-white d-flex justify-content-center align-items-center">
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
        </footer>
      </div>
    );
  }
  
  export default Index