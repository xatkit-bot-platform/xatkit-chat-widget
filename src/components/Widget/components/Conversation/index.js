import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import './style.scss';

const Conversation = props =>
    <div className="xatkit-conversation-container">
        <Header
            title={props.title}
            subtitle={props.subtitle}
            toggleChat={props.toggleChat}
            showCloseButton={props.showCloseButton}
            titleAvatar={props.titleAvatar}
            darkMode={props.darkMode}
        />
        <Messages
            profileAvatar={props.profileAvatar}
            darkMode={props.darkMode}
        />
        <QuickButtons onQuickButtonClicked={props.onQuickButtonClicked} darkMode={props.darkMode}/>
        <Sender
            sendMessage={props.sendMessage}
            placeholder={props.senderPlaceHolder}
            disabledInput={props.disabledInput}
            autofocus={props.autofocus}
            focus={props.focus}
            darkMode={props.darkMode}
            previousInput={props.previousInput}
        />
    </div>;

Conversation.propTypes = {
    title: PropTypes.string,
    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    sendMessage: PropTypes.func,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    toggleChat: PropTypes.func,
    showCloseButton: PropTypes.bool,
    disabledInput: PropTypes.bool,
    autofocus: PropTypes.bool,
    focus: PropTypes.object,
    darkMode: PropTypes.bool,
    previousInput : PropTypes.string
};

export default Conversation;
