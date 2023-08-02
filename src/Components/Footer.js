// Import necessary components from React (not required in this case)
import React from 'react';

// Define the functional component 'Footer'
function Footer() {
    // JSX code to render the Footer component
    return (
        <div>
            {/* Footer section with a dark background and white text */}
            <footer className="bg-dark text-center text-light text-lg-start">
                {/* Text displayed in the center of the footer */}
                <div className="text-center p-3"> &copy; 2023 Copyright: MyCart.com
                </div>
            </footer>
        </div>
    )
}

// Export the Footer component as the default export of this module
export default Footer;
