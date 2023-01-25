import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [
    name,
    setName,
    firstname,
    setFirstName,
    lastname,
    setLastName,
    phone,
    setPhone,
    address,
    SetAddress,
  ] = useState("");
  const navigate = useNavigate();
  const fetchUserInfo = async () => {
    try {
      const q = query(collection(db, "users", where("uid", "==", user?.uid)));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserInfo();
  }, [user, loading]);

  return (
    <div className="w-[60%] mx-auto flex flex-col pt-12 pb-12 gap-5">
      <div className="pb-5">
        <h2 className="font-playfair text-black font-semibold text-[36px] leading-5">
          Profile Information
        </h2>
      </div>
      <div className="grid grid-cols-2 items-center w-full gap-3">
        <input
          type="text"
          name=""
          id=""
          defaultValue={name}
          placeholder="name"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="name"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 items-center w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Phone"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-2 items-center w-full gap-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Street Address"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Address 2"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="City"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Region"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="GPS Address"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="House No"
          className="bg-gardensform text-black h-[60px] rounded-[5px] pl-5 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-primary text-white h-[60px] rounded-[5px]"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
