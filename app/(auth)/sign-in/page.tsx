import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            height={32}
            width={32}
          />
        </Link>
      </aside>
    </main>
  );
};

export default page;
