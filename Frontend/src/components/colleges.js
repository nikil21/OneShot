import React, { useState, useEffect } from "react";
import CollegeDataService from "../services/college";
// import { Link } from "react-router-dom";

const College = props => {
  const initialCollegeState = {
    id: null,
    Name: "",
    address: {},
    Courses: "",
    students: [],
    SimilarColleges: [],
  };
  const [college, setCollege] = useState(initialCollegeState);

  const year = "Year founded"

  const getCollege = id => {
    CollegeDataService.get(id)
      .then(response => {
        setCollege(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCollege(props.match.params.id);
  }, [props.match.params.id]);

  function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  return (
    <div>
      {college ? (
        <div>
          <h5>{college.Name}</h5>
          <p>
            <strong>Address: </strong>{college.Name}, {college.City}, {college.State}<br/>
            <strong>Year Founded: </strong>{between(1950,2000)}<br/>
            <strong>Number of Students: </strong>{100}<br/>
            <strong>Courses Offered: </strong>{college.Courses}
          </p>
          <h3> Similar Colleges </h3>
          <div className="row">
            {college.SimilarColleges.length > 0 ? (
             college.SimilarColleges.map((similarcollege, index) => {
               if (similarcollege.Name != college.Name) {
                return (
                  <div className="col-lg-4 pb-1" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          <strong>College Name: </strong>{similarcollege.Name}<br/>
                          <strong>Place: </strong>{similarcollege.City}, {similarcollege.State}
                        </p>
                      </div>
                    </div>
                  </div>
                );
               }

             })
            ) : (
            <div className="col-sm-4">
              <p>No Similar College data available.</p>
            </div>
            )}

          </div>

          <h3> Student Details </h3>
          <div className="row">
            {college.students.length > 0 ? (
             college.students.map((student, index) => {
               return (
                 <div className="col-lg-4 pb-1" key={index}>
                   <div className="card">
                     <div className="card-body">
                       <p className="card-text">
                         <strong>Student Name: </strong>{student.first_name} {student.last_name}<br/>
                         <strong>Student id: </strong>{student.id}<br/>
                         <strong>Year of batch: </strong>{student.Year_of_batch}<br/>
                         <strong>Skills: </strong>{student.Skills}
                       </p>
                     </div>
                   </div>
                 </div>
               );
             })
            ) : (
            <div className="col-sm-4">
              <p>No Student data available.</p>
            </div>
            )}

          </div>

        </div>
      ) : (
        <div>
          <br />
          <p>No college selected.</p>
        </div>
      )}
    </div>
  );
};

export default College;