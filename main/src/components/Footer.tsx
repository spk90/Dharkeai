import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Dharke.AI</h3>
            <p className="text-sm text-muted-foreground">
              Revolutionizing Nepal's stock market with AI-powered insights and professional portfolio management.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Portfolio Management</li>
              <li className="text-sm text-muted-foreground">Live Market Data</li>
              <li className="text-sm text-muted-foreground">AI Technical Analysis</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
            <p className="text-sm text-muted-foreground">info@dharke.ai</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dharke.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;