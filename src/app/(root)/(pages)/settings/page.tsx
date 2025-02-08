import React from "react";
import ProfileForm from "@/components/forms/profile-form";

const Settings = () => {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div>
        <h2 className="text-2xl font-bold">User Profile</h2>
        <p className="text-base text-white/50">
          Add or update your information
        </p>
      </div>
      {/* <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ''}
          onUpload={uploadProfileImage}
        /> */}
      <ProfileForm user={"Priyanshu"} onUpdate={""} />
    </div>
  );
};

export default Settings;
