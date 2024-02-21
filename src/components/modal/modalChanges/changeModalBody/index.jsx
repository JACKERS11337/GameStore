import React from "react";
import "./style.scss";
import { IoMdClose } from "react-icons/io";

export const ChangModalBody = ({
  avatar,
  setAvatar,
  username,
  setUsername,
  name,
  setName,
  age,
  setAge,
  country,
  setCountry,
  onClose,
}) => {
  function saveChanges() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        avatar: avatar,
        username: username,
        name: name,
        age: age,
        country: country,
      })
    );
    location.reload();
  }

  return (
    <div className="changes-container">
      <div className="changes-title">
        <h4>Settings</h4>
        <IoMdClose className="close" onClick={onClose} />
      </div>
      <form>
        <div>
          <label htmlFor="username">Change username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="avatar">Change avatar</label>
          <input
            type="text"
            id="avatar"
            value={avatar}
            onChange={(event) => {
              setAvatar(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Change name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Change age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="country">Change country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
      </form>
      <button onClick={saveChanges}>Save changes</button>
    </div>
  );
};
