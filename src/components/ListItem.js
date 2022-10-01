import { useState } from "react";

export default function ListItem({ member }) {
  const [showPhoto, setShowPhoto] = useState(false);

  function handleShowPhoto() {
    // alert("IT WORKS")
    setShowPhoto(true);
  }
  return (
    <li>
      <div>
        {showPhoto ? (
          <img src={member.avatar} />
        ) : (
          <button onClick={handleShowPhoto}>Show Photo</button>
        )}
        <p>
          {member.first_name} {member.last_name} / {member.email}
        </p>
      </div>
    </li>
  );
}
