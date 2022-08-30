export default class AccountData {
    id: string | undefined;
    name: string | undefined;
    workoutProgram: | any;
    constructor(id: string | undefined , name: string | undefined , workoutProgram: { day1: { dayName: "rest"; }; day2: { dayName: "legs"; exrecises: [{ exreciseName: "squat"; sets: 5; reps: 10; }, { exreciseName: "deadlift"; sets: 5; reps: 10; }]; }; day3: "rest"; day4: {}; day5: "rest"; day6: {}; day7: "rest"; } | any) {
        this.id = id;
        this.name = name;
        this.workoutProgram = workoutProgram;
    }
    // {
    //     day1: { dayName: "rest"; };
    //     day2: {
    //         dayName: "legs";
    //         exrecises: [
    //             {
    //                 exreciseName: "squat";
    //                 sets: 5;
    //                 reps: 10;
    //             },
    //             {
    //                 exreciseName: "deadlift";
    //                 sets: 5;
    //                 reps: 10;
    //             }];
    //     };
    //     day3: "rest";
    //     day4: {};
    //     day5: "rest";
    //     day6: {};
    //     day7: "rest";
    // }
}