"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Hero() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <section
                className="relative isolate min-h-[85svh] overflow-hidden bg-black md:h-[85vh]"
            >
                <div className="absolute inset-0 transform-gpu [will-change:transform]">
                    <Image
                        src="/images/hero.jpg"
                        alt="Paarvi Palace in Ayodhya"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-black/45 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-7xl items-center px-6 md:h-full">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Welcome to <br /> Paarvi Palace
                        </h1>

                        <p className="mt-4 text-lg text-gray-200">
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
                                <button className="border border-white text-white w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-white hover:text-black transition cursor-pointer">
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
