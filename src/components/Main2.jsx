import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Main2.css'

const main2 = () => {
    return (





        <div className='main2'>
            <p className='container-fluid'>UI/UX &gt; Refer & Earn &gt; Friend Reffered </p>
            <div className="code_balance d-flex">

                <Col className='ref_code'>
                    <p><strong>Your Referral Code</strong></p>
                    <span className='code'>EDCH54</span>
                </Col>
                <Col className="full-width-container" md={2}>
                    <div className='main text-center'>
                        <p style={{ color: '#800080' }}>Wallet Balance</p>
                        <h4>₹ 500</h4>
                    </div>
                </Col>
            </div>

            <h4>Friends Who Enrolled(3)</h4>

            <div className="code_balance d-flex">
                <Row className='container gap-0'>
                    <Col className='enrolled_friends' md={3}>
                        <div className='d-flex name'>
                            <p><strong>Dhiraj Saxena</strong></p>
                            <p>15-sep-2022</p>
                        </div>
                        <p>courseEnrolled(3)</p><br />
                        <div className='d-flex courses'>
                            <p>UI/UX</p>
                            <p>Photoshop</p>
                            <p>Illustrator</p>
                            <p>Python</p>
                            <p>MERN</p>
                            <p>Java</p>
                        </div>
                        <span className='d-flex'>
                            <p>Referral Amount</p>
                            <h5>₹185</h5>
                        </span>
                    </Col>&nbsp;

                    <Col className='enrolled_friends' md={3}>
                        <div className='d-flex name'>
                            <p><strong>Dhiraj Saxena</strong></p>
                            <p>15-sep-2022</p>
                        </div>
                        <p>courseEnrolled(3)</p><br />
                        <div className='d-flex courses container'>
                            <p>UI/UX</p>
                            <p>Photoshop</p>
                            <p>Illustrator</p>
                            <p>Python</p>
                            <p>MERN</p>
                            <p>Java</p>
                        </div>
                        <span className='d-flex'>
                            <p>Referral Amount</p>
                            <h5>₹185</h5>
                        </span>
                    </Col>&nbsp;

                    <Col className='enrolled_friends' md={3}>
                        <div className='d-flex name'>
                            <p><strong>Dhiraj Saxena</strong></p>
                            <p>15-sep-2022</p>
                        </div>
                        <p>courseEnrolled(3)</p><br />
                        <div className='d-flex courses container'>
                            <p>UI/UX</p>
                            <p>Photoshop</p>
                            <p>Illustrator</p>
                            <p>Python</p>
                            <p>MERN</p>
                            <p>Java</p>
                        </div>
                        <span className='d-flex'>
                            <p>Referral Amount</p>
                            <h5>₹185</h5>
                        </span>
                    </Col>

                </Row>
            </div >
        </div >

    )
}

export default main2
