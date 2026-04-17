import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpDown, ChevronDown } from 'lucide-react';
import coin01Icon from '../../assets/images/coin-01.png';
import coin02Icon from '../../assets/images/coin-02.png';
import coin03Icon from '../../assets/images/coin-03.png';
import coin04Icon from '../../assets/images/coin-04.png';
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import ethIcon from '../../assets/icons/token/eth.svg';
import bnbIcon from '../../assets/icons/token/bnb.svg';
import usdtIcon from '../../assets/icons/token/usdt.svg';
import aurexIcon from '../../assets/images/logo.png';


const Swap = () => {
    const sellTokens = [
        {
            symbol: 'ETH',
            name: 'Ethereum',
            icon: ethIcon,
            bg: 'bg-[#627EEA]'
        },
        {
            symbol: 'BNB',
            name: 'BNB Chain',
            icon: bnbIcon,
            bg: 'bg-[#F0B90B]'
        },
        {
            symbol: 'USDT',
            name: 'Tether',
            icon: usdtIcon,
            bg: 'bg-[#26A17B]'
        }
    ];

    const buyTokens = [
        {
            symbol: 'Select Token',
            name: 'Select Token',
            icon: null,
            bg: 'bg-[#6B7280]'
        },
        {
            symbol: 'AURX',
            name: 'Aurex',
            icon: aurexIcon,
            bg: 'bg-[#D49F12]'
        },
        {
            symbol: 'ETH',
            name: 'Ethereum',
            icon: ethIcon,
            bg: 'bg-[#627EEA]'
        },
        {
            symbol: 'BNB',
            name: 'BNB Chain',
            icon: bnbIcon,
            bg: 'bg-[#F0B90B]'
        },
        {
            symbol: 'USDT',
            name: 'Tether',
            icon: usdtIcon,
            bg: 'bg-[#26A17B]'
        }
    ];

    const [sellAmount, setSellAmount] = useState('0.00');
    const [sellToken, setSellToken] = useState(sellTokens[0]);
    const [buyToken, setBuyToken] = useState(buyTokens[0]);
    const [isSellDropdownOpen, setIsSellDropdownOpen] = useState(false);
    const [isBuyDropdownOpen, setIsBuyDropdownOpen] = useState(false);
    const sellDropdownRef = useRef(null);
    const buyDropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sellDropdownRef.current && !sellDropdownRef.current.contains(event.target)) {
                setIsSellDropdownOpen(false);
            }

            if (buyDropdownRef.current && !buyDropdownRef.current.contains(event.target)) {
                setIsBuyDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <section className="relative isolate overflow-hidden min-h-screen px-4 py-24 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,159,18,0.18),rgba(0,0,0,0.9)_42%,#020202_78%)]" />

            <div className="pointer-events-none absolute inset-0">
                <img
                    src={coin01Icon}
                    alt="Floating coin"
                    className="absolute left-[-60px] top-[5%] h-36 w-36 opacity-60 blur-[1.5px] animate-[spin_32s_linear_infinite] sm:left-[5%] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
                />
                <img
                    src={coin02Icon}
                    alt="Floating coin"
                    className="absolute right-[-70px] top-[12%] h-36 w-36 opacity-75 blur-[1.2px] animate-[spin_29s_linear_infinite_reverse] sm:right-[6%] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
                />
                <img
                    src={coin03Icon}
                    alt="Floating coin"
                    className="absolute bottom-[8%] left-[-55px] h-40 w-40 opacity-70 blur-[1.5px] animate-[spin_34s_linear_infinite] sm:left-[3%] sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                />
                <img
                    src={coin04Icon}
                    alt="Floating coin"
                    className="absolute bottom-[6%] right-[-55px] h-36 w-36 opacity-75 blur-[1.2px] animate-[spin_26s_linear_infinite_reverse] sm:right-[5%] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[780px]">
                <div className="rounded-[26px] border border-white/10 bg-[#121212]/90 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6">
                    <div className="relative space-y-3">
                        <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(102deg,rgba(212,159,18,0.24)_0%,rgba(35,37,43,0.7)_32%,rgba(18,18,20,0.92)_62%,rgba(16,16,16,0.96)_100%)] px-5 py-5 sm:px-7 sm:py-6">
                            <span className="font-sofia-medium text-xs uppercase tracking-[0.2em] text-white/75">Sell</span>
                            <div className="mt-2 flex items-center justify-between gap-4">
                                <input
                                    value={sellAmount}
                                    onChange={(e) => setSellAmount(e.target.value)}
                                    className="w-full bg-transparent text-5xl leading-none font-sofia-semibold text-white outline-none placeholder:text-white/50"
                                    placeholder="0.00"
                                />

                                <div className="relative" ref={sellDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSellDropdownOpen((open) => !open);
                                            setIsBuyDropdownOpen(false);
                                        }}
                                        className="inline-flex h-13 min-w-[164px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/16 px-4 text-white transition hover:bg-white/24"
                                    >
                                        <span className={`inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ${sellToken.bg}`}>
                                            <img src={sellToken.icon} alt={sellToken.symbol} className="h-full w-full object-cover" />
                                        </span>
                                        <span className="font-sofia-medium text-[22px] sm:text-[24px]">{sellToken.symbol}</span>
                                        <ChevronDown size={17} className={`text-white/85 transition ${isSellDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isSellDropdownOpen && (
                                        <div className="absolute right-0 top-[56px] z-30 w-[220px] rounded-2xl border border-white/15 bg-[#181818]/95 p-2 shadow-[0_18px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                                            {sellTokens.map((token) => (
                                                <button
                                                    key={token.symbol}
                                                    type="button"
                                                    onClick={() => {
                                                        setSellToken(token);
                                                        setIsSellDropdownOpen(false);
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/10"
                                                >
                                                    <span className={`inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ${token.bg}`}>
                                                        <img src={token.icon} alt={token.name} className="h-full w-full object-cover" />
                                                    </span>
                                                    <span className="flex flex-col">
                                                        <span className="font-sofia-medium text-base text-white">{token.symbol}</span>
                                                        <span className="font-sofia-normal text-xs text-white/65">{token.name}</span>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="mt-1 font-sofia-medium text-[18px] text-white/70">$0</p>
                            <p className="mt-1 font-sofia-medium text-[17px] text-white/85">
                                Estimated value:
                                <span className="ml-2 font-sofia-semibold text-white">$0.00</span>
                            </p>
                        </div>

                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/15 bg-[#3F4248]/90 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                            <ArrowUpDown size={30} className="text-white/90" />
                        </div>

                        <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(102deg,rgba(212,159,18,0.2)_0%,rgba(35,37,43,0.65)_30%,rgba(18,18,20,0.92)_60%,rgba(16,16,16,0.96)_100%)] px-5 py-5 sm:px-7 sm:py-6">
                            <span className="font-sofia-medium text-xs uppercase tracking-[0.2em] text-white/75">Buy</span>

                            <div className="mt-2 flex items-center justify-between gap-4">
                                <p className="font-sofia-semibold text-5xl leading-none text-white">0.00</p>

                                <div className="relative" ref={buyDropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsBuyDropdownOpen((open) => !open);
                                            setIsSellDropdownOpen(false);
                                        }}
                                        className="inline-flex h-13 min-w-[194px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/16 px-4 text-white transition hover:bg-white/24"
                                    >
                                        <span className={`inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full text-xs font-bold text-white ${buyToken.bg}`}>
                                            {buyToken.icon ? (
                                                <img src={buyToken.icon} alt={buyToken.name} className="h-full w-full object-cover" />
                                            ) : (
                                                '?'
                                            )}
                                        </span>
                                        <span className="font-sofia-medium text-[22px] sm:text-[25px]">{buyToken.symbol}</span>
                                        <ChevronDown size={17} className={`text-white/85 transition ${isBuyDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isBuyDropdownOpen && (
                                        <div className="absolute right-0 top-[56px] z-30 w-[240px] rounded-2xl border border-white/15 bg-[#181818]/95 p-2 shadow-[0_18px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                                            {buyTokens.map((token) => (
                                                <button
                                                    key={`${token.symbol}-${token.name}`}
                                                    type="button"
                                                    onClick={() => {
                                                        setBuyToken(token);
                                                        setIsBuyDropdownOpen(false);
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/10"
                                                >
                                                    <span className={`inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-xs font-bold text-white ${token.bg}`}>
                                                        {token.icon ? (
                                                            <img src={token.icon} alt={token.name} className="h-full w-full object-cover" />
                                                        ) : (
                                                            '?'
                                                        )}
                                                    </span>
                                                    <span className="flex flex-col">
                                                        <span className="font-sofia-medium text-base text-white">{token.symbol}</span>
                                                        <span className="font-sofia-normal text-xs text-white/65">{token.name}</span>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="mt-3 font-sofia-medium text-[18px] text-white/85">Select a token to receive</p>
                        </div>
                    </div>

                    <PrimaryBtn
                        type="button"
                        title="Get Started"
                        className="mt-6 h-14 w-full rounded-[16px] border border-[#F7C94A]/70 bg-[linear-gradient(180deg,#F2BE35_0%,#D49F12_100%)] shadow-[0_10px_24px_rgba(212,159,18,0.35)] transition hover:brightness-105"
                        textClassName="text-[28px] font-sofia-bold"
                    />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.8))]" />
        </section>
    );
};

export default Swap;