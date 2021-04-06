function User({ title, first, last, photoUrl, gender }) {
  return (
    <div className="userBox">
      <div className={gender === "male" ? "maleBox" : "femaleBox"}>
        <h2>
          {title}. {first} {last}
        </h2>
        <img src={photoUrl} alt={first} />
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default User;
