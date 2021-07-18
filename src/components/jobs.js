import { JOBS } from '../assets/jobs'
import {OTHERS} from '../assets/others'

function Jobs({isShow, hideJobs}) {
  const outFocus = (e) => {
    if (e.target.classList.contains('jobs')) {
      hideJobs()
    }
  }
  return (
    <div onMouseOverCapture={outFocus} className={isShow ? "jobs show" : "jobs"}>
      <div className="overlay">
        <div className="container" >
          {JOBS.map((group,idx) => (
            <div className="column" key={idx}>
              <h2 className="subject">
                {group.subject}
              </h2>
              <div>
                {group.positions.map(
                  (position,id) => (
                    <h3 key={id}>{position}</h3>
                    ))}
              </div>
              <h3 className="showMore">
                더보기
              </h3>  
            </div>)
          )}
          <div className="column">
            {OTHERS.map((subject,idx) => (
              <h2 key={idx} className="subject">{subject}</h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Jobs