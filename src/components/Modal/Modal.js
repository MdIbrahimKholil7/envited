import React, { useState } from 'react';

const Modal = ({ setEventDetails, eventDetails, setModal }) => {
    const { eventName: name, host: hostName, location: address } = eventDetails || {}

    const [eventName, setEventName] = useState(name)
    const [host, setHost] = useState(hostName)
    const [location, setLocation] = useState(address)

    const handleForm = (e) => {
        e.preventDefault()
        console.log(eventName,host,location)
        setEventDetails({
            ...eventDetails,
            eventName,
            host,
            location,

        })

        setModal(null)
    }
 
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="w-full  flex-shrink-0 bg-base-100">
                        <p className='text-center mt-7 text-2xl font-bold text-[#240D57]'>Update Your Event</p>
                        <form
                            onSubmit={handleForm}
                        >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Event Name</span>
                                    </label>
                                    <input
                                        value={eventName}
                                        onChange={(e) => setEventName(e.target.value)}
                                        required type="text"
                                        placeholder="Event name"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Host Name</span>
                                    </label>
                                    <input
                                        value={host}
                                        onChange={(e) => setHost(e.target.value)}
                                        required
                                        type="text"
                                        placeholder="Host name"
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required type="text"
                                        placeholder="Location"
                                        className="input input-bordered" />

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-[#8456EC] text-white hover:bg-[#8456EC]">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;