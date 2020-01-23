import React from 'react';
import classes from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss';
import { updateNewMessageCreateAction, addMessageActionCreate } from '../../../../redux/reducer/dialogPage-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../../StoreContext';

const DialogsContainer = () => {

    return (
    <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogPage;
    
            let updatingBodyMessage = (text) => { 
                let action = updateNewMessageCreateAction(text)
                store.dispatch(action)
            } 
    
            let postNewMessage = () => {
                store.dispatch(addMessageActionCreate())
            }
            return <Dialogs postNewMessage={postNewMessage} 
                            updatingBodyMessage={updatingBodyMessage} 
                            dialogsData={state.dialogsData} 
                            messagesData={state.messagesData} 
                            newMessageText={state.newMessageText}/>
            }
        }

    </StoreContext.Consumer>
    )}

export default DialogsContainer