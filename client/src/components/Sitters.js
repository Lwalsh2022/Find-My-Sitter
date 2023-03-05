import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { GET_SITTERS } from "../services/mutations";
import { useQuery } from "@apollo/client";

const Sitters = (props) => {
  const location = useLocation();
  //fetch sitter data from database using useQuery
  const { loading, error, data } = useQuery(GET_SITTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const sitters = [...(data?.sitters ?? [])];
  console.log("data", sitters);

  const getFullname = (sitter) => {
    return `${sitter?.firstName} ${sitter?.lastName}`;
  };

  const getAvgReviewRating = (reviews) => {
    if (!reviews?.length) return 'No reviews yet'
    const total = reviews?.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    return total / reviews?.length;
  };

  console.log("current posts data", props.location);
  return (
    <div className="container flex justify-center w-100 outline">
      <div className="w-30 m-auto">
        <div id="header"></div>

        {/* render a list of sitters fullname and experience from data*/}

        {sitters?.map((sitter) => (
          <div className="sitters-info">
            <div className="sitter-header flex w-100">
              <h2>{getFullname(sitter)}</h2>
              <span>{getAvgReviewRating(sitter?.reviews)}</span>
            </div>
            <p>{sitter.email}</p>
            <p>Experience: {sitter?.experience}</p>

            {/* show top 3 ratings */}
            {sitter?.reviews?.map((rating) => (
              <div className="sitter-ratings">
                <p>Rating: {rating.rating}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitters;
