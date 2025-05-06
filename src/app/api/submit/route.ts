import { NextResponse } from "next/server";
import { google } from "googleapis";
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const update = await appendToSheet(data);
  if (update.success === true) {
    return NextResponse.json({
      success: true,
      message: "Data received successfully",
    });
  } else {
    console.log("Error:", update.error);
    return NextResponse.json({
      success: false,
      message: "Failed to append data",
      error: update.error,
    });
  }
  // return NextResponse.json({ message: "Data received successfully" });
}
interface reqdata {
  name: string;
  email: string;
  phone: string;
  residence: string;
  age: string;
  whatUdo: string;
  whyinterested: string;
  vibe: [string];
  somethinglikebefore: string;
  sociallink: string;
  howuhear: string;
}
async function appendToSheet(formData: reqdata) {
  // Load the service account credentials
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Replace escaped newlines
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // Create a client for the Sheets API
  const sheets = google.sheets({ version: "v4", auth });

  // Spreadsheet ID and range (e.g., Sheet1!A:C to append to columns A, B, C)
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = "Sheet1!A:L";
  const vibeString = formData.vibe.join(", ");

  // Form data to append
  const values = [
    [
      formData.name,
      formData.email,
      formData.phone,
      formData.residence,
      formData.age,
      formData.whatUdo,
      formData.whyinterested,
      vibeString,
      formData.somethinglikebefore,
      formData.sociallink,
      formData.howuhear,
      new Date().toISOString(), // Optional: Add timestamp
    ],
  ];

  try {
    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
