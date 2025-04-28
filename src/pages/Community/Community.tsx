import React, { useEffect } from "react";
import EventCard from "../../components/Cards/EventCard";
import useApiCallhook from "../../hooks/useApiCallhook";
import { getCommunityMeetups } from "../../api/events";

interface Event {
  info: string;
  time: string;
  date: string;
  venue: string;
  description: string;
  images: string[];
}

const Community = () => {
  const { data: events, loading, fetch } = useApiCallhook();

  useEffect(() => {
    fetch(getCommunityMeetups, []);
  }, [fetch]);

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Journey Through Inspiring Events & Community Meetups
      </h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {events.length > 0 &&
          events?.map((event: any, index: number) => (
            <EventCard key={index} event={event} />
          ))}
      </div>
    </div>
  );
};

export default Community;
