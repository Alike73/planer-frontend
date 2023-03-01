import './MousePopUp.css';
import teacherMouse from './Assets/teacherMouse2.png';
import relaxMouse from './Assets/relaxMouse.png';

const MousePopUp = ({isActive, ToggleClass, editing}) => {
    return (
        <div>
            <button className={isActive ? "iconActive mouseTeach" : "icon mouseTeach"} disabled = {editing}  onClick={ToggleClass}>
                <span className={isActive ? "tooltip" : "tooltipActive"}>SetDone</span>
                <span className={isActive ? "tooltipActive" : "tooltip"}>RemoveDone</span>
                <span>
                    <img className={isActive ? "relaxMouseActive" : "relaxMouseInactive"} src={relaxMouse} alt="relaxMouse" width={40} />
                    <img className={isActive ? "teacherMouseActive" : "teacherMouseInactive"} src={teacherMouse} alt="teacherMouse" width = {40} />
                </span>
            </button>
        </div>
    )
}
export default MousePopUp;