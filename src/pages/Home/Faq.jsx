import React from 'react';
import Title from '../../components/Title.jsx';
import chartImg from '../../assets/images/Tokenomics.png'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/lightswind/accordion';
import { faqData } from '../../assets/mock/homeData.js';

const Faq = () => {
    return (
        <div className='mt-20 lg:mt-40'>
            {/* Our Vision */}
            <div className='container w-11/12 xl:w-full mx-auto'>
                <Title
                    title='Faq'
                />

                <div className='w-full lg:w-8/12 mx-auto mt-10'>
                    <Accordion
                        type="single"
                        className="gap-5 flex flex-col"
                    >
                        {faqData.map(x => <AccordionItem
                            value={`item-${x.id}`}
                            className='border border-[#2B2B2B] data-[state=open]:border-[#FFE296] p-4 rounded-[14px] transition-colors duration-300'
                        >
                            <AccordionTrigger
                                className='flex items-center justify-between w-full text-[#F6F6F6] text-[18px] font-medium'
                            >
                                {x.question}
                            </AccordionTrigger>
                            <AccordionContent className='text-[#C8CACC] text-[14px] font-semibold'>
                                {x.answer}
                            </AccordionContent>
                        </AccordionItem>)}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;