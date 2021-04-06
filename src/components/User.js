function User({ title, first, last, photoUrl, gender }) {
  return (
    <div className="userBox">
      <div className={gender === "male" ? "maleBox" : "femaleBox"}>
        <h2 className="titleName">
          {title}. {first} {last}
        </h2>
        <img className="profilePic" src={photoUrl} alt={first} />
        <p className="genderType">{gender}</p>
      </div>
    </div>
  );
}

export default User;
