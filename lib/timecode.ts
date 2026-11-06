/**
 * SMPTE Timecode and Studio Hours Utility
 * Generates true SMPTE format HH:MM:SS:FF running at standard 24fps
 * Handles Lahore, Pakistan (PKT / UTC+5) studio hours computation
 */

export function formatSMPTE(seconds: number, fps: number = 24): string {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00:00:00";
  }

  const totalSeconds = Math.floor(seconds);
  const frames = Math.floor((seconds % 1) * fps);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (num: number, size: number = 2): string =>
    num.toString().padStart(size, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}:${pad(frames)}`;
}

export interface StudioStatus {
  timeStr: string;
  isOpen: boolean;
  statusText: string;
  dayStr: string;
  timezone: string;
}

export function getStudioStatus(): StudioStatus {
  // Use Intl.DateTimeFormat for Asia/Karachi (PKT)
  const now = new Date();

  const formatterTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const formatterDay = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    weekday: "short",
  });

  const formatterHour = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "numeric",
    hour12: false,
  });

  const timeStr = formatterTime.format(now);
  const dayStr = formatterDay.format(now);
  const currentHour = parseInt(formatterHour.format(now), 10);

  // Studio hours: Mon to Sat, 10:00 to 19:00 PKT
  // Sunday is closed
  const isSunday = dayStr === "Sun";
  const isOpenHours = currentHour >= 10 && currentHour < 19;
  const isOpen = !isSunday && isOpenHours;

  const statusText = isOpen ? "Studio Open Now" : "Studio Closed · Opens 10:00 PKT";

  return {
    timeStr,
    isOpen,
    statusText,
    dayStr,
    timezone: "PKT (UTC+5)",
  };
}

