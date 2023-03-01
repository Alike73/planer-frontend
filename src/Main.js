
import { MdAddTask } from 'react-icons/md';
import thinkMouse from './Assets/ThinkMouse.png';
import { useEffect, useState } from 'react';
import { addToDo, getAllToDos, editToDo, deleteToDo } from './FetchToDos';
import writingCat from './Assets/WritingCat.png';
import notePad from './Assets/notePad.png';
import Header from './Header';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MyToDos } from './MyToDos';
import DateTime from './DateTime';
import { gsap } from "gsap";


const Main = () => {

    const [myToDo, setMyToDo] = useState([]);
    const [title, setTitle] = useState("");
    const [editing, setEditing] = useState(false);
    const [toDoId, setToDoId] = useState("");

    useEffect(() => {
        getAllToDos(setMyToDo);
    }, [])

    const playMouse = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        let tl = gsap.timeline();
        tl.fromTo('.ThinkMouse', {y: 0}, {duration: .2, y: -30})
        tl.fromTo('.ThinkMouse', {y: -30}, {duration: .2, y: 0, ease: "power1.in"})
    }

    const playNumber = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        let tl = gsap.timeline()
        tl.fromTo('.NumberOfTaskBox', {rotation: 0, scale: 0}, {delay: 1.2, duration: .4, rotation: 360, scale: 1.5})
        tl.fromTo('.NumberOfTaskBox', {scale: 1.5}, {scale: 1})
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        playNumber()
    };

    const updatingInInput = (_id, title) => {
        goToTop();
        setTitle(title)
        setToDoId(_id)
        playMouse()
        
        // Setting a timeout ensures that the function goToTop executed before button edit becomes disabled
        setTimeout(() => {
            setEditing(true);
        }, 1500);
    }

    const playBoard = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        gsap.fromTo('.TaskBoard', {opacity: 0, y: 30}, {delay: .3, stagger: .1, opacity: 1, y: 0})
        let tl = gsap.timeline()
        tl.fromTo('.ThinkMouse', {y: 0}, {duration: .2, y: -30})
        tl.fromTo('.ThinkMouse', {y: -30}, {duration: .2, y: 0, ease: "power1.in"})
    }

    // Get input value on Enter Key with event.target
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(editing) {
                editToDo(toDoId, title, setTitle, setMyToDo, setEditing, playNumber, playBoard)
            }
            else {
                addToDo(title, setTitle, setMyToDo, playNumber, playBoard)
            }
        }
    };

    const { logout, user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div className='MainAppBox'>
        <Header user = {user} />
            <div className="container marketing MainBox p-3">
                <div className="row featurette">
                    <div className="col-md-5 order-md-1 py-3 px-2 Card">
                    <div className="dropdown text-end">
                        <span className="d-block link-light fs-1 text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={writingCat} alt="writingCat" className="bd-placeholder-img rounded-circle" />
                        </span>
                        <ul className="dropdown-menu text-small DropBg">
                            <li className="text-center userEmail text-light w-100 px-3 py-3">
                                {user.email}
                            </li>
                            <li className="text-center w-100 px-3 py-3">
                                <div className="btn1 mx-auto" onClick={() => logout()}>
                                    <span>LOG OUT</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                        
                        <h2 className="fs-1 text-light CardTitle">
                            Hello {user.nickname}
                        </h2>
                        <p className='lead text-white m-0'>What do you want to do today?</p>
                        <DateTime />
                        <figure>
                            <div className="outerBevel">
                                <div className="flatSurface">
                                    <div className="innerBevel">
                                        <div className="textAreaBox w-100">
                                            <textarea
                                            className="form-control form-control-lg" 
                                            id="textArea" 
                                            rows="5"
                                            placeholder='Type your task here...'
                                            value = { title }
                                            onChange = { (e) => setTitle(e.target.value) }
                                            onKeyDown={handleKeyDown} /> {/* Get input value on Enter Key with event.target */}
                                            
                                            {/* ----------------------------------------------TextAreaPreloader----------------- */}
                                            <svg className={editing ? "pencilActive" : "pencil"} viewBox="0 0 200 200" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <clipPath id="pencil-eraser">
                                                        <rect rx="5" ry="5" width="30" height="30"></rect>
                                                    </clipPath>
                                                </defs>
                                                <circle className="pencil__stroke" r="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="439.82 439.82" strokeDashoffset="439.82" strokeLinecap="round" transform="rotate(-113,100,100)" />
                                                <g className="pencil__rotate" transform="translate(100,100)">
                                                    <g fill="none">
                                                        <circle className="pencil__body1" r="64" stroke="hsl(40,100%,35%)" strokeWidth="30" strokeDasharray="402.12 402.12" strokeDashoffset="402" transform="rotate(-90)" />
                                                        <circle className="pencil__body2" r="74" stroke="hsl(40,100%,40%)" strokeWidth="10" strokeDasharray="464.96 464.96" strokeDashoffset="465" transform="rotate(-90)" />
                                                        <circle className="pencil__body3" r="54" stroke="hsl(40,100%,30%)" strokeWidth="10" strokeDasharray="339.29 339.29" strokeDashoffset="339" transform="rotate(-90)" />
                                                    </g>
                                                    <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
                                                        <g className="pencil__eraser-skew">
                                                            <rect fill="hsl(223,90%,70%)" rx="5" ry="5" width="30" height="30" />
                                                            <rect fill="hsl(223,90%,60%)" width="5" height="30" clipPath="url(#pencil-eraser)" />
                                                            <rect fill="hsl(223,10%,90%)" width="30" height="20" />
                                                            <rect fill="hsl(223,10%,70%)" width="15" height="20" />
                                                            <rect fill="hsl(223,10%,80%)" width="5" height="20" />
                                                            <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
                                                            <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
                                                        </g>
                                                    </g>
                                                    <g className="pencil__point" transform="rotate(-90) translate(49,-30)">
                                                        <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
                                                        <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
                                                        <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* -------------------------------------------------------------------------------- */}
                                            <img className='ThinkMouse' src={thinkMouse} alt="ThinkMouse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <div className='AddBtnBox w-100'>
                            <figure>
                                <div className="outerBevel outerBevelBox">
                                    <div className="flatSurface">
                                        <div className="innerBevel">
                                            <span onClick={ playBoard } >
                                            <button
                                            disabled = { !title } 
                                            type="button" 
                                            className="p-3 w-100 AddBtn"
                                            onClick={ editing ? () => editToDo(toDoId, title, setTitle, setMyToDo, setEditing, playNumber, playBoard) :
                                                () => addToDo(title, setTitle, setMyToDo, playNumber, playBoard) }>

                                                <MdAddTask className='fs-1 addIcon me-2'></MdAddTask>

                                                { editing ? "ADD CHANGES" : "ADD YOUR TASK" }

                                            </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                                
                            <div className='d-flex justify-content-center mt-3'>
                                <small className="text-light WarningText">Start typing to able to submit!</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 order-md-2 BoardsBox">
                        <h2 className="featurette-heading fs-1 lh-1 text-center pt-3 mt-3 text-light CardTitle">
                            <img className='notePad me-2' src={ notePad } alt="notePad" />
                            Your tasks boards.
                            <i className="bi bi-caret-down-fill fs-3 ms-3"></i>
                        </h2>

                        <div className='w-100 mb-3 d-flex flex-column align-items-center justify-content-center'>
                            <p className='mb-2 NumberOfTaskText'>TASKS ON BOARDS</p>
                            <span className='NumberOfTaskBox'>
                                <h3 className='text-center NumberOfTask'>{myToDo.length}</h3>
                                
                            </span>
                        </div>
                        
                        <div className='d-flex flex-column align-items-center justify-content-center mb-3'>
                            <small className='text-light smallText'>
                                To mark the task as done, click on the mouse cartoon.
                            </small>
                            <small className='text-light smallText'>
                                When you are editing, the textarea is marked as being edited, and you can edit the task there.<br />
                                You will not be able to delete a task until you mark it as completed.
                            </small>
                        </div>

                        {myToDo.map((toDo) => <MyToDos text = {toDo.title} key = {toDo._id}
                        updatingInInput = {() => updatingInInput(toDo._id, toDo.title)}
                        deleteToDo = {() => deleteToDo(toDo._id, setMyToDo)}
                        editing = {editing}
                        goToTop = {goToTop}
                        
                        />)}

                        
                        
                    </div>
                </div>
            </div>
        </div>
        )
    )
}
export default Main;