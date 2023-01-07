import { colors } from '../data/colors';
import { icons } from '../data/icons';

const Task = ({ taskItem, time }) => {
  const { title } = taskItem;

  return (
    <div
      className="rounded-xl"
      style={{ backgroundColor: colors[title.split(' ').join('')] }}
    >
      <div className=" relative h-8  overflow-hidden">
        <img
          className="w-14 absolute z-0 right-3"
          src={icons[title.split(' ').join('')]}
        />
      </div>
      <div className="bg-darkBlue text-white px-5 py-4 rounded-xl relative z-1">
        <div className="flex justify-between items-center">
          <p className="text-sm"> {title} </p>
          <img className="w-3" src={icons['Ellipsis']} />
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start mt-5 sm:gap-3 md:gap-0">
          <p className="text-2xl font-[300] md:text-4xl">
            {taskItem.timeframes[time].current}hrs
          </p>
          <p className="text-xs text-paleBlue md:mt-3">
            Last Week - {taskItem.timeframes[time].previous}Hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
