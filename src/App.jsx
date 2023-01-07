import { useState } from 'react';
import ImagenPortada from './assets/images/image-jeremy.png';
import Task from './components/Task';
import Data from './data/data.json';

function App() {
  const [time, setTime] = useState('weekly');

  const handleTimeframe = (e) => {
    setTime(e.target.dataset.time);
  };
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className=" my-[5rem] sm:my-12 grid grid-cols-1 gap-4 sm:grid-cols-2 h-screen md:max-w-[80%]  justify-center content-center md:grid-cols-4 mx-auto">
        <div className="bg-darkBlue rounded-xl sm:col-span-2 md:col-span-1 md:row-span-2 ">
          <div className="bg-primaryBlue flex justify-center items-center p-4 rounded-xl gap-4 md:flex-col md:items-start md:pb-16">
            <img
              className="w-12 border-white border-2 rounded-full"
              src={ImagenPortada}
              alt="User profile picture"
            />
            <div className="text-white font-[300]">
              <p className="text-[0.6rem] text-paleBlue font-[500]">
                Report for
              </p>
              <p className="md:text-3xl">Jeremy Robson</p>
            </div>
          </div>
          <div className="flex md:items-start justify-evenly text-white py-3 text-xs md:flex-col md:px-5 md:py-4 md:gap-y-5">
            <button
              onClick={handleTimeframe}
              className="hover:cursor-pointer focus:text-white text-paleBlue inline"
              data-time="daily"
            >
              Daily
            </button>
            <button
              onClick={handleTimeframe}
              className="hover:cursor-pointer focus:text-white text-paleBlue"
              data-time="weekly"
            >
              Weekly
            </button>
            <button
              onClick={handleTimeframe}
              className="hover:cursor-pointer focus:text-white text-paleBlue"
              data-time="monthly"
            >
              Monthly
            </button>
          </div>
        </div>

        {Data.map((taskItem) => {
          return <Task key={Data.title} taskItem={taskItem} time={time} />;
        })}
      </div>
    </main>
  );
}

export default App;
