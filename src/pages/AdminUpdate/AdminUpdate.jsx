import React from 'react';
import UpdateCard from '../../components/card/UpdateCard';
const AdminUpdate = () => {

    const handleUpdateSubmit = (title, value) => {
        console.log('Update Submitted:', title, value);
    }

    return (
        <div>
            <div className='w-11/12 mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <UpdateCard
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
                    />

                    <UpdateCard
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
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminUpdate;