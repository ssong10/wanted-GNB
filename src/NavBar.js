import React, { useState } from "react"
import "./nav.css"
import { ReactComponent as SearchButton } from './assets/icon/searchBtn.svg'
import { ReactComponent as DetailButton } from './assets/icon/detailButton.svg'
import Jobs from './components/jobs'
import Navigation from './components/navigation'

function NavigationBar() {
  const [isExplore, setIsExplore] = useState(false)
  const onMouseOver=(e)=> {
    if (e.target.classList.contains("explore")) {
      setIsExplore(true)
    } else {
      setIsExplore(false)
    }
  }
  const hideJobs = () => {
    setIsExplore(false)
  }
  return (
    <div className="presentation">
      <div className="nav_wrap">
      <nav>
        <div className="logo_wrap">
          <a href="." className="logo">
            wanted
          </a>
          <div className="xsOnly signup">
            회원가입하기
          </div>
        </div>
        <Navigation onMouseOver={onMouseOver}/>
        <Jobs isShow={isExplore} hideJobs={hideJobs}></Jobs>
        <aside>
          <ul>
            <li>
              <SearchButton/>
            </li>
            <li className="xsOnly">
              <DetailButton/>
            </li>
            <li className="smMoreVisible">회원가입/로그인</li>
            <li className="dashboardButton smMoreVisible ">기업 서비스</li>
          </ul>
        </aside>
      </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
