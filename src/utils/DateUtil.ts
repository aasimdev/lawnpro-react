export const getTagFromDate = (date: Date): string => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return 'yesterday';
    if (diffInDays >= 2 && diffInDays <= 6) return `${diffInDays} days ago`;
    if (diffInWeeks >= 1 && diffInWeeks <= 4) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    if (diffInMonths >= 1 && diffInMonths <= 11) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    if (diffInYears >= 1 && diffInYears <= 3) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;

    return 'a long time ago';
};

export const formatDateString = (dateString: string, format: string): string => {
    const date = new Date(dateString);

    // Define each part of the date
    const fullYear = date.getFullYear().toString();
    const shortYear = fullYear.slice(-2);
    const monthLong = date.toLocaleString('en-US', { month: 'long' });
    const monthShort = date.toLocaleString('en-US', { month: 'short' });
    const monthNumeric = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    // Replace the format string with the appropriate date parts
    return format
        .replace('YYYY', fullYear)
        .replace('YY', shortYear)
        .replace('MMMM', monthLong)
        .replace('MMM', monthShort)
        .replace('MM', monthNumeric)
        .replace('DD', day)
        .replace('D', parseInt(day, 10).toString()); // Single-digit day if "D" is used
}

export const getMonthAndDate = (dateString: string): { month: string, day: number } => {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return { month, day };
}

export const getTimeRange = (startTime: string, duration: number): { startTime: string, endTime: string, status: string } => {
    // Parse the start time string to extract hours, minutes, and seconds
    const [hours, minutes, seconds] = startTime.split(':').map(Number);

    // Create a Date object for the start time
    const startDate = new Date();
    startDate.setHours(hours, minutes, seconds);

    // Create a new Date object for the end time by adding the duration (in minutes)
    const endDate = new Date(startDate.getTime() + duration * 60000);

    // Format time to "HH:mm AM/PM"
    const formatTimeWith12Hour = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        // const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Converts 24-hour format to 12-hour format
        return `${formattedHours.toString().padStart(2, '0')}:${minutes}`;
    };

    // Determine AM/PM status for the start time
    const getStatus = (date: Date) => (date.getHours() >= 12 ? 'PM' : 'AM');

    const start = formatTimeWith12Hour(startDate);
    const end = formatTimeWith12Hour(endDate);
    const status = getStatus(startDate);

    return { startTime: start, endTime: end, status: status };
}