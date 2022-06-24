import { useState } from 'react';
import Jobs from './Jobs';
import FilterBar from './FilterBar';
import Footer from './Footer';
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getJobs } from "../reducers/jobSlice";

const App = () => {
    const [filtersArray, setFiltersArray] = useState([]);
    const jobs = useSelector(state => state.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getJobs());
    }, [jobs, dispatch]);

    const removeFilter = (index) => {
      const newFiltersArray = [...filtersArray];
      newFiltersArray.splice(index, 1);
      setFiltersArray(newFiltersArray);
    };
  
    const clearFilter = () => {
      const newFiltersArray = []; 
      setFiltersArray(newFiltersArray);
    }
    return (
      <>
       <FilterBar filtersArray={filtersArray} removeFilter={removeFilter} clearFilter={clearFilter}/>
       {
        !jobs.length ? <Spinner/> : <Jobs filtersArray={filtersArray} setFiltersArray={setFiltersArray}/>
       }
        <Footer/>
      </>
    );
  }

  export default App