import React from "react";
import { EventSummaryModel } from "../../interfaces/common.model";

interface Props {
  event: EventSummaryModel;
  onClick?: any;
}

const EventSummaryCard: React.FC<Props> = ({ event, onClick }) => {
  return (
    <div
      className="border border-secondary-500/35 rounded-lg overflow-hidden shadow-xl backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 animate-fade-in-up hover:cursor-pointer hover:-translate-y-0.5"
      onClick={onClick}
    >
      <img src={event?.image} alt={""} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{event?.title}</h2>
        <p className="text-sm text-gray-500">{event?.organizer}</p>
        <p className="text-sm mt-2">
          {event?.date} • {event?.time}
        </p>
        <p className="text-sm">
          {event?.venue}, {event?.city}
        </p>
      </div>
    </div>
  );
};

export default EventSummaryCard;
