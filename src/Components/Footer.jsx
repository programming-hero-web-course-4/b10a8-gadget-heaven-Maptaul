import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200 py-5">
      <div className="text-center mb-10">
        <p className="text-3xl font-bold mb-4 mt-5">Gadget Heaven</p>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div>
        <footer className="footer bg-base-200 text-base-content p-10 text-center">
          <aside></aside>
          <nav className="">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
