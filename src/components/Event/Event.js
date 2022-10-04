import React, { useState } from 'react';
import eventImg from '../../assets/Birthday cake.png'
import { BiCalendar, } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiChevronRight, FiEdit2 } from 'react-icons/fi';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { UseContext } from '../../App';
import Modal from '../Modal/Modal';


const Event = () => {
    const details = React.useContext(UseContext)
    const { eventDetails, setEventDetails } = details || {}
    const { eventName, host,location,image,times,endTimes,startTime,endTime} = eventDetails || {}
    console.log(eventDetails)
    const [modal, setModal] = useState(null)
    const [open, setOpen] = useState(false)
    const [update, setUpdate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])

    // formating date 
    const startDate = format(date[0].startDate, 'PP').split(',')[0].split(' ').reverse()
    const endDate = format(date[0].endDate, 'PP').split(',')[0].split(' ').reverse()

    const handleDate = (item) => {
        setDate([item.selection])
        setUpdate(true)
    }

    return (
        <div>
            <div className="hero min-h-screen w-full md:py-20 y-0 bg-[#fff]">
                <div className="hero-content w-full px-0 md:px-20 py-0 justify-between items-start flex-col lg:flex-row-reverse">
                    <img src={
                        image?image:eventImg
                    } 
                    className="sm:max-w-[500px] w-full sm:mx-auto lg:mx-1 mb-10 lg:mb-0 rounded-lg shadow-2xl" alt='eventImg' />
                    <div
                        className='px-5 w-full'
                    >
                        <h1 className="text-[28px] md:text-[48px]    font-bold">{eventName}</h1>
                        <p className='py-4 font-[600] text-[18px] text-[#828282]'>Hosted by <span
                            className='text-[#828282] font-bold'
                        >{host}</span></p>
                        <div className='w-full '>
                            <div className='flex justify-between items-center w-full'>
                                <div
                                    className='flex items-center gap-4'
                                >
                                    <p
                                        onClick={() => setOpen(!open)}
                                        className='shadow-lg p-2 curso rounded-md'>
                                        <BiCalendar

                                            className='text-[26px] text-[#8456EC]'
                                        />
                                    </p>
                                    <div
                                        className=' py-4 relative '
                                    >

                                        <p
                                            onClick={() => setOpen(!open)}
                                            className='
                                text-[#4F4F4F] font-bold cursor-pointer
                                '>
                                            {update && <p
                                                className='text-[#240D57] text-[18px]'
                                            >
                                                {
                                                    update && `${startDate}  ${times}`
                                                }
                                            </p>}
                                            {update && <p
                                                className='text-[#4F4F4F] text-[18px]'
                                            >
                                                {
                                                    update && `${endDate} ${endTimes}`
                                                }
                                            </p>}
                                            {!update && <p
                                                className='text-[#240D57] text-[18px]'
                                            >
                                                {
                                                    `${startDate} ${times}`
                                                }
                                            </p>}
                                            {!update && <p
                                                className='text-[#4F4F4F] text-[18px]'
                                            >
                                                {
                                                    `${endDate}  ${endTimes}`
                                                }
                                            </p>}
                                        </p>
                                        {
                                            open && <span className='absolute z-10 top-[66px] md:left-[-6px] left-[-90px]'>
                                                <DateRange
                                                    editableDateInputs={true}
                                                    onChange={(item) => handleDate(item)}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={date}
                                                    minDate={new Date()}


                                                />
                                            </span>
                                        }
                                    </div>

                                </div>
                                <p className='pr-16'>
                                    <FiChevronRight
                                        className='text-3xl text-[#BDBDBD]'
                                    />
                                </p>
                            </div>
                            <div className='flex gap-4 w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex gap-4 '>
                                        <div>
                                            <p className='shadow-lg p-2'>
                                                <HiOutlineLocationMarker
                                                    className='text-[#8456EC] text-[26px]'
                                                />
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-[#240D57] font-bold' >Street name</p>

                                            <p
                                                className='text-[#4F4F4F] font-bold'
                                            >
                                                {
                                                    location
                                                }</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='pr-16'>
                                            <FiChevronRight
                                                className='text-3xl text-[#BDBDBD]'
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                          
                            <label
                                onClick={()=>setModal(true)}
                                htmlFor="my-modal-6"
                                className='flex gap-1 w-[140px] text-[16px] items-center mx-auto mt-20 btn font-bold'
                            >
                                <FiEdit2
                                    className='font-bold '
                                />
                                Edit
                            </label>
                        </div>
                    </div>
                    {
                        modal && <Modal
                            eventDetails={eventDetails}
                            setEventDetails={setEventDetails}
                            setModal={setModal}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;