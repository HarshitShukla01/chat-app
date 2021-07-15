/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router';
import { Alert, Button } from 'rsuite';
import { database, auth, storage } from '../../../misc/firebase';
import { transformToArrWithId, groupBy } from '../../../misc/helpers';
import MessageItem from './MessageItem';


const Messages = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);
  const isChatEmpty = messages && messages.length === 0;
  const canShowMessages = messages && messages.length > 0;

  useEffect(() => {
    const messagesRef = database.ref('/messages')

    messagesRef.orderByChild('roomId').equalTo(chatId).on('value', snap => {
          const data = transformToArrWithId(snap.val());
          setMessages(data);
    });

   return () => {
      messagesRef.off('value');
    };

  }, [chatId]);


  return (
     <ul className="msg-list custom-scroll">
      {isChatEmpty && <li>No messages yet</li>}
      {canShowMessages && messages.map((msg) => <MessageItem key={msg.id} message={msg}/>)}
    </ul>
  );
};

export default Messages;
