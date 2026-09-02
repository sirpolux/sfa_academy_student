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
        post(route('student.result.fetch'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <GuestLayout>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-dark/5">
                <div className="flex flex-col bg-primary text-white md:flex-row">
                    {/* Left section */}
                    <div className="flex flex-col items-center justify-center bg-primary p-8 md:w-1/2">
                        <img
                            src={schoolIllustration}
                            alt="School"
                            className="mb-6 w-40 rounded-full bg-cream/10 p-2 ring-2 ring-cream/30"
                        />
                        <h1 className="font-display text-3xl font-bold">
                            Solid Foundation Academy
                        </h1>
                        <p className="mt-3 max-w-xs text-center text-cream/80">
                            Empowering learners with excellence and integrity.
                            Check your termly academic result by filling the
                            form beside.
                        </p>
                    </div>

                    {/* Right section: Form */}
                    <div className="flex-1 bg-cream p-6 md:p-10">
                        <h2 className="text-center font-display text-2xl font-bold text-dark">
                            Check Termly Result
                        </h2>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <InputError message={errors.fees} className="mt-2" />

                            <div>
                                <InputLabel htmlFor="student_class" value="Student Class" />
                                <select
                                    id="student_class"
                                    className="input-field"
                                    value={data.student_class}
                                    onChange={(e) => setData('student_class', e.target.value)}
                                    required
                                >
                                    <option value="">Select Class</option>
                                    {availableClasses.map((className) => (
                                        <option key={className} value={className}>
                                            {className.replace(/_/g, ' ').toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.student_class} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="student_id" value="Student Name" />
                                <select
                                    id="student_id"
                                    className="input-field"
                                    value={data.student_id}
                                    onChange={(e) => setData('student_id', e.target.value)}
                                    required
                                    disabled={!data.student_class}
                                >
                                    <option value="">Select Student</option>
                                    {filteredStudents.map((student) => (
                                        <option key={student.id} value={student.id}>
                                            {student.fullname}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.student_id} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="session" value="Session" />
                                <select
                                    id="session"
                                    className="input-field"
                                    value={data.session}
                                    onChange={(e) => setData('session', e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Select Session</option>
                                    {sessions.map((session) => (
                                        <option key={session} value={session}>{session}</option>
                                    ))}
                                </select>
                                <InputError message={errors.session} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="term" value="Term" />
                                <select
                                    id="term"
                                    className="input-field"
                                    value={data.term}
                                    onChange={(e) => setData('term', e.target.value)}
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
                                    className="input-field"
                                    placeholder="Enter your PIN"
                                    required
                                />
                                <InputError message={errors.pin} className="mt-2" />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-dark disabled:opacity-50"
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-5 w-5 animate-spin" />}
                                Fetch Result
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
