import React, { useState, useEffect } from "react";
import CollegeDataService from "../services/college";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Session from "./Session";
import Pagination from "./Pagination";
import GoTopButton from "./GoTopButton";
import SessionSelect from "./Sessionselect";
import { useScroll } from "../helpers/scroll";
import "bootstrap/dist/css/bootstrap.min.css";
// import college from "../services/college";

const CollegesList = props => {
  const [colleges, setColleges] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const [searchID, setSearchID ] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [courses, setCourses] = useState(["All Courses"]);

  useEffect(() => {
    retrieveColleges();
    retrieveCourses();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchID= e => {
    const searchID = e.target.value;
    setSearchID(searchID);
  };

  const onChangeSearchCourse = e => {
    const searchCourse = e.target.value;
    setSearchCourse(searchCourse);
    
  };

  const retrieveColleges = () => {
    
    CollegeDataService.getAll()
      .then(response => {
        console.log(response.data);
        setColleges(response.data.colleges);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveCourses = () => {
    CollegeDataService.getCourses()
      .then(response => {
        console.log(response.data);
        setCourses(["All Courses"].concat(response.data));
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveColleges();
  };

  const find = (query, by) => {
    CollegeDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setColleges(response.data.colleges);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name")
  };

  const findByID = () => {
    find(searchID, "ID")
  };

  const findByCourse = () => {
    if (searchCourse === "All Courses") {
      refreshList();
    } else {
      find(searchCourse, "Courses")
    }
  };
  
  const allSessionsCount = colleges.length;
  const [sessionsPerPage, setSessionsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(2);
  const scrollPosition = useScroll();

  const lastSessionNumber = currentPage * sessionsPerPage;
  const firstSessionIndex = lastSessionNumber - sessionsPerPage;
  const limitedSessions = colleges.slice(
    firstSessionIndex,
    lastSessionNumber
  );

  return (
    <div>

      <div class="container">
        <div class="col-xs-6">
          <form class='form-inline'>
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
              />
              <div className="form-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByName}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-xs-6">
          <form class='form-inline'>
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by rank"
                value={searchID}
                onChange={onChangeSearchID}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByID}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


        <Container>
        <div className="row">
          {limitedSessions.map((college) => {
          const address = `${college.City} ${college.State}, ${college.Country}`;
          const collegename = `${college.Name}`;
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{college.Name}</h5>
                  <p className="card-text">
                    <strong>Address: </strong>{address}<br/>
                    <strong>Rank: </strong>{college.ID}<br/>
                    <strong>College type: </strong>{college.Sector}
                  </p>
                  <div className="row">
                  <Link to={"/Colleges/"+college._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View College Details
                  </Link>
                  <a target="_blank" href={"https://www.google.com/maps/place/" + collegename + " " + address} className="btn btn-primary col-lg-5 mx-1 mb-1">View College In Map</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navbar">
          <div>Loaded sessions: {allSessionsCount}</div> */}
        <SessionSelect
        itemsPerPage={sessionsPerPage}
        setItemsPerPage={setSessionsPerPage}
        />
        {/* </Navbar.Brand>
      </Navbar> */}
        <Pagination
          itemsCount={allSessionsCount}
          itemsPerPage={sessionsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          alwaysShown={false}
        />
        <GoTopButton visible={scrollPosition > 400} />
        </Container>

    </div>
  );
};

export default CollegesList;