export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTES = 'DELETE_NOTES'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const AddNote = (id,note,date,time,desc ,checked)=>({
    type:ADD_NOTE,
    payload : {id,note,date,time,desc,checked}
})

export const EditNote = (id,note,date,time,desc,checked)=>({
    type:EDIT_NOTE,
    payload : {id,note,date,time,desc,checked}
})

export const DeleteNote = (id)=>({
    type:DELETE_NOTE,
    payload : {id}
})

export const DeleteAllNotes = ()=>({
    type:DELETE_NOTES,
})