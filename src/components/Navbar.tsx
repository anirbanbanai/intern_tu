import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div className="col-span-1 flex2">
          
          <Link href="/">Home</Link>
          <Link href="/advancetable">Advance Table</Link>
          <Link href="/besicelement">Besic Element</Link>
          <Link href="/validation">Validation</Link>
        </div>
        </div>
    );
};

export default Navbar;