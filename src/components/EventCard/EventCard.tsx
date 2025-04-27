import React from "react";

interface EventCardModel {
  title: string;
  organizer: string;
  time: string;
  date: string;
  venue: string;
  description: string;
  images: string[];
}

interface Props {
  event: EventCardModel;
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="rounded-2xl p-6 flex flex-col gap-4 w-3/4 mx-auto shadow-xl overflow-hidden">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <h4 className="text-sm text-text-200">{event.organizer}</h4>
      <p className="text-sm text-gray-500">
        {event.date} • {event.time} • {event.venue}
      </p>
      <p className="text-text-500">
        {event.description.split(". ").map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence}.
            <br />
            <br />
          </React.Fragment>
        ))}
      </p>

      <div className="flex overflow-x-auto gap-2 my-2 pb-4">
        {event.images?.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Event ${index}`}
            className="h-32 w-48 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
