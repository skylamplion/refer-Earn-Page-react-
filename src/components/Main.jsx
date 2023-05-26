import React from 'react'
import './Main.css'
import { Row, Col, Table } from 'react-bootstrap'

const Main = () => {

    return (
        <div className='refer_earn'>
            <p className='container-fluid'>UI/UX &gt; Refer & Earn </p>
            <Row>
                <Col className="full-width-container" md={6} variant='flush'>
                    <div className='main text-center'>
                        <Table>
                            <tr>
                                <td className="pb-2">Referral Earning</td>
                                <td className="pb-2">Total Referrals</td>
                                <td className="pb-2">Wallet Balance</td>
                            </tr>
                            <tr>
                                <td className="pb-2"><h4>₹ 2,500</h4></td>
                                <td className="pb-2"><h4>7</h4></td>
                                <td className="pb-2"><h4>₹ 500</h4></td>
                            </tr>
                        </Table>
                        <button className='withdraw_button'>Withdraw Balance</button>
                    </div>
                </Col>

                <Col className='ref_code'>
                    <p><strong>Your Referral Code</strong></p>
                    <span className='code'>EDCH54</span>
                </Col>
            </Row>

            <div className='mt-5 qna'>
                <h4 className='qna_header'>How does it work ?</h4>
                <Row className="full-width-container" md={6} variant='flush'>
                    <Col className='d-flex' md={5} variant='flush'>
                        <span><i class="fa-solid fa-user-group"></i></span>&nbsp;
                        <p>
                            <strong>Invite your Friends</strong><br />
                            Share the link tutedude.com withyour friends
                        </p>
                    </Col>
                    <Col className='d-flex' md={5} variant='flush'>
                        <span><i class="fa-solid fa-tags"></i></span>&nbsp;
                        <p>
                            <strong>Friend purchases any course</strong><br />
                            Using your REFERRAL CODE in the payments page
                        </p>
                    </Col>
                    <Col className='d-flex' md={5} variant='flush'>
                        <span><i class="fa fa-inr" aria-hidden="true"></i></span>&nbsp;
                        <p>
                            <strong>You get ₹ 200 as referral money</strong><br />
                            On total purchase the friend makes, into your wallet
                        </p>
                    </Col>
                    <Col className='d-flex' md={5} variant='flush'>
                        <span><i class="fa-solid fa-percent"></i></span>&nbsp;
                        <p>
                            <strong>Your Friend gets ₹ 200 Off </strong><br />
                            On his overall fee on successful purchase using your referral code
                        </p>
                    </Col >
                    <Col className='d-flex' md={5} variant='flush'>
                        <span><i class="fa-solid fa-wallet"></i></span>&nbsp;
                        <p>
                            <strong>Transfer money from wallet</strong><br />
                            When the wallet balance reaches
                            ₹200 or more, you can withdraw it
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Main
