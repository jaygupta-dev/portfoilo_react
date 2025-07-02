import './WorkingPeriod.css'
import { useEffect, useState } from 'react'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

function WorkingPeriod() {

    const [workingPeriodData, setWorkingPeriodData] = useState(null);

    useEffect(() => {

        const fetchApi = async () => {
            const apiResponse = await fetch(`${apiUrl}api/Home/WorkingPeriod`);
            const apiData = await apiResponse.json();
            if(apiData.status == "Success"){
                setWorkingPeriodData(apiData.data);
            }
        }

        fetchApi();
    }, []);

//console.log(workingPeriodData);


    if (workingPeriodData != null && workingPeriodData.length > 0) {
        return (
            <section className="section timeline" id="timeline" aria-label="timeline">
                <div className="container">

                    <p className="section-subtitle">Timeline</p>

                    <h2 className="h2 section-title">Working Period</h2>

                    <ul className="timeline-list">
{
    workingPeriodData.map((data,index)=>{
          return (
            <li className="timeline-item" key={index}>
                    <h3 className="item-period">{data.startDate}  {(data.lastDate != null) ? "- " + data.lastDate : " - Present"}</h3>

                    <p className="item-title">{data.workTitle}</p>

                    <p className="item-address">
                        {/* @item.WorkAddress @(!string.IsNullOrEmpty(item.WorkPincode) ? "("+item.WorkPincode+")" : "") */}
                       {data.workAddress } {data.workPincode} 
                    </p>
                </li>
          )
    })
}
                        {/* @foreach (var item in WorkingPeriodList)
            {
                <li className="timeline-item">

                    @* <h3 className="item-period">@item.StartDate - @item.LastDate</h3> *@
                    <h3 className="item-period">@item.StartDate  @(!string.IsNullOrEmpty(item.LastDate) ? "- " + item.LastDate : " - Present")</h3>

                    <p className="item-title">@item.WorkTitle</p>

                    <p className="item-address">
                        @item.WorkAddress @(!string.IsNullOrEmpty(item.WorkPincode) ? "("+item.WorkPincode+")" : "") </p>
                </li>
            } */}

                

                    </ul>

                </div>
            </section>
        );
    }
}

export default WorkingPeriod;