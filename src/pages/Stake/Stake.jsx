import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSearchParams } from 'react-router';
import { isAddress, zeroAddress } from 'viem';
import blackBallImg from '../../assets/images/black-ball.png';
import bgImg from '../../assets/images/stake-bg.png';
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import { UseStaking, STAKING_DURATIONS } from '../../blockchain/hooks/UseStaking';

const Stake = () => {
    const [searchParams] = useSearchParams();
    const [selectedDuration, setSelectedDuration] = useState(STAKING_DURATIONS[0]);
    const [amount, setAmount] = useState('');

    const {
        isConnected,
        formattedUsdtBalance,
        totalStakedInARX,
        isLoading,
        stakePhase,
        stake,
    } = UseStaking();

    // Read referrer from ?ref=0x... URL param
    const refParam = searchParams.get('ref') || '';
    const referrer = isAddress(refParam) ? refParam : zeroAddress;

    const handleMax = () => setAmount(formattedUsdtBalance);

    const handleStake = () => {
        stake(amount, selectedDuration.durationIndex, referrer);
    };

    const btnTitle =
        stakePhase === 'approving' ? 'Approving...' :
        stakePhase === 'staking'   ? 'Staking...'   :
        stakePhase === 'done'      ? 'Staked!'       :
        'Stake Aurex';

    const isDisabled = isLoading || !amount || Number(amount) <= 0 || stakePhase === 'done';

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-full h-full min-h-[80vh] flex items-center justify-center mt-20 mb-30 lg:mt-30 lg:mb-50">
                {/* stake card  */}
                <div className="rounded-[20px] p-6 sm:p-8 lg:p-10 bg-[#131313] w-11/12 lg:w-6/12 mx-auto z-10 relative border border-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                    <div className="p-4 sm:p-5 bg-[#71717121] rounded-[20px] border border-white/5">
                        <p className="text-[20px] sm:text-[24px] text-white font-sofia-semibold text-center uppercase tracking-wide">
                            STAKE YOUR TOKEN
                        </p>
                        <p className="mt-2 text-[14px] sm:text-[16px] text-[#D9D9D9] text-center">
                            Stake your token and reach for the stars!
                        </p>
                    </div>

                    <div className="my-8 sm:my-10 border-y border-[#FFFFFF2B] py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-0 items-center">
                        <div>
                            <p className="text-[16px] text-[#CACACA] font-medium text-center">
                                USDT Balance
                            </p>
                            <p className="text-[20px] sm:text-[24px] text-white font-medium text-center mt-2">
                                {isConnected
                                    ? `${Number(formattedUsdtBalance).toLocaleString(undefined, { maximumFractionDigits: 4 })} USDT`
                                    : '— USDT'}
                            </p>
                        </div>

                        <div className="hidden sm:block h-14 w-px bg-linear-to-b from-transparent via-white/60 to-transparent mx-auto" />
                        <div className="sm:hidden h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

                        <div>
                            <p className="text-[16px] text-[#CACACA] font-medium text-center">
                                Staked
                            </p>
                            <p className="text-[20px] sm:text-[24px] text-white font-medium text-center mt-2">
                                {isConnected
                                    ? `${Number(totalStakedInARX).toLocaleString(undefined, { maximumFractionDigits: 4 })} ARX`
                                    : '— ARX'}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <p className="mb-3 text-[16px] sm:text-[18px] font-medium text-white">
                                Stake Amount (USDT)
                            </p>
                            <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-[#2A2A2A] px-4 py-3 sm:px-5 sm:py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    disabled={!isConnected || isLoading}
                                    className="w-full border-0 bg-transparent text-lg sm:text-xl font-medium text-white outline-none placeholder:text-white/45 disabled:opacity-50"
                                />
                                <button
                                    type="button"
                                    onClick={handleMax}
                                    disabled={!isConnected || isLoading}
                                    className="shrink-0 rounded-[10px] border border-[#F2BE35] px-4 py-2 text-sm font-semibold text-[#F2BE35] transition-colors hover:bg-[#F2BE35] hover:text-black disabled:opacity-40"
                                >
                                    Max
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="mb-4 text-[16px] sm:text-[18px] font-medium text-white">
                                Staking Duration
                            </p>
                            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                                {STAKING_DURATIONS.map((duration) => {
                                    const isActive = selectedDuration.durationIndex === duration.durationIndex;
                                    return (
                                        <button
                                            key={duration.durationIndex}
                                            type="button"
                                            onClick={() => setSelectedDuration(duration)}
                                            disabled={isLoading}
                                            className={`rounded-[18px] border px-3 py-4 text-center transition-all sm:px-4 sm:py-5 disabled:opacity-40 ${isActive
                                                ? 'border-[#F2BE35] bg-[#2b2512] shadow-[0_0_0_1px_rgba(242,190,53,0.3),0_14px_30px_rgba(0,0,0,0.35)]'
                                                : 'border-white/6 bg-white/8 hover:border-white/12 hover:bg-white/10'
                                            }`}
                                        >
                                            <p className="text-base font-medium text-white sm:text-lg">
                                                {duration.label}
                                            </p>
                                            <p className="mt-2 text-sm text-white/75 sm:text-base">
                                                {duration.apy}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {isConnected ? (
                            <PrimaryBtn
                                type="button"
                                title={btnTitle}
                                onClick={handleStake}
                                disabled={isDisabled}
                                loading={isLoading}
                                className="h-[58px] w-full rounded-[18px] bg-linear-to-r from-[#E2A81F] via-[#F4C33B] to-[#FFDD72] shadow-[0_16px_40px_rgba(242,190,53,0.35)] hover:brightness-105"
                                textClassName="text-[18px] font-sofia-bold text-black"
                            />
                        ) : (
                            <ConnectButton.Custom>
                                {({ openConnectModal }) => (
                                    <button
                                        type="button"
                                        onClick={openConnectModal}
                                        className="h-[58px] w-full rounded-[18px] bg-linear-to-r from-[#E2A81F] via-[#F4C33B] to-[#FFDD72] shadow-[0_16px_40px_rgba(242,190,53,0.35)] hover:brightness-105 flex items-center justify-center cursor-pointer"
                                    >
                                        <span className="text-[18px] font-sofia-bold text-black">Connect Wallet to Stake</span>
                                    </button>
                                )}
                            </ConnectButton.Custom>
                        )}
                    </div>
                </div>

                <img src={bgImg} alt="Background" className="absolute inset-0 w-full h-full object-fill" />
                <img src={blackBallImg} alt="blackBallImg" className="absolute top-[200px] left-20 inset-0 size-[200px] object-contain animate-[spin_24s_linear_infinite]" />
            </div>
        </div>
    );
};

export default Stake;