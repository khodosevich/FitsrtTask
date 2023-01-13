import React from 'react';

const ProfileInfo = () => {
    return (

            <div className="profile-page">
                <div className="container-profile">
                    <div className="content-profile">
                        <h1 className="profile-title">Profile</h1>
                    </div>
                    <div className="profile__item">
                        <div className="profile__info">
                            <p className="info__profile">
                                эту запись видет только крутой чел!!!
                            </p>
                        </div>
                        <div className="profile__info">
                            <p className="info__profile">
                                ты избранный! тебе оч повезло
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ProfileInfo;