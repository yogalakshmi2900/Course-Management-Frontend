import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer className="main-footer">
        <strong>Copyright &copy; 2020-2021 CarRental.io.</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.0.0
        </div>
      </footer>
    )
  }
}
export default Footer;
