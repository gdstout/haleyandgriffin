import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from "@mui/lab";

const WeddingTimeline = () => {
  let content = (
    <Timeline >
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            3:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Arrive at chapel</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            3:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ceremony begins</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            4:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ceremony ends, short walk to Emerson Room for cocktail hour</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            4:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Pictures with family and wedding party</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            5:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Reception begins</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            6:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Somethin important happens at the reception</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            11:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
          </TimelineSeparator>
          <TimelineContent>Reception ends</TimelineContent>
        </TimelineItem>
      </Timeline>
  );
  return content;
};

export default WeddingTimeline;
