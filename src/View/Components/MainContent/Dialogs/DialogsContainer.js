import React from 'react';
import classes from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss';
import { updateNewMessageCreateAction, addMessageActionCreate } from '../../../../redux/reducer/dialogPage-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

    
let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        postNewMessage: () => {dispatch(addMessageActionCreate())},
        updatingBodyMessage: (text) => {dispatch(updateNewMessageCreateAction(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 