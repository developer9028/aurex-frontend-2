import React from 'react';
import PrimaryBtn from '../../components/btn/PrimaryBtn';
import OutlineBtn from '../../components/btn/OutlineBtn';
import bannerImg from '../../assets/images/banner/banner.png'
import bannerBgImg from '../../assets/images/banner/banner-bg.png'
import BannerCard from '../../components/card/BannerCard';
import { bannerData } from '../../assets/mock/homeData';

const Banner = () => {
    return (
        <div className='min-h-[80vh] relative w-full'>
            <div className='container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
                    {/* text section  */}
                    <div className='w-full lg:w-6/12'>
                        <h1 className='text-[30px] lg:text-[48px] text-white font-sofia-semibold'>
                            AI-driven <span className='text-primary'>nodes,tokenized</span> <br />
                            <span className='text-primary'>utility & NFT lab-all</span> powered <br />
                            by $OREON
                        </h1>
                        <p className='mt-3 text-[16px] lg:text-[20px] text-[#FAFAFB] font-sofia-normal'>
                            Join a decentralized ecosystem where AI computation meets token economics.Buy tokens,run nodes,& miint AI NFTS_safely and transparently.
                        </p>
                        <div className='flex items-center gap-5 mt-10'>
                            <PrimaryBtn
                                title="Join Whitelist"
                            />
                            <OutlineBtn
                                title='Buy Token'
                            />
                        </div>
                    </div>
                    {/* img section  */}
                    <div className='w-full lg:w-6/12'>
                        <img
                            src={bannerImg}
                            alt=""
                            className='w-full h-[300px] lg:h-[500px] object-contain'
                        />
                    </div>
                </div>
                <div className='mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5'>
                    {bannerData.map(item => <BannerCard
                        key={item.id}
                        item={item}
                    />)}
                </div>
            </div>

            <img
                src={bannerBgImg}
                alt=""
                className='absolute top-0 left-0 w-full h-full object-cover'
            />
        </div>
    );
};

export default Banner;