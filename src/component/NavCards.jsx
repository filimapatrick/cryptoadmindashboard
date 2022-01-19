import React from 'react'
import { FaBitcoin,FaEthereum } from 'react-icons/fa';
import { SiDogecoin,SiBinance } from 'react-icons/si';

export default function NavCards() {
  return (
    <div >
       <div className="row">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card">
                                <div className="card-heading p-4">
                                    <div className="mini-stat-icon float-right">
                    <FaBitcoin size={60}/>
                                    </div>
                                    <div>
                                        <h5 className="font-16">Bitcoin</h5>
                                    </div>
                                    <h3 className="mt-4">$43,225</h3>
                                    <div className="progress mt-4" style={{height: "4px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Increase Rate<span className="float-right">75%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card">
                                <div className="card-heading p-4">
                                    <div className="mini-stat-icon float-right">
                                    <FaEthereum size={60}/>
                                    </div>
                                    <div>
                                        <h5 className="font-16">Etherium</h5>
                                    </div>
                                    <h3 className="mt-4">$73,265</h3>
                                    <div className="progress mt-4" style={{height: "4px"}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "88%"}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">increase Rate<span className="float-right">88%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card">
                                <div className="card-heading p-4">
                                    <div className="mini-stat-icon float-right">
                                    <SiBinance size={60}/>
                                    </div>
                                    <div>
                                        <h5 className="font-16">Binance</h5>
                                    </div>
                                    <h3 className="mt-4">$4.47</h3>
                                    <div className="progress mt-4" style={{height: "4px"}}>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "68%"}} aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Increase Rate<span className="float-right">68%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card">
                                <div className="card-heading p-4">
                                    <div className="mini-stat-icon float-right">
                                    <SiDogecoin size={60}/>
                                    </div>
                                    <div>
                                        <h5 className="font-16">Dogecoin</h5>
                                    </div>
                                    <h3 className="mt-4">$2.58</h3>
                                    <div className="progress mt-4" style={{height: "4px"}}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "82%"}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Increase Rate<span className="float-right">82%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
