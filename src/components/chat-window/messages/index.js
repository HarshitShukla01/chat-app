/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router';
import { Alert, Button } from 'rsuite';
import { database, auth, storage } from '../../../misc/firebase';
import { transformToArrWithId, groupBy } from '../../../misc/helpers';
import MessageItem from './MessageItem';


const Messages = () => {
  return (
     <div>
       Messages
     </div>
  );
};

export default Messages;
