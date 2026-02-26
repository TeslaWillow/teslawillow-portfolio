import React, { useState } from "react";
import { Typography } from "../atoms";

const Footer: React.FC = () => {

    const [date] = useState(new Date());
    return (
        <footer className="py-10 px-5 md:py-20 border-t border-white/5 text-center text-gray-500 text-sm max-w-full mx-auto">
            <Typography variant="small">© {date.getFullYear()} Héctor J. Caballero @TeslaWillow — Built with React & Dark Veil</Typography>
        </footer>
    )
}

export default Footer;