import React, { useEffect, useState } from "react";
import AccountData from "../Classes/accountData";


function Main() {
    const [accountData, setAccountData] = useState<AccountData | null>(null);

    function createTable() {
        if (accountData == null) {
            return <></>;
        }

        const table = (
            <div>
                {accountData!.workoutProgram.map((workout: { dayNumber: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; dayName: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; exrecises: { exreciseName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; sets: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; reps: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }[]; }) => {
                    return (
                        <div>
                            <h2>Day {workout.dayNumber}: {workout.dayName}</h2>
                            <table>
                                <tr>
                                    <th>Exrecise</th>
                                    <th>Sets</th>
                                    <th>Reps</th>
                                    <th>Explanation Link</th>
                                </tr>
                                {workout.exrecises.map((exrecise: { exreciseName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; sets: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; reps: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                                    <tr>
                                        <td>{exrecise.exreciseName}</td>
                                        <td>{exrecise.sets}</td>
                                        <td>{exrecise.reps}</td>
                                        <td>{exrecise.reps}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    )
                })}
            </div>
        )
        return table;
    }
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            // let data:JSON = await (await fetch('https://yourapi.com')).json;
            const data: AccountData = {
                id: "",
                name: "",
                workoutProgram: [
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    },
                    {
                        dayNumber: 2,
                        dayName: "legs",
                        exrecises: [
                            {
                                exreciseName: "squat",
                                sets: 5,
                                reps: 10
                            },
                            {
                                exreciseName: "deadlift",
                                sets: 5,
                                reps: 10
                            }]
                    },
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    },
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    },
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    },
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    },
                    {
                        dayNumber: 1,
                        dayName: "rest",
                        exrecises: []
                    }
                ]

            };
            setAccountData(data);
        }
        // call the function
        fetchData().catch(console.error);
    }, []);

    return (
        <div className="Main">
            {JSON.stringify(accountData)}
            {createTable()}
        </div>
    )
}

export default Main;
