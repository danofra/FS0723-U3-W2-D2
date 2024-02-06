import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZjE1YWUwODVmYTAwMTk2MzFhODUiLCJpYXQiOjE3MDcxNDM1MTQsImV4cCI6MTcwODM1MzExNH0.B6krWrT9m1tHOfbkDR3DXPq6U6NBTw9mR4YRysEf1lo",
            },
          }
        );
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
