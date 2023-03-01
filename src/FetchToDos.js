
import axios from 'axios';

const myURL = 'https://planer-dk23.onrender.com';

const getAllToDos = (setMyToDo) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setMyToDo(data)
    })
}

const addToDo = (title, setTitle, setMyToDo, playNumber, playBoard) => {
    playNumber()
    playBoard()
    axios.post(`${myURL}/saveToDos`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllToDos(setMyToDo)

    })
}

const editToDo = (toDoId, title, setTitle, setMyToDo, setEditing, playNumber, playBoard) => {
    playNumber()
    playBoard()
    axios.post(`${myURL}/editToDo`, { _id: toDoId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllToDos(setMyToDo)
        
    })
}

const deleteToDo = (_id, setMyToDo) => {
    axios.post(`${myURL}/deleteToDo`, { _id })
    .then((data) => {
        console.log(data)
        getAllToDos(setMyToDo)
    })
}

export { getAllToDos, addToDo, editToDo, deleteToDo };