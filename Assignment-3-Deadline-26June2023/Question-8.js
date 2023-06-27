console.log(`
Question-8 : Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
`);


/// Programmm....

function canAttendMeetings(intervals) {
    // Sort the intervals based on start time
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        const previousEnd = intervals[i - 1][1];
        const currentStart = intervals[i][0];

        if (currentStart <= previousEnd) {
            // Time conflict, person cannot attend all meetings
            return false;
        }
    }

    // No time conflicts, person can attend all meetings
    return true;
}


const intervals = [
    [0, 30],
    [5, 10],
    [15, 20]
];
const canAttendAllMeetings = canAttendMeetings(intervals);
console.log("Output : ", canAttendAllMeetings);