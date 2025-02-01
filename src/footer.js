import './App.css';


const Footer = () => {
    return (
      <footer className='fff' style={{  padding: '20px', color: 'white', textAlign: 'center',marginTop: '500px' }}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" style={{ color: '#00bcd4', textDecoration: 'none' }}>Privacy Policy</a> | 
          <a href="/terms-of-service" style={{ color: '#00bcd4', textDecoration: 'none' }}>Terms of Service</a>
        </p>
      </footer>
    );
  };

  export default Footer;