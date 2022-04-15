import React from "react";
import { useParams } from "react-router-dom";
import { GetSingleRoutine } from ".";

const SingleRoutineView = ({ routines }) => {
  const { routineId } = useParams();

  const routine = routines.find((routine) => routineId === routine.id);

  return (
    <>
      <h3>Single Routine View</h3>
      <GetSingleRoutine routine={routine}></GetSingleRoutine>
    </>
  );
};

export default SingleRoutineView;

/*


  <GetSingleRoutine routine={routine}>
                </GetSingleRoutine>


 post.author.username !== user.username ?
            <>
                <h3>Single Post View</h3>
                <GetSingleRoutine post={post}>
                    <MessageForm post={post} token={token} />
                </GetSinglePost>
            </>
            :
            <>
                <h3>Single Post View </h3>
                <h5>This is your post, you cannot send a message.</h5>
                <GetSinglePost post={post} />
            </>
    )
*/
