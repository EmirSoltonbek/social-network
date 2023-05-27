import React from "react";
import { useProfile } from "../../contexts/ProfileContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { editProfileInfo, profileMe } = useProfile();
  const navigate = useNavigate();
  const [editingProfile, setEditingProfile] = useState(profileMe);
  console.log(profileMe);

  // !input states
  const [email, setEamil] = useState(editingProfile.email);
  const [name, setName] = useState(editingProfile.name);
  const [lastName, setLastName] = useState(editingProfile.last_name);
  const [bio, setBio] = useState(editingProfile.bio);
  const [phone, setPhone] = useState(editingProfile.phone);
  const [birthDate, setBirthDate] = useState(editingProfile.date_of_birth);
  const [programmingLang, setProgrammingLang] = useState(
    editingProfile.programming_language
  );
  const [group, setGroup] = useState(editingProfile.group);
  console.log(editingProfile);
  const [avatar, setAvatar] = useState(null);
  // !end input states

  const handleEdit = () => {
    const editedProfile = new FormData();
    editedProfile.append("name", name);
    editedProfile.append("email", email);
    editedProfile.append("bio", bio);
    editedProfile.append("last_name", lastName);
    editedProfile.append("phone", phone);
    editedProfile.append("date_of_birth", birthDate);
    editedProfile.append("programming_language", programmingLang);
    editedProfile.append("group", group);

    if (avatar) {
      editedProfile.append("avatar", avatar);
    }

    editProfileInfo(editedProfile);
  };
  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEamil(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="bio"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="bio"
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        placeholder="phone number"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="bio"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <select
        onChange={(e) => setProgrammingLang(e.target.value)}
        name=""
        id=""
      >
        <option value="javascript">javascript</option>
        <option value="phyton">phyton</option>
      </select>
      <select onChange={(e) => setGroup(e.target.value)} name="" id="">
        <option value="JS 31">JS 31</option>
        <option value="PY 27">PY 27</option>
      </select>
      <input
        onChange={(e) => setAvatar(e.target.files[0])}
        type="file"
        accept="image/*"
        placeholder="avatar image"
      />
      <button
        onClick={() => {
          handleEdit();
          navigate("/inst-profile");
        }}
      >
        edit
      </button>
    </div>
  );
}

export default EditProfile;
