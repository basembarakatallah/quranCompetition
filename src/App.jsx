import { useState } from 'react'
import { FaTransgender } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import './App.css'

function App() {
  const Name = {
    "30402218800632": "باسم", "30402218800631": "احمد",
  }
  const stage = {
    "30402218800632" : " القرآن كامل ", "30402218800631" : "20 جزء"
  }
  const [input, setInput] = useState('');

	const [messageOne, setMessageOne] = useState('');
	const [messageTwo, setMessageTwo] = useState('');
	const [messageThree, setMessageThree] = useState('');

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (input.length !== 14) {
			// you can handle error states here if you want ( ͡° ͜ʖ ͡°)
			console.error('length error');

			return;
		}

		if (!/^\d+$/.test(input)) {
			// numbers only regex ( ͡° ͜ʖ ͡°)
			console.error('regex mismatch');

			return;
		} else {

      // found or not
      setMessageOne(
        Name[input] ? 'تم التقديم بنجاح' : 'لم يتم التقديم'
      );

			// stage
			setMessageTwo(stage[input] ?? 'Not found');

			// name
		  setMessageThree(Name[input] ?? 'Not found');
		}
	}

  return (
    <>
      <div className="card">
        <div className="mask-group left"><div className="vect1"></div><div className="vect2"></div></div>
        <div className="mask-group right"><div className="vect1"></div><div className="vect2"></div></div>
        <div className="search">
          <img src="../imgs/IMG-20260220-WA0024.jpg" alt="" style={{width: '150px'}} />
          <h2>مسابقة بالقرآن نحيا</h2>
          <p>نادي المنشاه الرياضي</p>
          <div className="search-bar">
            <form onSubmit={handleSubmit} style={{position: 'relative',top: '12px',background: '#f3f3f3'}}>
              <button className='search-button' type='submit'><span>إبحث</span></button>
              <input type='text' className="search-input" placeholder='رقم البطاقة . . .' onChange={handleChange} maxLength={14}/>
              <IconContext.Provider value={{className: "glass"}}>
                <FaMagnifyingGlass />
              </IconContext.Provider>
            </form>
          </div>
        </div>
        <div className="fingerprint"></div>
        <div className="data" style={{top: '200px'}}>
          <div className="dob">
            {/* <div className="icon"><IconContext.Provider value={{className: "ico"}}><LiaBirthdayCakeSolid /></IconContext.Provider></div> */}
            <div className="text">حالة التقديم</div>
            <div className="line"></div>
            <div id="date">{messageOne}</div>
          </div>
          <div className="loc">
            {/* <div className="icon"><IconContext.Provider value={{className: "ico"}}><CiLocationOn /></IconContext.Provider></div> */}
            <div className="text">مستوي الاشتراك</div>
            <div className="line"></div>
            <div id="gov">{messageTwo}</div>
          </div>
          <div className="gender">
            {/* <div className="icon"><IconContext.Provider value={{className: "ico"}}><FaTransgender /></IconContext.Provider></div> */}
            <div className="text">الاسم</div>
            <div className="line"></div>
            <div id="morf">{messageThree}</div>
          </div>
          <div className="info"><span>بيانات المتسابق</span></div>
        </div>
        <div className="contact">
          <span style={{position: 'relative', top:'19.79px', fontWeight: 'bold', background: '#D3E2F2'}}></span>
          <span style={{position: 'relative', top:'19.79px', background: '#D3E2F2'}}>:للتواصل على الواتساب </span>
        </div>
      </div>
    </>
  )
}

export default App
