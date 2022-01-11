import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.userProfile}>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div>
                    <h2>{props.profile.fullName}</h2>
                    <span><b>About me:</b> {props.profile.aboutMe}</span>
                    <p>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : "I am lazy"}</p>
                </div>
                <ProfileStatusWithHooks status={props.status}  updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;

