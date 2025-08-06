import React from "react";
import "../../../css/TermlyResult.css"; // Move your CSS into this file

export default function TermlyResult({ resultData }) {
    const {
        studentData,
        studentCaEntries,
        studentBehaviour,
        subjectHighestScores,
        subjectDictionary,
        schoolConfig,
        resultRequestData,
        studentClassSummary
    } = resultData;

    const totalStudents =
        subjectHighestScores.length > 0
            ? subjectHighestScores[0].total_students
            : "-";

    const overallTotal = studentCaEntries.reduce((sum, subj) => sum + subj.total, 0);
    const average = (overallTotal / studentCaEntries.length).toFixed(2);

    // Helper: Get highest/lowest/average for a subject
    const getSubjectStats = (subject) => {
        const stats = subjectHighestScores.find((s) => s.subject === subject);
        return stats
            ? {
                highest: stats.highest_score ?? "-",
                lowest: stats.lowest_score ?? "-",
                total_students: stats.total_students ?? "-",
                average: stats.subj_ave ? stats.subj_ave.toFixed(1) : "-",
            }
            : { highest: "-", lowest: "-", average: "-" };
    };

    // Helper: Comment logic
    const getTeacherComment = () => {
        const avg = average;
        if (avg > 79) return "Good performance, keep it up";
        if (avg > 69) return "Great, you can do better";
        if (avg > 59) return "Very good student";
        if (avg > 49) return "Good, you can do better";
        return "Need to improve, you can do better";
    };

    const getAdminComment = () => {
        const avg = average;
        if (avg > 79) return "Indeed you are a star";
        if (avg > 69) return "An excellent performance, keep the flag flying";
        if (avg > 59) return "Very good student";
        if (avg > 49) return "An average performance, need to sit up";
        return "You can do better than this, if only you are willing to work hard";
    };

    return (
        <div className="container w-auto">
            {/* Term Title */}
            <div id="cTerm" style={{ fontSize: "16px" }}>
                Term:{" "}
                <span style={{ textTransform: "capitalize" }}>
                    {resultRequestData.term}
                </span>
            </div>

            {/* School Header */}
            <div id="schooldata">
                <table>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: 900, fontSize: "24px" }}>
                                SOLID FOUNDATION ACADEMY, AKWANGA
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 900, fontSize: "18px" }}>
                                DAYCARE, KINDERGARTEN, NURSERY, PRIMARY, AND SECONDARY
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    fontWeight: 900,
                                    fontSize: "21px",
                                    textAlign: "left",
                                    paddingLeft: "9cm",
                                }}
                            >
                                TERMLY ACADEMIC REPORT
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Biodata */}
            <div className="text-sm font-semibold" id="biodata">
                <table style={{ width: "70%" }}>
                    <tbody>
                        <tr  className="text-[1rem]">
                            <td className="font-bold">Name:</td>
                            <td colSpan="3">{studentData.fullname}</td>
                        </tr>
                        <tr>
                            <td className="font-bold">Admission No:</td>
                            <td>{studentData.admission_no}</td>
                            <td>House:</td>
                            <td>{studentData.student_house}</td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td style={{ textTransform: "uppercase" }}>
                                {studentData.current_class}
                            </td>
                            <td>Year:</td>
                            <td>{schoolConfig.current_session}</td>
                        </tr>
                        <tr>
                            <td>No in Class:</td>
                            <td>{totalStudents}</td>
                            <td className="text-[1rem]">Position:</td>
                            <td className="text-[1rem]">{studentClassSummary.position}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{studentData.gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Passport */}
            <div id="studentPassport">
                <img
                    src="/img/sample_passport.jpg"
                    alt="Student"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            {/* School Logo */}
            <div id="schoolLogo">
                <img src="/img/logo_small.png" alt="School Logo" />
            </div>

            {/* Term Details */}
            <div id="termDetails">
                <table>
                    <tbody>
                        <tr>
                            <td>Times Present:</td>
                            <td>{studentBehaviour.times_present}</td>
                        </tr>
                        <tr>
                            <td>Times Absent:</td>
                            <td>{studentBehaviour.times_absent}</td>
                        </tr>
                        <tr>
                            <td>Cause of Absence:</td>
                            <td>{studentBehaviour.cause_of_absence || "-"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Result Table */}
            <div id="result">
                <table className="tableFomat">
                    <thead>
                        <tr>
                            <td>S/N</td>
                            <td style={{ width: "230px", fontWeight: 700 }}>SUBJECTS</td>
                            <th className="rotate"><div><span>1st Assignment</span></div></th>
                            <th className="rotate"><div><span>2nd Assignment</span></div></th>
                            <th className="rotate"><div><span>1st Test</span></div></th>
                            <th className="rotate"><div><span>2nd Test</span></div></th>
                            <th className="rotate"><div><span>Exam Score</span></div></th>
                            <th className="rotate"><div><span>Total Score</span></div></th>
                            <th className="rotate"><div><span>Grade</span></div></th>
                            <th className="rotate"><div><span>Subject Position</span></div></th>
                            <th className="rotate"><div><span>Highest Score</span></div></th>
                            <th className="rotate"><div><span>Lowest Score</span></div></th>
                            <th className="rotate"><div><span>Total Students</span></div></th>
                            <th className="rotate"><div><span>Class Average</span></div></th>
                            <th>Remarks</th>
                            <th className="rotate"><div><span>Teacher Initials</span></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentCaEntries.map((subj, idx) => {

                            const stats = getSubjectStats(subj.subject);
                            return (
                                subj.total > 0 &&
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{subjectDictionary[subj.subject]}</td>
                                    <td>{subj.first_ca || "-"}</td>
                                    <td>{subj.second_ca || "-"}</td>
                                    <td>{subj.first_test || "-"}</td>
                                    <td>{subj.second_test || "-"}</td>
                                    <td>{subj.exam || "-"}</td>
                                    <td>{subj.total || "-"}</td>
                                    <td>{subj.grade || "-"}</td>
                                    <td>{subj.position || "-"}</td>
                                    <td>{stats.highest}</td>
                                    <td>{stats.lowest}</td>
                                    <td>{stats.total_students}</td>
                                    <td>{stats.average}</td>
                                    <td>{subj.comment || "-"}</td>
                                    <td>-</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td colSpan="5" style={{ textAlign: "right", fontWeight: 700 }}>
                                OVERALL TOTAL
                            </td>
                            <td style={{ fontWeight: 700 }}>{overallTotal}</td>
                            <td style={{ fontWeight: 700 }}>AV</td>
                            <td colSpan="3" style={{ fontWeight: 700 }}>{average}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Skills */}
            <div id="skills">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="6" className="text-sm font-semibold">STUDENT PSYCHOMOTOR ASSESSMENT</td>
                        </tr>
                        <tr>
                            <th>PSYCHOMOTOR ITEM</th>
                            {[5, 4, 3, 2, 1].map((score) => (
                                <th key={score}>{score}</th>
                            ))}
                        </tr>
                        {Object.keys(studentBehaviour)
                            .filter(
                                (key) =>
                                    typeof studentBehaviour[key] === "number" && key !== "id"
                            )
                            .map((itemKey, idx) => (
                                (!(itemKey == "times_present" || itemKey =="times_absent"))&&
                                <tr key={idx}>
                                    <td className="uppercase text-[0.80rem]">{itemKey.replace(/_/g, " ")}</td>
                                    {[5, 4, 3, 2, 1].map((score) => (
                                        <td key={score}>
                                            <input
                                            className="text-[0.70rem]"
                                                type="radio"
                                                checked={studentBehaviour[itemKey] === score}
                                                readOnly
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Comments */}
            <div id="comment">
                <table>
                    <tbody>
                        <tr className="border-b border-gray-800">
                            <td>Class Teacher Comment:</td>
                            <td>{getTeacherComment()}</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td>Administrative Comment:</td>
                            <td>{getAdminComment()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Result Key */}
            <div id="resultKey">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center", fontWeight: 700 }}>
                                RESULT GRADING
                            </td>
                        </tr>
                        <tr>
                            <td>80 - 100</td>
                            <td>A</td>
                            <td>EXCELLENT</td>
                        </tr>
                        <tr>
                            <td>70 - 79</td>
                            <td>B</td>
                            <td>V.GOOD</td>
                        </tr>
                        <tr>
                            <td>60 - 69</td>
                            <td>C</td>
                            <td>GOOD</td>
                        </tr>
                        <tr>
                            <td>50-59</td>
                            <td>D</td>
                            <td>PASS</td>

                        </tr>
                        <tr>
                            <td>40-49</td>
                            <td>E</td>
                            <td>FAIR</td>

                        </tr>
                        <tr>
                            <td>0-39</td>
                            <td>F</td>
                            <td>FAIL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Keys */}
            <div id="keys">
                <table className="table-auto max-w-64">
                    <tbody>
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }}>
                                KEYS OF RATINGS
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>EXCELLENT</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>V.GOOD</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>GOOD</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>FAIR</td>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td>POOR</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
