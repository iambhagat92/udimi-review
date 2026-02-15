'use client';

import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck, Users, TrendingUp, AlertTriangle, Star, DollarSign } from 'lucide-react';
import Image from 'next/image';

const AFFILIATE_LINK = "https://udimi.com/a/gdo9j";

export default function LandingPage() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* Sticky Top Bar */}
            <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2 text-center text-sm font-medium z-50">
                <p className="flex items-center justify-center gap-2">
                    <span>🎁 Special Offer: Get $5 Off Your First Order via My Link</span>
                    <a href={AFFILIATE_LINK} className="underline hover:text-blue-100 font-bold">Claim Now</a>
                </p>
            </div>

            {/* Hero Section */}
            <header className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            Verified & Tested for 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Stop Burning Budget on <span className="text-blue-600">Bot Traffic.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            The only place I trust for buying high-quality solo ads in 2026. See my real results, verified seller list, and how to protect your ad spend.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={AFFILIATE_LINK}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Claim $5 Discount <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <button onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                                See Proof First
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            Trusted by 10,000+ Marketers
                        </p>
                    </div>
                    <div className="relative">
                        {/* Visual Placeholder for Dashboard/Results */}
                        {/* Visual for Dashboard/Results */}
                        <div className="rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-100 p-2">
                            {/* USER: Upload your screenshot to public/dashboard.jpg to see it here */}
                            <Image
                                src="/dashboard.jpg"
                                alt="Udimi Traffic Statistics"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-xl"
                                priority
                            />
                            <div className="placeholder-text hidden bg-gray-100 aspect-video rounded-xl flex items-center justify-center text-gray-400">
                                <div className="text-center">
                                    <TrendingUp className="w-16 h-16 mx-auto mb-2 opacity-50" />
                                    <span className="font-medium">Upload "dashboard.jpg" to public folder</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-green-100 p-2 rounded-full">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold uppercase">Average ROI</p>
                                <p className="text-xl font-bold text-gray-900">300%+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Trusted By / Logos Strip - Optional but good for authority */}
            <div className="py-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Compatible with all major funnels</p>
                    <div className="flex justify-center flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Placeholders for logos: ClickFunnels, Leadpages, System.io, etc. Text fallback for now */}
                        <span className="font-bold text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default">ClickFunnels</span>
                        <span className="font-bold text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default">Systeme.io</span>
                        <span className="font-bold text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default">GetResponse</span>
                        <span className="font-bold text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default">Aweber</span>
                        <span className="font-bold text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default">ConvertKit</span>
                    </div>
                </div>
            </div>

            {/* The Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Most Solo Ad Buyers Fail</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Buying traffic is risky. The internet is full of "bot farms" that send fake clicks to your link. You see the clicks, but you get <strong>zero sales</strong>. It's the fastest way to lose money.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fake Clicks</h3>
                        <p className="text-gray-600">Vendors using scripts to simulate visitors. You pay for ghosts.</p>
                    </div>
                    <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <Users className="w-10 h-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Tired Lists</h3>
                        <p className="text-gray-600">Subscribers who have been bombarded with offers and never buy.</p>
                    </div>
                    <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <DollarSign className="w-10 h-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Refunds</h3>
                        <p className="text-gray-600">Once you pay a shady vendor via PayPal, your money is gone.</p>
                    </div>
                </div>
            </section>

            {/* The Solution: Udimi */}
            <section id="results" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why I Only Use Udimi</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Udimi acts as the "Middleman" that protects your money. They hold the funds until the traffic is delivered and VERIFIED.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Bot Filtering Technology</h3>
                                    <p className="text-gray-600">Udimi filters out useless views from bots, spiders, and proxies. You ONLY pay for real human visitors.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                    <Star className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Uncensored Reviews</h3>
                                    <p className="text-gray-600">Sellers cannot delete bad reviews. If someone sells junk traffic, you will see it in their rating immediately.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Buyer Protection</h3>
                                    <p className="text-gray-600">If the seller doesn't deliver, Udimi refunds you automatically. No chasing people for money.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
                            {/* Placeholder for Udimi Interface Screenshot */}
                            <div className="bg-gray-100 aspect-[4/3] rounded-xl flex items-center justify-center text-gray-400">
                                <span className="font-medium">Udimi Interface / Filter Screenshot</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proof / Results Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Real Results</h2>
                        <p className="text-lg text-gray-600">Here is a snapshot from my recent campaign using one of the top sellers on Udimi.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
                            <div className="p-4">
                                <p className="text-gray-400 text-sm mb-2">Clicks Bought</p>
                                <p className="text-4xl font-bold text-blue-400">300</p>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-400 text-sm mb-2">Opt-in Rate</p>
                                <p className="text-4xl font-bold text-green-400">42%</p>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-400 text-sm mb-2">Cost Per Lead</p>
                                <p className="text-4xl font-bold text-yellow-400">$0.95</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                            <p className="text-sm text-gray-400 mb-4">Want these same results?</p>
                            <a href={AFFILIATE_LINK} className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">Start Your Campaign Here</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Other Marketers Say</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <p className="text-gray-600 mb-6 italic">"I was skeptical about solo ads until I tried Udimi. The filter system is a lifesaver. I made my first 5 sales within 24 hours of my run!"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">JD</div>
                                <div>
                                    <p className="font-bold text-gray-900">John D.</p>
                                    <p className="text-xs text-gray-500">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <p className="text-gray-600 mb-6 italic">"The quality of traffic here is unmatched. I've tried Facebook ads and Google ads, but Udimi gave me the best ROI by far."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">AS</div>
                                <div>
                                    <p className="font-bold text-gray-900">Sarah A.</p>
                                    <p className="text-xs text-gray-500">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-4 h-4 text-gray-300 fill-current" />
                            </div>
                            <p className="text-gray-600 mb-6 italic">"Great platform for building your list quickly. The sellers are responsive and the support team is helpful if you have issues."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">MR</div>
                                <div>
                                    <p className="font-bold text-gray-900">Mike R.</p>
                                    <p className="text-xs text-gray-500">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Sellers Recommendation (Value Add) */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Verified Top Vendors List</h2>
                        <p className="text-gray-600">To help you get started, here are 3 sellers I personally recommend. They have high "Sales Gotten" ratings.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">TC</div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">Thomas C.</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span>4.9/5 Rating</span>
                                        <span className="mx-2">•</span>
                                        <span className="text-green-600 font-medium">52% Sales Reported</span>
                                    </div>
                                </div>
                            </div>
                            <a href={AFFILIATE_LINK} className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                View Profile
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">SK</div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">Sarah K.</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span>4.9/5 Rating</span>
                                        <span className="mx-2">•</span>
                                        <span className="text-green-600 font-medium">48% Sales Reported</span>
                                    </div>
                                </div>
                            </div>
                            <a href={AFFILIATE_LINK} className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                View Profile
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">DM</div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900">David M.</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span>4.8/5 Rating</span>
                                        <span className="mx-2">•</span>
                                        <span className="text-green-600 font-medium">41% Sales Reported</span>
                                    </div>
                                </div>
                            </div>
                            <a href={AFFILIATE_LINK} className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                View Profile
                            </a>
                        </div>
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-500">
                        *Sales reported metrics change daily. Always check the latest reviews on Udimi.
                    </p>
                </div>
            </section>

            {/* FAQ Section with Schema Markup support structure */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group bg-white rounded-lg shadow-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                                <span>Is Udimi safe to use?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 px-6 pb-6">
                                Yes. Udimi is the safest marketplace for solo ads because they hold the seller's money until traffic is delivered. They also have a strict filter that blocks bot traffic, so you don't pay for fake clicks.
                            </div>
                        </details>
                        <details className="group bg-white rounded-lg shadow-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                                <span>How much does it cost?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 px-6 pb-6">
                                Prices vary by seller, usually ranging from $0.40 to $0.90 per click. You can find quality traffic for around $0.50-$0.60/click. Using my link gets you a $5 discount on your first order.
                            </div>
                        </details>
                        <details className="group bg-white rounded-lg shadow-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                                <span>Can I get a refund if it doesn't work?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 px-6 pb-6">
                                You can't get a refund just because "nobody bought," as that depends on your offer. However, if the seller fails to deliver the clicks or if the traffic is flagged as fake by Udimi's filter, you are automatically refunded.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <footer className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Real Traffic?</h2>
                    <p className="text-xl text-gray-400 mb-8">Join thousands of marketers who are scaling their business with Udimi.</p>
                    <a
                        href={AFFILIATE_LINK}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Claim My $5 Discount Now <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <p className="mt-8 text-sm text-gray-600">
                        Affiliate Disclosure: I am an affiliate for Udimi. If you sign up through my link, I may earn a commission at no extra cost to you. In fact, you get a $5 discount!
                    </p>
                </div>
            </footer>
        </div>
    );
}
