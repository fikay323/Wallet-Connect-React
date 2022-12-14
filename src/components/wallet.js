import React from 'react'
import { Link } from 'react-router-dom';

const wallet = () => {
  return (
    <div className='bg-black'>
        <header className="d-flex w-100 p-3 mb-4">
        <img className="me-auto" height="25px" src="/images/logo.svg" alt="logo" />
        <p className="border border-light rounded p-2 text-white">EN</p>
    </header>
    <section className="d-flex justify-content-center align-items-center flex-column">
        <img width="15%" src="./images/logo.svg" alt="" className="" />
        <h1 className="text-white fw-bolder fs-1 mt-3">Wallets</h1>
        <p className="w-75 text-white-50 text-center">
            Multiple iOS and Android wallets support the DappTradeFix protocol. 
            Simply scan a QR code from your desktop computer screen to 
            start securely using a dApp with your mobile wallet. Interaction 
            between mobile apps and mobile browsers are supported via mobile deep linking.
        </p>
    </section>
    <main>
        <div className="container grid-container"> 
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=022" alt="Crypto.com" />
                    <h1>Crypto.com</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.f65bb639ddb0012db0f08eb72510e3bf?rik=GxsFgN%2bCojfl9A&amp;riu=http%3a%2f%2fwww.gemini.com%2fstatic%2fimages%2floader.png&amp;ehk=5v4puAG2Yq4wm2NzB4vBY8BGYC9n46UD%2fqizC6ExNEQ%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0" alt="Gemini" />
                    <h1>Gemini</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.2c98b6c9ad585c332158cbfd9e5827a1?rik=QkTm%2fSDhWUJiYw&amp;pid=ImgRaw&amp;r=0" alt="Bitrex" />
                    <h1>Bitrex</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://d235dzzkn2ryki.cloudfront.net/kucoin-shares_large.png" alt="Kucoin" />
                    <h1>Kucoin</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=022" alt="Solana" />
                    <h1>Solana</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/OIP.vt5UvAH8Gsgdo4oWtJoIHwAAAA?pid=ImgDet&amp;rs=1" alt="Gate.io" />
                    <h1>Gate.io</h1>
                </div>
            </Link><Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.9a81b7416b4f93ad7976d89166338943?rik=VpqKR%2b3UskoSBg&amp;pid=ImgRaw&amp;r=0" alt="Huobi"  />
                    <h1>Huobi</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022" alt="Binance" />
                    <h1>Binance</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.136d1d9cc86fa00357bb72b362c52411?rik=jc%2fZXSXsduTRYg&amp;pid=ImgRaw&amp;r=0" alt="OKEX"  />
                    <h1>OKEX</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/ftx-token-ftt-logo.png?v=022" alt="Ftx" />
                    <h1>Ftx</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/exchanges/ftx_us.jpg" alt="Ftx US" />
                    <h1>Ftx US</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/stellar-xlm-logo.png?v=022" alt="Stellar" />
                    <h1>Stellar</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022" alt="Fantom" />
                    <h1>Fantom</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/decentraland-mana-logo.png?v=022" alt="Mana" />
                    <h1>Mana</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/internet-computer-icp-logo.png?v=022" alt="Supernova" />
                    <h1>Supernova</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://cryptologos.cc/logos/monero-xmr-logo.png?v=022" alt="Monero" />
                    <h1>Monero</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" alt="Metamask" />
                    <h1>Metamask</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.adbe15401990132de2d50f8358eaf694?rik=NhXvmrVkKScP2Q&amp;pid=ImgRaw&amp;r=0" alt="Safepal" />
                    <h1>Safepal</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://th.bing.com/th/id/R.c6a20a0cd99848f21ae682e346261da0?rik=Yz4KDLuBTcp8GQ&amp;pid=ImgRaw&amp;r=0" alt="Defichain" />
                    <h1>Defichain</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="data:image/jpeg;base64,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" alt=""  />
                    <h1>Coinbase</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://assets.localcoinatm.com/images/wp-content/uploads/2019/04/18160308/ledger_logo-01.png"alt="Ledger"  />
                    <h1>Ledger</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://localethereum.com/images/wallets/WalletConnect.png" alt="Wallet Connect" />
                    <h1>Wallet Connect</h1>
                </div>
            </Link>
            <Link to='wallet/connect'>
                <div className="p-5">
                    <img src="https://www.btc-echo.de/wp-content/uploads/2021/07/image-46-920x483.png" alt="Keplr Wallet" />
                    <h1>Keplr Wallet</h1>
                </div>
            </Link>

        </div>
    </main>
    </div>
  )
}

export default wallet