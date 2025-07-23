"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { supabase } from "../../supabaseClient";

const page = () => {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

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
          <h1>SnapCast</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>

            <p>
              SnapCast makes screen recording easy. From quick full
              representations, it's fast, smooth, and shareable in seconds
            </p>

            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />

              <div>
                <h2>Hussen</h2>
                <p>Front-end Dev, Todd</p>
              </div>
            </article>
          </section>
        </div>
        <p>&copy; SnapCast {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              height={40}
              width={40}
            />
            <h1>SnapCast</h1>
          </Link>
          <p>
            Create and share your very first <span>SnapCast</span> in no time!
          </p>
          <button onClick={signInWithGoogle}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              height={32}
              width={32}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
