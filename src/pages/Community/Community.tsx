// src/pages/community.tsx

import React, { useEffect, useState } from "react";
import axios from "axios"; // if you're using axios
import EventCard from "../../components/EventCard/EventCard";
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

  console.log("Events - ", events);

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Developer Community
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
