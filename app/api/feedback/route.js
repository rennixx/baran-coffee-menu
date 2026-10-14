import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { feedback, language } = body;

    if (!feedback || typeof feedback !== "string" || !feedback.trim()) {
      return NextResponse.json({ error: "Feedback message is required." }, { status: 400 });
    }

    const entry = {
      timestamp: new Date().toISOString(),
      dateLocal: new Date().toLocaleString(),
      language: language || "en",
      feedback: feedback.trim(),
    };

    // 1. If Google Sheets Webhook URL is configured, forward to Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        });
      } catch (webhookErr) {
        console.error("Failed to forward to Google Sheets webhook:", webhookErr);
      }
    }

    // 2. Persist locally to feedback-log.json so no messages are ever lost
    try {
      const logDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const logFile = path.join(logDir, "feedback.json");
      let logs = [];
      if (fs.existsSync(logFile)) {
        try {
          logs = JSON.parse(fs.readFileSync(logFile, "utf8"));
        } catch {
          logs = [];
        }
      }
      logs.unshift(entry);
      fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), "utf8");
    } catch (fsErr) {
      console.error("Local feedback storage error:", fsErr);
    }

    return NextResponse.json({ success: true, entry });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
