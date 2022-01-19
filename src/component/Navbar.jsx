import React from 'react';

export default function Navbar() {
  return (
    <div>
       
       <div className="topbar">
            
            <div className="topbar-left">
                <a href="#" className="logo">
                    {/* <span className="logo-light">
                            <i className="mdi mdi-camera-control"></i> Jassa
                        </span> */}
                       <img src='assets/images/crypto.jpeg' style={{height:'55px',borderRadius:'15px',backgroundColor:'white'}}/>
                    <span className="logo-sm">
                            <i className="mdi mdi-camera-control"></i>
                        </span>
                </a>
            </div>
            
            <nav className="navbar-custom">
                <ul className="navbar-right list-inline float-right mb-0">
                   
                    <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/us_flag.jpg" className="mr-2" height="12" alt="" /> English <span className="mdi mdi-chevron-down"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch">
                            <a className="dropdown-item" href="#"><img src="assets/images/Nigeria.svg.png" alt="" height="16" /><span>Nigeria</span></a>
                            <a className="dropdown-item" href="#"><img src="assets/images/french_flag.jpg" alt="" height="16" /><span> French </span></a>
                            <a className="dropdown-item" href="#"><img src="assets/images/spain_flag.jpg" alt="" height="16" /><span> Spanish </span></a>
                            <a className="dropdown-item" href="#"><img src="assets/images/russia_flag.jpg" alt="" height="16" /><span> Russian </span></a>
                            <a className="dropdown-item" href="#"><img src="assets/images/germany_flag.jpg" alt="" height="16" /><span> German </span></a>
                            <a className="dropdown-item" href="#"><img src="assets/images/italy_flag.jpg" alt="" height="16" /><span> Italian </span></a>
                        </div>
                    </li>
                   
                    <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                        <a className="nav-link waves-effect" href="#" id="btn-fullscreen">
                            <i className="mdi mdi-arrow-expand-all noti-icon"></i>
                        </a>
                    </li>
                  
                    <li className="dropdown notification-list list-inline-item">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="mdi mdi-bell-outline noti-icon"></i>
                            <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1">
                           
                            <h6 className="dropdown-item-text">
                                    Notifications
                                </h6>
                            <div className="slimscroll notification-item-list">
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                    <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                    <p className="notify-details"><b>Your order is placed</b><span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                </a>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-danger"><i className="mdi mdi-message-text-outline"></i></div>
                                    <p className="notify-details"><b>New Message received</b><span className="text-muted">You have 87 unread messages</span></p>
                                </a>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info"><i className="mdi mdi-filter-outline"></i></div>
                                    <p className="notify-details"><b>Your item is shipped</b><span className="text-muted">It is a long established fact that a reader will</span></p>
                                </a>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-success"><i className="mdi mdi-message-text-outline"></i></div>
                                    <p className="notify-details"><b>New Message received</b><span className="text-muted">You have 87 unread messages</span></p>
                                </a>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-warning"><i className="mdi mdi-cart-outline"></i></div>
                                    <p className="notify-details"><b>Your order is placed</b><span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                </a>
                            </div>
                            
                            <a href="javascript:void(0);" className="dropdown-item text-center notify-all text-primary">
                                    View all <i className="fi-arrow-right"></i>
                                </a>
                        </div>
                    </li>
                    <li className="dropdown notification-list list-inline-item">
                        <div className="dropdown notification-list nav-pro-img">
                            <a className="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/user-4.jpg" alt="user" className="rounded-circle" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                
                                <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle"></i> Profile</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-wallet"></i> Wallet</a>
                                <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings"></i> Settings</a>
                                <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline"></i> Lock screen</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i className="mdi mdi-power text-danger"></i> Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                        <button className="button-menu-mobile open-left waves-effect">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <li className="d-none d-md-inline-block">
                        <form role="search" className="app-search">
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Search.." />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
