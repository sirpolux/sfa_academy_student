export default function AnnualResult({ resultData }) {
    const {
        sessionRecord,
        subjectDictionary,
        annualStudentSummary,
        studentData,
        schoolConfig
    } = resultData;

    const [grade, remark] = JSON.parse(annualStudentSummary.grade);
    const schoolLogo = "/img/logo_small.png";
    const studentPassport = studentData.passport || "/img/default_passport.png";

    return (
        <div className="max-w-5xl mx-auto bg-white shadow rounded-md p-4 text-xs relative">
            {/* Watermark */}
            <div
                className="absolute inset-0 opacity-5 flex justify-center items-center pointer-events-none"
                style={{ zIndex: 0 }}
            >
                <img src={schoolLogo} alt="School Logo" className="w-72" />
            </div>

            {/* School Name Row */}
            <div className="text-center font-bold text-lg uppercase z-10 relative">
                Solid Foundation Academy, Akwanga
                <p className="font-normal text-gray-700 text-sm">
                    Daycare, Kindergarten, Nursery, Primary & Secondary
                </p>
                <p className="text-sm mt-1">Annual Academic Report</p>
            </div>

            {/* Student Info in One Row */}
            <div className="flex justify-between items-center border border-gray-300 rounded-md p-2 mt-1 z-10 relative">
                <img
                    src={studentPassport}
                    alt="Student Passport"
                    className="w-16 h-20 object-cover border border-gray-300 rounded-sm"
                />
                <table className="text-xs border-collapse w-full ml-2">
                    <tbody>
                        <tr>
                            <td className="px-1 py-0.5 font-medium">Name:</td>
                            <td className="px-1 py-0.5">{studentData.fullname}</td>
                            <td className="px-1 py-0.5 font-medium">Admission No:</td>
                            <td className="px-1 py-0.5">{studentData.admission_no}</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-0.5 font-medium">Class:</td>
                            <td className="px-1 py-0.5">{studentData.current_class.replace(/_/g, ' ').toUpperCase()}</td>
                            <td className="px-1 py-0.5 font-medium">Gender:</td>
                            <td className="px-1 py-0.5">{studentData.gender}</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-0.5 font-medium">House:</td>
                            <td className="px-1 py-0.5">{studentData.student_house}</td>
                            <td className="px-1 py-0.5 font-medium">Session:</td>
                            <td className="px-1 py-0.5">{schoolConfig.current_session.replace(/_/g, '/')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Annual Summary Row */}
            <div className="border border-gray-300 rounded-md p-2 mt-1 bg-gray-50 z-10 relative">
                <h2 className="font-bold text-center text-sm mb-1">Annual Summary</h2>
                <table className="w-full text-xs border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="border px-1 py-0.5">First</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.first}</td>
                            <td className="border px-1 py-0.5">Second</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.second}</td>
                            <td className="border px-1 py-0.5">Third</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.third}</td>
                        </tr>
                        <tr>
                            <td className="border px-1 py-0.5">Total</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.total.toFixed(2)}</td>
                            <td className="border px-1 py-0.5">Average</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.average.toFixed(2)}</td>
                            <td className="border px-1 py-0.5">Grade</td>
                            <td className="border px-1 py-0.5">{grade}</td>
                        </tr>
                        <tr>
                            <td className="border px-1 py-0.5">Remark</td>
                            <td colSpan={3} className="border px-1 py-0.5">{remark}</td>
                            <td className="border px-1 py-0.5">Position</td>
                            <td className="border px-1 py-0.5">{annualStudentSummary.position}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Subject Scores Table */}
            <div className="relative overflow-x-auto mt-1 z-10">
                <table className="min-w-full border border-gray-300 text-xs">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-1 py-0.5">S/N</th>
                            <th className="border px-1 py-0.5 text-left">Subject</th>
                            <th className="border px-1 py-0.5">First</th>
                            <th className="border px-1 py-0.5">Second</th>
                            <th className="border px-1 py-0.5">Third</th>
                            <th className="border px-1 py-0.5">Total</th>
                            <th className="border px-1 py-0.5">Avg</th>
                            <th className="border px-1 py-0.5">Grade</th>
                            <th className="border px-1 py-0.5">Remark</th>
                            <th className="border px-1 py-0.5">Pos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessionRecord.map((record, index) => (
                            <tr key={record.subject} className="hover:bg-gray-50">
                                <td className="border px-1 py-0.5 text-center">{index + 1}</td>
                                <td className="border px-1 py-0.5">{subjectDictionary[record.subject]}</td>
                                <td className="border px-1 py-0.5 text-center">{record.first ?? '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.second ?? '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.third ?? '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.total || '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.average ? record.average.toFixed(1) : '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.grade ?? '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.remark ?? '-'}</td>
                                <td className="border px-1 py-0.5 text-center">{record.position ?? '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Remarks */}
            <div className="grid grid-cols-2 gap-2 mt-1 z-10">
                <div>
                    <h3 className="font-bold mb-1 text-xs">Teacher's Remark:</h3>
                    <div className="border border-gray-300 h-8 p-1 rounded-sm bg-gray-50"></div>
                </div>
                <div>
                    <h3 className="font-bold mb-1 text-xs">Headmaster's Remark:</h3>
                    <div className="border border-gray-300 h-8 p-1 rounded-sm bg-gray-50"></div>
                </div>
            </div>
        </div>
    );
}
