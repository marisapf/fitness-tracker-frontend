import React from "react";
import { useParams } from "react-router-dom";
import { GetSingleRoutine } from ".";

const SingleRoutineView = ({ routines }) => {
  const { routineId } = useParams();

  const routine = routines.find((routine) => routineId === routine.id);

  return (
    <>
      <h3>Single Routine View</h3>
      <GetSingleRoutine 
        routine={routine}>
      </GetSingleRoutine>
    </>
  );
};

export default SingleRoutineView;

/*
 */
