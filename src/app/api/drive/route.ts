import { google } from 'googleapis';
import { clerkClient, auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/db';

export async function GET() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  );

  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: 'User not found' });
  }

  try {
    const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
      userId,
      'google'
    );

    if (!clerkResponse || clerkResponse.length === 0) {
      return NextResponse.json({ message: 'No OAuth access token found' }, { status: 404 });
    }

    const accessToken = clerkResponse[0].token || '';
    console.log('Access Token:', accessToken);

    oauth2Client.setCredentials({
      access_token: accessToken,
    });

    const drive = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });

    const response = await drive.files.list();

    if (response) {
      return NextResponse.json(
        {
          message: response.data,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: 'No files found',
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    console.error('Error fetching OAuth access token:', error);
    return NextResponse.json(
      {
        message: 'Something went wrong',
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
