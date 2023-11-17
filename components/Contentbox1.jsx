import React from 'react'
import Img1 from '../public/Images/image1.png'
import { useState } from 'react'
import Fb from '../public/Images/image3.png'
import Google from '../public/Images/image4.png'
import Tr from '../public/Images/image5.png'
import St from '../public/Images/image2.png'
import Sf from '../public/Images/safe.png'
import Image from 'next/image'
import parse from 'html-react-parser';

function Contentbox1({data}) {
    const [toggle, setToggle] = useState(false)

    const benifits = () => {
        setToggle(false)
    }

    const orginization = () => {
        setToggle(true)
    }
    console.log(data);
    return (
        <div className="parent">

            <div className="line"></div>
            <div className="container">

                <div className="contaner d-flex ">

                    <div className="content-box1  ">
                        <div className="c-header1">
                            <h4>{data?.banner_section?.heading}</h4>
                        </div>
                        <div className="c-para1">
                            {parse(data?.banner_section?.description)}
                        </div>
                        <div className="but d-flex  ">
                            <button className={`button-content1  m-2 ${!toggle ? 'active' : ''}`} onClick={e => benifits(e)} >Explore The upcoming Batches! </button>
                            <button className={`button-content1 m-2 ${toggle ? 'active' : ''}`} onClick={e => orginization(e)} >Corporate Enquiry  </button>
                        </div>
                    </div>
                    <div className="image1">
                        <Image className="image11" width={300} height={300} src={data?.img} alt="" />
                    </div>
                </div>
                <div className="c-box1 d-flex justify-content-center p-4 my-5 ">
                    <div className="top-safe d-flex p-2">
                        <div className="safe  ">
                            <div className="el1 d-flex m-1 align-items-center">
                                <h6 className='ski'>SKILLDOTS</h6>
                                <Image className='img-st' src={St} alt="" />
                            </div>
                            <p className='tr1' >Trained over 14900+ learners around the world</p>
                        </div>
                        <Image className='img-safe mx-2' src={Sf} alt="" />
                    </div>
                    <div className="fb d-flex align-items-center mx-5">
                        <Image className='img-c' src={Fb} alt="" /><p className='para m-0' >4.9/5</p>
                    </div>
                    <div className="gog d-flex align-items-center mx-3">
                        <Image className='img-c ' src={Google} alt="" /><p className='para m-0' >4.9/5</p>

                    </div>
                    <div className="tr d-flex align-items-center mx-3">
                        <Image className='img-c' src={Tr} alt="" /><p className='para m-0' >4.9/5</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contentbox1
