import React, { useContext, useState } from "react";
import "./style.scss";
import { UserContext } from "../../context/user";
import { DiAptana } from "react-icons/di";
import { ModalChanges } from "../../components/modalChanges";
import { ChangModalBody } from "../../components/modalChanges/chanModalBody";

export const Profile = () => {
  const { user } = useContext(UserContext);

  const [avatar, setAvatar] = useState(user.avatar);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [country, setCountry] = useState(user.country);

  const [openModal, setOpenModal] = useState(false);

  function onOpen() {
    document.body.style.overflow = "hidden";
    setOpenModal(true);
  }
  function onClose() {
    document.body.style.overflow = "unset";
    setOpenModal(false);
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image">
            <img src={avatar} alt="" />
            <button onClick={onOpen}>Edit profile</button>
          </div>
          <ul className="profile-about">
            <li>{username}</li>
            <li>
              Name: <span>{name}</span>
            </li>
            <li>Age: {age}</li>
            <li>Country: {country}</li>
          </ul>

          {openModal && (
            <ModalChanges openModal={openModal} onClose={onClose}>
              <ChangModalBody
                avatar={avatar}
                setAvatar={setAvatar}
                username={username}
                setUsername={setUsername}
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                country={country}
                setCountry={setCountry}
                onClose={onClose}
              />
            </ModalChanges>
          )}
        </div>
      </div>
    </div>
  );
};
