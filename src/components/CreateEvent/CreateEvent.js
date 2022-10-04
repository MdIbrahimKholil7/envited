import React, { useEffect, useRef, useState } from 'react';
import { BiCalendar, BiRightArrowAlt, } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import defaultCameraImg from '../../assets/camera.png'




import { UseContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const CreateEvent = () => {

    const details = React.useContext(UseContext)
    const { setEventDetails } = details || {}
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState(defaultCameraImg)
    const navigate = useNavigate()
    const [time, setTime] = useState('16:00:00')
    const [endTime, setEndTime] = useState('20:00:00')
    const [eventName, setEventName] = useState('')
    const [host, setHost] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])
   
    let times
    let endTimes

        function tConv24(time24) {
            let ts = time24;
           
            let H = +ts?.substr(0, 2);
            let h = (H % 12) || 12;
            h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
            let ampm = H < 12 ? " AM" : " PM";
            ts = h + ts.substr(2, 3) + ampm;

          return ts;
          };
        
        function endTimeConv24(time24) {
            let ts = time24;
           
            let H = +ts?.substr(0, 2);
            let h = (H % 12) || 12;
            h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
            let ampm = H < 12 ? " AM" : " PM";
            ts = h + ts.substr(2, 3) + ampm;
          
           return ts;
          };
          endTimeConv24(endTime)
  





    // formating date 
    const startDate = format(date[0].startDate, 'PP').split(',')[0].split(' ').reverse()
    const endDate = format(date[0].endDate, 'PP').split(',')[0].split(' ').reverse()


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleForm = (e) => {
        e.preventDefault()

        setEventDetails({
            eventName,
            host,
            location,
            startDate,
            endDate,
            image,
            times:tConv24(time),
            startTime:time,
            endTime:endTime,
            endTimes:  endTimeConv24(endTime)

        })

        navigate('/event')
    }
    

    return (
        <div className='bg-[#F6F2FF]  pb-20'>
            <div className=' w-full mx-auto'>
                <h2 className='text-center md:text-[50px] text-[28px] py-20 font-bold text-[#240D57]'>Create your event</h2>
                <div>
                    <div className='flex-col md:flex-row items-center justify-center '>
                        <div
                            className='flex items-center gap-5 justify-center flex-col md:flex-row'
                        >
                            <BiCalendar
                                className='text-[26px] text-[#8456EC]'
                            />
                            <div
                                className='border-2 border-solid border-[#8456EC] rounded-md py-[10px] px-[21px] relative '
                            >

                                <span
                                    onClick={() => setOpen(!open)}
                                    className='
                                text-[#4F4F4F] font-bold cursor-pointer
                                '>
                                    {
                                        `${startDate} to ${endDate}`
                                    }
                                </span>
                                {
                                    open && <span className='absolute z-10 top-[46px] md:left-[-136px] left-[-90px]'>
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            minDate={new Date()}


                                        />
                                    </span>
                                }
                            </div>
                            <div className='border-2 border-solid cursor-pointer  border-[#8456EC] rounded-md py-[10px] px-[21px] relative flex gap-2'>
                                <span>Start Time</span>
                                <input
                                    value={time}
                                    className='bg-transparent font-bold cursor-pointer  outline-none border-0`'
                                    type="time"
                                    max="24:00"
                                    onChange={e => setTime(e.target.value)}
                                />

                            </div>
                            <div className='border-2 border-solid cursor-pointer  border-[#8456EC] rounded-md py-[10px] px-[21px] relative flex gap-2'>
                                <span>End Time</span>
                                <input
                                    value={endTime}
                                  
                                    className='bg-transparent font-bold cursor-pointer  outline-none border-0`'
                                    type="time"
                                    max="24:00"
                                    onChange={e => setEndTime(e.target.value)}
                                />

                            </div>
                        </div>

                    </div>
                    <div>




                        <div className="hero min-h-screen ">
                            <div className="hero-content items-center justify-evenly w-full flex-col lg:flex-row-reverse">
                                <div className='md:w-[40%] w-full  h-[400px] mt-10 md:mt-0'>
                                    <div style={{
                                        backgroundImage: `url(${image ? image : defaultCameraImg})`,
                                        width: '100%',
                                        height: '466px',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        objectFit: 'cover'
                                    }}
                                        className={`flex justify-center items-center`}>
                                        <label

                                            for="file">
                                            <div >
                                                <p>
                                                    <AiFillCamera
                                                        className='text-5xl cursor-pointer text-center mx-auto text-white'
                                                    />
                                                </p>
                                                <p className='cursor-pointer font-bold text-white'>Choose a Photo</p>
                                            </div>
                                        </label>
                                        <input
                                            onChange={onImageChange}
                                            className='hidden'
                                            type="file"
                                            id='file'
                                        />
                                    </div>
                                </div>
                                <div className="card  w-full md:min-w-[40%] lg:w-[40%] flex-shrink-0 mt-20 shadow-2xl bg-base-100">
                                    <p className='text-center mt-7 text-2xl font-bold text-[#240D57]'>Please Enter Your Event Details</p>
                                    <form
                                        onSubmit={handleForm}
                                    >
                                        <div className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Event Name</span>
                                                </label>
                                                <input
                                                    onChange={(e) => setEventName(e.target.value)}
                                                    required type="text" placeholder="Event name" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Host Name</span>
                                                </label>
                                                <input
                                                    onChange={(e) => setHost(e.target.value)}
                                                    required type="text" placeholder="Host name" className="input input-bordered" />

                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Location</span>
                                                </label>
                                                <input
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    required type="text" placeholder="Location" className="input input-bordered" />

                                            </div>

                                            <div className="form-control mt-6">
                                                <button className="btn bg-[#8456EC] text-white hover:bg-[#8456EC]">Next <span>
                                                    <BiRightArrowAlt className='text-[26px]' />
                                                </span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreateEvent;