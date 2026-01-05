import React from 'react';
import UpdateCard from '../../components/card/UpdateCard';
import { UseAdminAccount } from '../../blockchain/hooks/UseAdminAccount';
import { useReadContract } from 'wagmi';
import { config } from '../../blockchain/config';
const AdminUpdate = () => {

    const { data: isPaused, isLoading: isPausedLoading } = useReadContract({
        address: config.NODE_SALE_CONTRACT_ADDRESS,
        abi: config.NODE_ABI,
        functionName: 'paused',
    });

    const { numberOfNodeSlots,
        airdropARX,
        releasedTokenARX,
        treasuryWallet,
        updateTreasuryWallet,
        isUpdatingTreasuryWallet,
        nodeSellEndedTimestamp,
        updateNodeSellEndedTimestamp,
        isUpdatingNodeSellEndedTimestamp,
        contractARXBalance,
        contractUSDTBalance,
        withdrawARX,
        withdrawUSDT,
        isWithdrawingARX,
        isWithdrawingUSDT,
        totalUsersClaimableUSDT,
        depositUSDTToContract,
        isDepositingUSDT,
        pauseContract,
        unpauseContract,
        isPausing,
        isUnpausing,
        paused

    } = UseAdminAccount();

    const handleUpdateSubmit = (title, value) => {
        console.log('Update Submitted:', title, value);
    }

    return (
        <div>
            <div className='w-11/12 mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>




                    <UpdateCard
                        title="Diposit USDT to Contract"
                        isLoading={isDepositingUSDT}
                        subtitle={`Current USDT balace is ${contractUSDTBalance}. and required is ${totalUsersClaimableUSDT} USDT.`}
                        buttonTitle="Deposit"
                        inputList={[
                            {
                                key: "usdtAmount",
                                label: "USDT Amount",
                                type: "number",
                            },
                        ]}
                        onSubmit={async (value) =>
                            await depositUSDTToContract(value)
                        }
                    />



                    <UpdateCard
                        title="Set Treasury Wallet"
                        subtitle={`Current address is ${treasuryWallet}.`}
                        isLoading={isUpdatingTreasuryWallet}
                        buttonTitle="Update Treasury"
                        inputList={[
                            {
                                key: "Address",
                                label: "Enter Address",
                                type: "text",
                            },
                        ]}
                        onSubmit={async (value) =>
                            await updateTreasuryWallet(value.Address)
                        }
                    />

                    <UpdateCard
                        title="Set Node Sell Ended Timestamp"
                        isLoading={isUpdatingNodeSellEndedTimestamp}
                        subtitle={`Current date/time is ${nodeSellEndedTimestamp ? new Date(nodeSellEndedTimestamp * 1000).toLocaleString() : 'Not set'}.`}
                        inputList={[
                            {
                                key: "time",
                                label: "Date & Time",
                                type: "datetime-local",
                            },
                        ]}
                        onSubmit={async (value) => {
                            const timestamp = Math.floor(new Date(value.time).getTime() / 1000);
                            await updateNodeSellEndedTimestamp(timestamp);
                        }}
                    />


                    <UpdateCard
                        title="Withdraw ARX Token "
                        subtitle={`Current ARX Token Contract Balance is ${contractARXBalance}. Use 0 to withdraw all.`}
                        buttonTitle="Withdraw"
                        isLoading={isWithdrawingARX}
                        inputList={[
                            {
                                key: "arxBalance",
                                label: "ARX Balance",
                                type: "number",
                            },
                        ]}
                        onSubmit={async (value) =>
                            await withdrawARX(value)
                        }
                    />




                    <UpdateCard
                        title="Withdraw USDT Token"
                        subtitle={`Current USDT Token Contract Balance is ${contractUSDTBalance}. Use 0 to withdraw all.`}
                        buttonTitle="Withdraw"
                        isLoading={isWithdrawingUSDT}
                        inputList={[
                            {
                                key: "usdtBalance",
                                label: "USDT Balance",
                                type: "number",
                            },
                        ]}
                        onSubmit={async (value) =>
                            await withdrawUSDT(value)
                        }
                    />

                    <UpdateCard
                        title="Pause/Unpause Contract"
                        subtitle={isPaused ? "Contract is currently paused" : "Contract is currently unpaused"}
                        buttonTitle={isPaused ? "Unpause Contract" : "Pause Contract"}
                        isLoading={isPausing || isUnpausing}
                        onSubmit={async () => {
                            if (isPaused) {
                                await unpauseContract();
                            } else {
                                await pauseContract();
                            }
                        }}
                    />




                    {/* <UpdateCard
                        title="Set Minimum Amount"
                        inputList={[
                            {
                                key: "minAmount",
                                label: "Enter Amount",
                                type: "text",
                            },
                        ]}
                        onSubmit={(value) =>
                            handleUpdateSubmit("Set Minimum Amount", value)
                        }
                    />
                    <UpdateCard
                        title="Update Reward Interval"
                        placeholder="Enter Time in days"
                        onSubmit={(value) =>
                            handleUpdateSubmit("Update Reward Interval", value)
                        }
                    /> */}

                    {/* <UpdateCard
                        title="Pause/Unpause Staking"
                        isSelect
                        selectTitle="Select Option"
                        selectOptions={[
                            { id: 1, label: "Pause", value: 'Pause' },
                            { id: 2, label: "Unpause", value: 'Unpause' },
                        ]}
                        onSubmit={(value) =>
                            handleUpdateSubmit("Pause/Unpause Staking", value)
                        }
                    />
                    <UpdateCard
                        title="Change UID"
                        inputList={[
                            { key: "old", label: "Enter Old Code" },
                            {
                                key: "new",
                                label: "Enter New Code",
                            },
                        ]}
                        onSubmit={(value) => handleUpdateSubmit("Change UID", value)}
                    />
                    <UpdateCard
                        title="Withdraw Token"
                        placeholder="Enter Amount"
                        onSubmit={(value) => handleUpdateSubmit("Withdraw Token", value)}
                    />
                    <UpdateCard
                        title="Set Staking Period"
                        inputList={[
                            {
                                key: "month",
                                label: "Enter Month",
                                type: "text",
                            },
                            { key: "apy", label: "Enter Apy", type: "text" },
                        ]}
                        isSelect
                        selectTitle="Select Option"
                        selectOptions={[
                            { id: 1, label: "Active", value: 'Active' },
                            { id: 2, label: "Deactive", value: 'Deactive' },
                        ]}
                        onSubmit={(value) =>
                            handleUpdateSubmit("Set Staking Period", value)
                        }
                    />

                    <UpdateCard
                        title="Stake For A User"
                        inputList={[
                            {
                                key: "user",
                                label: "Enter User ID",
                                type: "text",
                            },
                            { key: "amount", label: "Enter Amount", type: "text" },
                        ]}
                        isSelect
                        selectTitle="Select Staking Period"
                        selectOptions={[
                            { id: 1, label: "6 Months", value: '"6 Months"' },
                            { id: 2, label: "12 Months", value: "12 Months" },
                            { id: 3, label: "24 Months", value: "24 Months" },
                        ]}
                        onSubmit={(value) => handleUpdateSubmit("Stake For A User", value)}  
                      /> */}
                </div>
            </div>
        </div>
    );
};

export default AdminUpdate;