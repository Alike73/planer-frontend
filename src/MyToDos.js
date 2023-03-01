
import stamp from './Assets/stamp.png';
import { useState } from 'react';
import MousePopUp from './MousePopUp';


export const MyToDos = ({ text, updatingInInput, deleteToDo, editing, goToTop }) => {

    const [isActive, setActive] = useState(false);
    const [done, setDone] = useState("");

    const ToggleClass = () => {
        setActive(!isActive)
        setDone(stamp)
    };

    return (
        <div>
            <figure className='TaskBoard'>
                <div className="outerBevel">
                    <div className="flatSurface">
                        <div className="innerBevel p-2 TextBoard">

                            <div className="w-100 pb-2 mb-3 text-start boardAreaBtn">
                                <span className={isActive ? "active p-4 mb-0" : "inactive p-4 mb-0"}>
                                    <i className={isActive ? "inactive-bi-hourglass-split" : "bi bi-hourglass-split fs-1 me-3"}></i>
                                    {/* If You prefer checkmark or thumbUp, you can choose by comment some of them */}
                                    <i className={isActive ? "active-bi-check2-square bi bi-check2-square fs-1" : "bi bi-check2-square fs-1"}></i>
                                    <i className={isActive ? "active-bi-hand-thumbs-up  bi bi-hand-thumbs-up fs-1" : "bi bi-hand-thumbs-up fs-1"}></i>
                                    
                                    <span className='textContainer p-3'>
                                        {text} 
                                    </span>
                                </span>
                                <MousePopUp isActive = {isActive} ToggleClass = {ToggleClass} editing = {editing} />
                                <img src={done} alt="stamp" className={isActive ? "activeDoneText" : "m-0 text-end DoneText"} />
                            </div>
                            
                            <div className='w-100 py-3 my-3'></div>
                            <div className="BoardBtnBox w-100">
                            
                                <button type="button" disabled = { editing || isActive } className="btn boardBtn btn-outline-success btn-sm px-2 me-2" onClick={updatingInInput}>
                                    <i className={ !editing ? "bi bi-pen fs-5" : "myPen" }></i>
                                    <i className={ !editing ? "mySpinner" : "fa fa-spinner fa-spin fs-5 me-2" }></i>
                                    <span className={ editing ? "editText" : "activeEditText" }>Edit</span>
                                    <span className={ editing ? "activeEditText" : "editText" }>Editing</span>
                                </button>

                                <span onClick={goToTop}>
                                <button type="button" disabled = { !isActive } className="btn boardBtn btn-outline-danger btn-sm px-4 ms-2" onClick={deleteToDo}>
                                    <i className="bi bi-trash3 fs-5"></i>
                                    Delete
                                </button>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </figure>
        </div>
    )
}
