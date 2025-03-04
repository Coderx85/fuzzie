"use server";
import { clerkClient, auth } from "@clerk/nextjs/server";
import { google } from "googleapis";

export const getFileMetaData = async () => {
  "use server";
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  );

  const { userId } = await auth();

  if (!userId) {
    return { message: "User not found" };
  }

  
  const clerk = await clerkClient()

  const provider = 'google'

  const clerkResponse = await clerk.users.getUserOauthAccessToken(userId, provider)
  console.log('Clerk Response:', clerkResponse)

  if (!clerkResponse) return new Error("No clerk response found");

  const accessToken = clerkResponse.data[0].token;
  console.log(accessToken);
  
  if (!accessToken) return new Error("No access token found");

  oauth2Client.setCredentials({
    access_token: accessToken,
  });

  const drive = google.drive({ version: "v3", auth: oauth2Client });
  const response = await drive.files.list();

  if (response) {
    return response.data;
  }
};
