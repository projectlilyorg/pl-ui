import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
