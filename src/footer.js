import './App.css';


const Footer = () => {
    return (
      <footer className='fff' style={{  padding: '20px', color: 'white', textAlign: 'center',marginTop: '200px' }}>
        <p>&copy; 2025 Your Company. All rights reserved. <br/><strong>created by muhammad Raheel raza</strong></p>
        <p>
          <a href="/privacy-policy" style={{ color: 'Black', textDecoration: 'none', marginBottom:"20px" }}>Privacy Policy</a> | 
          <a href="/terms-of-service" style={{ color: 'Black', textDecoration: 'none' }}>Terms of Service</a>
        </p>
      </footer>
    );
  };

  export default Footer;