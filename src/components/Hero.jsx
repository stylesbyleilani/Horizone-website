

"use client"
import React, { useState } from 'react';
import { ArrowBigDownDash, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import { db } from '@/Library/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from './WhatsappButton';

const Home = () => {
  const [roomType, setRoomType] = useState()
  const [arrival, setArrival] = useState()
  const [departure, setDeparture] = useState()
  const [roomNumber, setRoomNumber] = useState()

  const handleSubmit =  async (e)=>{
    e.preventDefault()

    try {
      if (!arrival || !departure || !roomNumber || !roomType) {
        toast.warning('Please fill in all fields');
        return;
      }
          const addData = addBooking(roomNumber, roomType, arrival, departure)
          if(addData){
            setArrival("")
            setDeparture("")
            setRoomNumber("") 
            setRoomType("")
            toast.success("Booking succesful")
            }
            

    } catch (error) {
      toast.error("error booking")
    }


  }

  const addBooking = async (roomNumber, roomType, arrival, departure)=>{

    try {
      const bookingRef = await addDoc(collection(db, "Bookings"),{
        roomNumber:roomNumber,
        roomType:roomType,
        arrival:arrival,
        departure:departure,
        createdAt: new Date().toISOString(),

      })
    console.log("document added", bookingRef.id)
    return true
    } catch (error) {
      console.log(error, "error adding document")
      return false
    }
  }


  return (
    <div id='home'
  className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/m8.jpg')" }}
>
<ToastContainer/>

<div className="absolute inset-0 bg-black/70" /> 

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mt-32 md:mt-0 tracking-widest font-medium leading-tight mb-6 text-white">
              <span className="block mb-2">Find Your Best Staycation   </span>
              <span>in Horizone Hotel</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              <span className="block">Luxurious spaces, redefined designs, personalized services and modern</span>
              <span>amenities for a sophisticated, upscale lifestyle.</span>
            </p>
          </div>
        </div>

<div className="w-full md:mt-0 mt-44 px-4 pb-5">
      <form className="bg-white rounded-lg shadow-xl p-4"onSubmit={handleSubmit} >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label htmlFor="roomType" className="block text-gray-900 text-lg font-medium">
              Room Type
            </label>
            <select
              id="roomType" value={roomType} onChange={(e)=>setRoomType(e.target.value)}
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            >
              <option value="Deluxe">Select Type</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Regular">Regular</option>
              <option value="Standard">Standard</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="arrival" className="block text-gray-900 text-lg font-medium">
              Arrival
            </label>
            <input value={arrival} onChange={(e)=>setArrival(e.target.value)}
              type="date"
              id="arrival"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="departure" className="block text-gray-900 text-lg font-medium">
              Departure
            </label>
            <input value={departure} onChange={(e)=>setDeparture(e.target.value)}
              type="date"
              id="departure"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">

<label htmlFor="roomType" className="block text-gray-900 text-lg font-medium">
              Rooms
            </label>
            <select
              id="roomType" value={roomNumber} onChange={(e)=>setRoomNumber(e.target.value)}
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            >
              <option value="Deluxe">Room</option>
              <option value="1 ">1 Room</option>
              <option value="2 ">2 Rooms</option>
              <option value="3 ">3 Rooms</option>
              <option value="4 ">4 Rooms</option>
            </select>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-2">
          <p className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">Get in touch</p>
          <button type='submit' className="w-full sm:w-auto px-6 py-2 font-semibold bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </form>
    </div>
<WhatsAppButton/>




      </div>
    </div>
  );
};

export default Home;



























// import React, { useState } from 'react';
// import { ArrowBigDownDash, LocateIcon } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';




// const Home = () => {
//   const [roomType, setRoomType] = useState('Deluxe');
//   const [arrival, setArrival] = useState('');
//   const [departure, setDeparture] = useState('');
//   const [roomNumber, setRoomNumber] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setShowSuccess(false);

//     // Validation
    // if (!arrival || !departure || !roomNumber) {
    //   setError('Please fill in all fields');
    //   setIsLoading(false);
    //   return;
    // }

//     try {
//       const bookingData = {
//         roomType,
//         arrival,
//         departure,
//         roomNumber,
        // createdAt: new Date().toISOString(),
//       };

//       // Add booking to Firestore
//       await addDoc(collection(db, 'bookings'), bookingData);
      
//       // Show success message
//       setShowSuccess(true);
      
//       // Reset form
//       setRoomType('Deluxe');
//       setArrival('');
//       setDeparture('');
//       setRoomNumber(1);
//     } catch (err) {
//       setError('Failed to submit booking. Please try again.');
//       console.error('Error adding booking: ', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div id='home'
//       className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: "url('/m8.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/70" /> 

//       <div className="relative z-10 min-h-screen flex flex-col">
//         <div className="flex-1 flex items-center justify-center">
//           <div className="max-w-4xl mx-auto text-center px-4">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl mt-32 md:mt-0 tracking-widest font-medium leading-tight mb-6 text-white">
//               <span className="block mb-2">Find Your Best Staycation</span>
//               <span>in Horizone Hotel</span>
//             </h1>
//             <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
//               <span className="block">Luxurious spaces, redefined designs, personalized services and modern</span>
//               <span>amenities for a sophisticated, upscale lifestyle.</span>
//             </p>
//           </div>
//         </div>

//         <div className="w-full md:mt-0 mt-44 px-4 pb-5">
//           <div className="bg-white rounded-lg shadow-xl p-4">
//             {showSuccess && (
//               <div>                  Booking submitted successfully! We'll contact you soon with confirmation details.
// </div>

          
//               // <Alert className="mb-4 bg-green-50 text-green-900 border-green-200">
//                 // <AlertDescription>
//               //   </AlertDescription>
//               // </Alert>
//             )}
            
//             {error && (
//               // <Alert className="mb-4 bg-red-50 text-red-900 border-red-200">
//               //   <AlertDescription>{error}</AlertDescription>
//               // </Alert>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="roomType" className="block text-gray-900 text-lg font-medium">
//                     Room Type
//                   </label>
//                   <select
//                     id="roomType"
//                     value={roomType}
//                     onChange={(e) => setRoomType(e.target.value)}
//                     className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
//                   >
//                     <option value="Deluxe">Deluxe</option>
//                     <option value="Regular">Regular</option>
//                     <option value="Standard">Standard</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="arrival" className="block text-gray-900 text-lg font-medium">
//                     Arrival
//                   </label>
//                   <input
//                     type="date"
//                     id="arrival"
//                     value={arrival}
//                     onChange={(e) => setArrival(e.target.value)}
//                     className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="departure" className="block text-gray-900 text-lg font-medium">
//                     Departure
//                   </label>
//                   <input
//                     type="date"
//                     id="departure"
//                     value={departure}
//                     onChange={(e) => setDeparture(e.target.value)}
//                     className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="rooms" className="block text-gray-900 text-lg font-medium">
//                     Rooms
//                   </label>
//                   <input
//                     type="number"
//                     id="rooms"
//                     min="1"
//                     value={roomNumber}
//                     onChange={(e) => setRoomNumber(parseInt(e.target.value))}
//                     placeholder="Number of rooms"
//                     className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-2">
//                 <p className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">Get in touch</p>
//                 <button 
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full sm:w-auto px-6 py-2 font-semibold bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:bg-gray-400"
//                 >
//                   {isLoading ? 'Booking...' : 'Book Now' }
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
