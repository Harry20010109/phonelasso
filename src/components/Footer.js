import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div id="text-2" className="widget widget_text">
                            <h3 className="widgettitle">Never break another phone again</h3>
                            <div className="textwidget">
                                <p>
                                    Screen repairs can be costly, as well as purchasing an entire new phone! Secure your phone to yourself and never end up needing another repair ever again.
                                </p>
                            </div>
                        </div>
                        <img src="https://www.phonelasso.com/wp-content/themes/Brasco-2015-Theme/img/payments-accepted.png" alt="Payment Methods Accepted" className="img-responsive" />
                    </div>
                    <div className="col-md-5" id="third-column">
                        <a href="https://www.phonelasso.com/product/phone-lasso/" className="cta">
                            <img src="https://www.phonelasso.com/wp-content/themes/Brasco-2015-Theme/img/buy-phone-lasso-2.png" alt="Buy Phone Lasso" className="img-responsive cta-ticket" />
                        </a>
                        <ul className="social-networking-links">
                            <li><a href="https://www.pinterest.com/phonelasso/" target="blank" className="pinterest"><i className="bi bi-pinterest"></i></a></li>
                            <li><a href="https://www.instagram.com/phonelasso/" target="blank" className="instagram"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCRAGF8bQMe9lp4JkDrPjaIA/videos" target="blank" className="youtube"><i className="bi bi-youtube"></i></a></li>
                            <li><a href="https://twitter.com/PhoneLasso" target="blank" className="twitter"><i className="bi bi-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <ul id="menu-footer-navigation" className="list-inline">
                            <li id="menu-item-969" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-160 current_page_item menu-item-969">
                                <a href="https://www.phonelasso.com/" aria-current="page">Home</a>
                            </li>
                            <li id="menu-item-970" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-970">
                                <a href="https://www.phonelasso.com/product/phone-lasso/">Buy Now</a>
                            </li>
                            <li id="menu-item-1451" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451">
                                <a href="https://www.phonelasso.com/installation/">Installation Instructions</a>
                            </li>
                            <li id="menu-item-518" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-518">
                                <a href="https://www.phonelasso.com/blog/">Blog</a>
                            </li>
                            <li id="menu-item-917" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-917">
                                <a href="https://www.phonelasso.com/dealers/">Authorized Dealers</a>
                            </li>
                            <li id="menu-item-340" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-340">
                                <a href="https://www.phonelasso.com/contact/">Contact</a>
                            </li>
                            <li id="menu-item-338" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-338">
                                <a href="https://www.phonelasso.com/terms-of-use/">Terms of Use</a>
                            </li>
                            <li id="menu-item-339" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-339">
                                <a href="https://www.phonelasso.com/privacy-policy/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12" style={{ marginTop: '4em' }}>
                        <p id="copyright">
                            <i class="bi bi-c-circle"></i> 2023 Phone Lasso. All Rights Reserved. <br />
                            <a href="http://brascomarketing.com/our_design_work/" target="blank">Web Design</a> &amp; <a href="http://brascomarketing.com/what-we-do/web-development/" target="blank">Development</a> by <a href="http://brascomarketing.com" target="blank">Brasco <span style={{ fontWeight: 500 }}>///</span></a>
                        </p>
                    </div>
                </div>
            </div>
            <a href="#" className="scroll-up"><i className="fa fa-angle-up"></i></a>
        </footer>
    );
};

export default Footer;

