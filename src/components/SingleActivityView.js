import React from "react";
import { useParams } from "react-router-dom";
import { GetSingleActivity } from ".";

const SingleActivityView = ({ activities }) => {
  const { activityId } = useParams();

  const activity = activities.find((activity) => activityId === activity.id);

  return (
    <>
      <h3>Single Post View</h3>
      <GetSingleActivity activity={activity}></GetSingleActivity>
    </>
  );
};

export default SingleActivityView;
