import React, { memo } from 'react';
import TimeAgo from 'timeago-react';
import { Button } from 'rsuite';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
//import PresenceDot from '../../PresenceDot';
//import { useCurrentRoom } from '../../../context/current-room.context';
import { auth } from '../../../misc/firebase';
import { useHover, useMediaQuery } from '../../../misc/custom-hooks';
import IconBtnControl from './IconBtnControl';
import ImgBtnModal from './ImgBtnModal';


const MessageItem = ({ message}) => {

   const { author, createdAt, text } = message;

  return (
    <li  className={`padded mb-1`}>

      <div className="d-flex align-items-center font-bolder mb-1">
        <ProfileAvatar src={author.avatar} name={author.name} className="ml-1" size="xs"/>
        <span className="ml-2">{author.name}</span>
        <TimeAgo datetime={createdAt} className="font-normal text-black-45 ml-2" />
      </div>

      <div>
        <span className="word-breal-all">{text}</span>
      </div>

    </li>
  )
}

export default MessageItem