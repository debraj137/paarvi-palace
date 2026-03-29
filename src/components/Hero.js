"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Hero() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <section className="relative bg-[#faf9f7]">
                <div className="relative min-h-[52svh] overflow-hidden md:absolute md:inset-0">
                    <Image
                        src="/images/hero.jpg"
                        alt="Paarvi Palace in Ayodhya"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 hidden md:block bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:flex md:min-h-[85svh] md:items-center md:py-0">
                    <div className="mx-auto -mt-16 max-w-xl rounded-3xl bg-[#faf9f7] p-8 shadow-xl md:mx-0 md:mt-0 md:rounded-none md:bg-transparent md:p-0 md:shadow-none">
                        <h1 className="text-4xl font-bold leading-tight text-[#2b2118] md:text-6xl md:text-white">
                            Welcome to <br /> Paarvi Palace
                        </h1>

                        <p className="mt-4 text-lg text-[#6f6255] md:text-gray-200">
                            A peaceful, comfortable stay near Ram Mandir, Ayodhya
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-start">
                            <button
                                onClick={() => setOpen(true)}
                                className="bg-primary text-white w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-primary/90 transition cursor-pointer"
                            >
                                Book Your Stay
                            </button>
                            <Link href="/rooms" className="w-full sm:w-auto">
                                <button className="border border-[#2b2118] text-[#2b2118] w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md transition cursor-pointer hover:bg-[#2b2118] hover:text-white md:border-white md:text-white md:hover:bg-white md:hover:text-black">
                                    View Rooms
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <BookingModal isOpen={open} onClose={() => setOpen(false)} />
        </>

    );
}
