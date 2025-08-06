import { useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import schoolIllustration from '../../../../public/img/logo_small.png';

export default function TermlyResultIndex({ availableClasses, studentList, sessions }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        student_class: '',
        student_id: '',
        session: '',
        term: '',
        pin: '',
        resultType: 'termly',
    });

    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        const filtered = studentList.filter(
            (student) => student.current_class === data.student_class
        );
        setFilteredStudents(filtered);
        setData('student_id', '');
    }, [data.student_class]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = post(route('student.result.fetch'), {
            onSuccess: () => {
                reset();
                // window.open(url, '_blank');
            },
        });

    };

    return (
        <GuestLayout>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto mt-10 ">
                {/* Left section */}
                <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-center items-center">
                    <img src={schoolIllustration} alt="School" className="w-48 mb-6" />
                    <h1 className="text-3xl font-bold mb-2">Solid Foundation Academy</h1>
                    <p className="text-center max-w-xs text-blue-100">Empowering learners with excellence and integrity. Check your termly academic result by filling the form beside.</p>
                </div>

                {/* Right section: Form */}
                <div className="md:w-1/2 p-6 md:p-10">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Check Termly Result</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <InputError message={errors.fees} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="student_class" value="Student Class" />
                            <select
                                id="student_class"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                value={data.student_class}
                                onChange={(e) => setData('student_class', e.target.value)}
                                required
                            >
                                <option value="">Select Class</option>
                                {availableClasses.map((className) => (
                                    <option key={className} value={className}>{className.replace(/_/g, ' ').toUpperCase()}</option>
                                ))}
                            </select>
                            <InputError message={errors.student_class} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="student_id" value="Student Name" />
                            <select
                                id="student_id"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                value={data.student_id}
                                onChange={(e) => setData('student_id', e.target.value)}
                                required
                                disabled={!data.student_class}
                            >
                                <option value="">Select Student</option>
                                {filteredStudents.map((student) => (
                                    <option key={student.id} value={student.id}>{student.fullname}</option>
                                ))}
                            </select>
                            <InputError message={errors.student_id} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="session" value="Session" />
                            <select
                                id="session"
                                value={data.session}
                                onChange={(e) => setData('session', e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                required
                            >
                                <option value="" disabled aria-readonly>Select Session</option>
                                {
                                    sessions.map((session, index) =>
                                        <option value={session}>{session}</option>
                                    )
                                }
                            </select>
                            <InputError message={errors.session} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="term" value="Term" />
                            <select
                                id="term"
                                value={data.term}
                                onChange={(e) => setData('term', e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                required
                            >
                                <option value="">Select Term</option>
                                <option value="first">First</option>
                                <option value="second">Second</option>
                                <option value="third">Third</option>
                            </select>
                            <InputError message={errors.term} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="pin" value="Result PIN" />
                            <TextInput
                                id="pin"
                                name="pin"
                                value={data.pin}
                                onChange={(e) => setData('pin', e.target.value)}
                                className="mt-1 block w-full"
                                placeholder="Enter your PIN"
                                required
                            />
                            <InputError message={errors.pin} className="mt-2" />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 flex justify-center items-center gap-2"
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="animate-spin w-5 h-5" />}
                                Fetch Result
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
