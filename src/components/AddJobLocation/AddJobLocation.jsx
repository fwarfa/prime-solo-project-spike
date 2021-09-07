import { useState } from "react";
import { useDispatch } from "react-redux";
import { Doughnut } from 'react-chartjs-2';


function AddJobLocation() {
    let totalApplied = 200;
    let totalInterviewed = 20;
    let totlaRejected = 100;
    let totalOffers = 3;


    const dispatch = useDispatch();

    let jobTemplate = {
        companyName: '',
        companyCity: '',
        companyState: ''
      };

    const [jobLocation, setJobLocatoin]= useState(jobTemplate);

    const handleChange = (event) =>{
        setJobLocatoin({...jobLocation, [event.target.name]:event.target.value })
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('job location is ', jobLocation);

        distpatch({
            type: 'FETCH_MAP',
            payload: jobLocation
        });
    }
    return (
        <div>
            <h1>Add Location for Job!</h1>

            <Doughnut 
                data={{
                    labels: ['Total Applications', 'Total Interviews', 'Total Rejections', 'Total Offers'],
                    datasets: [{
                            data: [totalApplied, totalInterviewed, totlaRejected, totalOffers],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1
                        }]
                }}
                height={100}
                width={100}
                option={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />

            <form onSubmit={handleSubmit}>
                <input 
                    name="companyName"
                    type="text"
                    placeholder="Job Name"
                    onChange={handleChange}
                    value={jobLocation.companyName}
                />
                <input 
                    name="companyCity"
                    type="text"
                    placeholder="Job City"
                    onChange={handleChange}
                    value={jobLocation.companyCity}
                />
                <input 
                    name="companyState"
                    type="text"
                    placeholder="Job State"
                    onChange={handleChange}
                    value={jobLocation.companyState}
                />
                <button type="submit">Add Job</button>
            </form>
            
        </div>
    )
}

export default AddJobLocation;