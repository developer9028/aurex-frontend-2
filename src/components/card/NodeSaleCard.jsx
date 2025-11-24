import React, { useState } from 'react';
import { BorderBeam } from "../lightswind/border-beam";
import nodeCardIcon from '../../assets/images/node-card.png'
import { Progress } from "../../components/lightswind/progress";
import radioIcon from '../../assets/icons/radio.svg'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus-sign.svg'
import PrimaryBtn from '../btn/PrimaryBtn';

const NodeSaleCard = ({ item }) => {

    const [count, setCount] = useState(1);


    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

    return (
        <div className="relative p-1 rounded-[10px] overflow-hidden bg-[#1B1B1B66] border border-[#FFE47666]">
            <BorderBeam
                colorFrom="#FFE476"
                colorTo="#B9AA57"
                size={100}
                duration={10}
                borderThickness={1}
                beamBorderRadius={10}
            />
            <div className="relative p-4 rounded-md z-10">
                <img
                    src={nodeCardIcon}
                    alt=""
                    className='w-full h-[220px] object-cover'
                />

                {/* title  */}
                <h2 className='text-center mt-5 text-white font-medium uppercase'>
                    {item.title}
                </h2>

                {/* Node price */}
                <div>
                    <div className='flex items-center justify-between gap-5'>
                        <p className='text-[#C1C4CC] text-[14px] font-medium'>
                            Node price
                        </p>
                    </div>

                    <p className='text-white text-[18px] font-medium mt-1'>
                        ${item.nodePrice}
                    </p>
                </div>

                {/* Node status  */}
                <div className='mt-5'>
                    <div className='flex items-center justify-between gap-5'>
                        <p className='text-left text-[14px] text-[#D8D8D8] font-medium'>
                            Node status
                        </p>
                        <p className='text-right text-[16px] text-white font-medium'>
                            {`${item.soldNodes}/${item.totalNodes}`}
                        </p>
                    </div>
                    <Progress
                        value={item.nodeStatus || 0}
                        className='h-[10px] mt-2'
                    />
                </div>

                {/* Rewards */}
                <div className='mt-5'>
                    <p className='text-[16px] text-white font-medium'>
                        Rewards
                    </p>

                    <div>
                        <ul>
                            {item?.rewards?.map(x => <li
                                key={x}
                                className='flex items-center gap-2'>
                                <img src={radioIcon} alt="" className='size-[14px]' />
                                <p className='text-[16px] text-white font-medium'>
                                    {x}
                                </p>
                            </li>)}
                        </ul>
                    </div>
                </div>

                {/* Quantity */}
                <div className='mt-5'>
                    <p className='text-[16px] text-white font-medium'>
                        Quantity
                    </p>

                    <div className='flex items-center justify-center gap-5 mt-5'>
                        <button onClick={handleDecrease}>
                            <img
                                src={minusIcon}
                                alt=""
                                className='size-[30px]'
                            />
                        </button>
                        <span className='text-white text-[24px] text-center font-medium w-[40px]'>
                            {count || 1}
                        </span>
                        <button onClick={handleIncrease}>
                            <img
                                src={plusIcon}
                                alt=""
                                className='size-[30px]'
                            />
                        </button>
                    </div>
                </div>

                {/* btn  */}
                <div className='w-full mt-5'>
                    <PrimaryBtn
                        title='Buy Node'
                        className='w-full'
                    />
                </div>
            </div>
        </div>

    );
};

export default NodeSaleCard;