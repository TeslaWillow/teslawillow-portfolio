import React, { useState } from "react";

const Footer: React.FC = () => {

    const [date] = useState(new Date());
    return (
        <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>© {date.getFullYear()} Héctor J. Caballero @TeslaWillow — Built with React & Dark Veil</p>
        </footer>
    )
}

export default Footer;