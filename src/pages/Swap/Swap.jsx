import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import coin01Icon from '../../assets/images/coin-01.png';
import coin02Icon from '../../assets/images/coin-02.png';
import coin03Icon from '../../assets/images/coin-03.png';
import coin04Icon from '../../assets/images/coin-04.png';
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import usdtIcon from '../../assets/icons/token/usdt.svg';
import aurexIcon from '../../assets/images/logo.png';
import { UseSwap } from '../../blockchain/hooks/UseSwap';
import { formatUnits } from 'viem';


const TokenBadge = ({ icon, symbol, bg }) => (
    <div className="inline-flex h-13 min-w-[164px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/16 px-4 text-white">
        <span className={`inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ${bg}`}>
            <img src={icon} alt={symbol} className="h-full w-full object-cover" />
        </span>
        <span className="font-sofia-medium text-[16px] lg:text-[22px]">{symbol}</span>
    </div>
);

const Swap = () => {
    const [arxAmount, setArxAmount] = useState('');

    const {
        isConnected,
        formattedArxBalance,
        arxPriceInUSDT,
        swapFeeBps,
        computeUsdtOut,
        swapPhase,
        isLoading,
        isConfigLoading,
        swap,
    } = UseSwap();

    const usdtOut = computeUsdtOut(arxAmount);

    const arxPriceDisplay = arxPriceInUSDT != null && arxPriceInUSDT !== 0n
        ? `1 ARX = $${Number(formatUnits(arxPriceInUSDT, 18)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} USDT`
        : null;

    const feeDisplay = swapFeeBps && swapFeeBps !== 0n
        ? `Swap fee: ${(Number(swapFeeBps) / 100).toFixed(2)}%`
        : null;

    const buttonLabel = !isConnected
        ? 'Connect Wallet'
        : swapPhase === 'approving'
        ? 'Approving ARX...'
        : swapPhase === 'swapping'
        ? 'Swapping...'
        : 'Swap ARX → USDT';

    return (
        <section className="relative isolate overflow-hidden min-h-screen px-4 py-24 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,159,18,0.18),rgba(0,0,0,0.9)_42%,#020202_78%)]" />

            <div className="pointer-events-none absolute inset-0">
                <img src={coin01Icon} alt="" className="absolute left-[-60px] top-[5%] h-36 w-36 opacity-60 blur-[1.5px] animate-[spin_32s_linear_infinite] sm:left-[5%] sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
                <img src={coin02Icon} alt="" className="absolute right-[-70px] top-[12%] h-36 w-36 opacity-75 blur-[1.2px] animate-[spin_29s_linear_infinite_reverse] sm:right-[6%] sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
                <img src={coin03Icon} alt="" className="absolute bottom-[8%] left-[-55px] h-40 w-40 opacity-70 blur-[1.5px] animate-[spin_34s_linear_infinite] sm:left-[3%] sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
                <img src={coin04Icon} alt="" className="absolute bottom-[6%] right-[-55px] h-36 w-36 opacity-75 blur-[1.2px] animate-[spin_26s_linear_infinite_reverse] sm:right-[5%] sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[780px]">
                <div className="rounded-[26px] border border-white/10 bg-[#121212]/90 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6">

                    {/* Price + fee info bar */}
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1 min-h-[22px]">
                        {isConfigLoading ? (
                            <span className="font-sofia-normal text-[13px] text-white/35 animate-pulse">Loading price...</span>
                        ) : arxPriceDisplay ? (
                            <>
                                <span className="font-sofia-normal text-[13px] text-white/55">{arxPriceDisplay}</span>
                                {feeDisplay && (
                                    <span className="font-sofia-normal text-[13px] text-white/55">{feeDisplay}</span>
                                )}
                            </>
                        ) : null}
                    </div>

                    <div className="relative space-y-3">
                        {/* Sell: ARX */}
                        <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(102deg,rgba(212,159,18,0.24)_0%,rgba(35,37,43,0.7)_32%,rgba(18,18,20,0.92)_62%,rgba(16,16,16,0.96)_100%)] px-5 py-5 sm:px-7 sm:py-6">
                            <div className="flex items-center justify-between">
                                <span className="font-sofia-medium text-xs uppercase tracking-[0.2em] text-white/75">Sell</span>
                                {isConnected && (
                                    <button
                                        type="button"
                                        onClick={() => setArxAmount(formattedArxBalance)}
                                        className="font-sofia-normal text-[13px] text-white/55 hover:text-[#F2BE35] transition-colors"
                                    >
                                        Balance: {Number(formattedArxBalance).toLocaleString(undefined, { maximumFractionDigits: 4 })} ARX
                                        <span className="ml-1 text-[#F2BE35]">(Max)</span>
                                    </button>
                                )}
                            </div>
                            <div className="mt-2 flex flex-col lg:flex-row items-center justify-between gap-4">
                                <input
                                    type="number"
                                    min="0"
                                    value={arxAmount}
                                    onChange={(e) => setArxAmount(e.target.value)}
                                    className="w-full bg-transparent text-5xl leading-none font-sofia-semibold text-white outline-none placeholder:text-white/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="0.00"
                                />
                                <TokenBadge icon={aurexIcon} symbol="ARX" bg="bg-[#D49F12]" />
                            </div>
                        </div>

                        {/* Arrow divider */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/15 bg-[#3F4248]/90 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.4)] mt-6 lg:mt-0">
                            <ArrowUpDown size={30} className="text-white/90" />
                        </div>

                        {/* Buy: USDT */}
                        <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(102deg,rgba(212,159,18,0.2)_0%,rgba(35,37,43,0.65)_30%,rgba(18,18,20,0.92)_60%,rgba(16,16,16,0.96)_100%)] px-5 py-5 sm:px-7 sm:py-6">
                            <span className="font-sofia-medium text-xs uppercase tracking-[0.2em] text-white/75">Buy</span>

                            <div className="mt-2 flex flex-col lg:flex-row items-center justify-between gap-4">
                                <p className={`font-sofia-semibold text-5xl leading-none ${usdtOut === '0.00' || usdtOut === '—' ? 'text-white/30' : 'text-white'}`}>
                                    {usdtOut}
                                </p>
                                <TokenBadge icon={usdtIcon} symbol="USDT" bg="bg-[#26A17B]" />
                            </div>

                            <p className="mt-3 font-sofia-medium text-[15px] text-white/55">
                                You will receive approximately <span className="text-white font-sofia-semibold">{usdtOut} USDT</span>
                            </p>
                        </div>
                    </div>

                    <PrimaryBtn
                        type="button"
                        onClick={() => swap(arxAmount, () => setArxAmount(''))}
                        disabled={isLoading || !isConnected}
                        title={buttonLabel}
                        className="mt-6 h-14 w-full rounded-[16px] border border-[#F7C94A]/70 bg-[linear-gradient(180deg,#F2BE35_0%,#D49F12_100%)] shadow-[0_10px_24px_rgba(212,159,18,0.35)] transition hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        textClassName="text-[22px] font-sofia-bold"
                    />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.8))]" />
        </section>
    );
};

export default Swap;
