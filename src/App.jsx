import { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "Abebe Kebede",
    course: "Computer Science",
    year: "Year 1",
    email: "abebe@example.com",
  },
  {
    id: 2,
    name: "Sara Alemu",
    course: "Software Engineering",
    year: "Year 2",
    email: "sara@example.com",
  },
  {
    id: 3,
    name: "Dawit Tesfaye",
    course: "Information Technology",
    year: "Year 3",
    email: "dawit@example.com",
  },
];

const courses = [
  "Computer Science",
  "Software Engineering",
  "Information Technology",
  "Data Science",
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "Computer Science",
    year: "Year 1",
  });

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase());

    const matchesCourse =
      selectedCourse === "All Courses" || student.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleAddStudent(event) {
    event.preventDefault();

    const newStudent = {
      ...formData,
      id: Date.now(),
    };

    setStudents((previous) => [...previous, newStudent]);

    setFormData({
      name: "",
      email: "",
      course: "Computer Science",
      year: "Year 1",
    });

    setShowForm(false);
  }

  function handleDeleteStudent(id) {
    setStudents((previous) => previous.filter((student) => student.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 md:flex">
      {/* Sidebar */}
      <aside className="w-full bg-slate-900 p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
            C
          </div>

          <div>
            <h1 className="text-2xl font-bold">CampusFlow</h1>
            <p className="text-xs text-slate-400">Student Portal</p>
          </div>
        </div>

        <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500">
          MAIN MENU
        </p>

        <nav className="space-y-2">
          <div className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 font-medium">
            <span>▦</span>
            Dashboard
          </div>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300">
            <span>♙</span>
            Students
          </div>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300">
            <span>▤</span>
            Courses
          </div>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300">
            <span>⚙</span>
            Settings
          </div>
        </nav>

        <div className="mt-10 rounded-2xl border border-slate-700 p-4">
          <p className="font-semibold">Student Management</p>
          <p className="mt-1 text-sm text-slate-400">React + Tailwind CSS</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
        {/* Top Bar */}
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Overview
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Student Dashboard
            </h2>

            <p className="mt-2 text-slate-500">
              Manage your students and courses in one place.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              A
            </div>

            <div>
              <p className="font-semibold">Administrator</p>
              <p className="text-sm text-slate-500">Admin account</p>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                Total Students
              </span>

              <span className="rounded-xl bg-blue-100 p-3 text-xl text-blue-700">
                ♙
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">
              {students.length}
            </p>

            <p className="mt-2 text-sm text-slate-500">Registered students</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                Total Courses
              </span>

              <span className="rounded-xl bg-purple-100 p-3 text-xl text-purple-700">
                ▤
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">
              {courses.length}
            </p>

            <p className="mt-2 text-sm text-slate-500">Available programs</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:col-span-2 xl:col-span-1">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                Study Years
              </span>

              <span className="rounded-xl bg-green-100 p-3 text-xl text-green-700">
                ✓
              </span>
            </div>

            <p className="text-3xl font-bold text-slate-900">4</p>

            <p className="mt-2 text-sm text-slate-500">Year 1 through Year 4</p>
          </div>
        </section>

        {/* Student Table */}
        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Students</h3>

              <p className="mt-1 text-sm text-slate-500">
                Add, search, filter, and remove students.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {showForm ? "Cancel" : "+ Add Student"}
            </button>
          </div>

          {/* Add Student Form */}
          {showForm && (
            <form
              onSubmit={handleAddStudent}
              className="mb-7 rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h4 className="mb-4 text-lg font-bold text-slate-900">
                Add a New Student
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Save Student
              </button>
            </form>
          )}

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by student name or email..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <select
              value={selectedCourse}
              onChange={(event) => setSelectedCourse(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>All Courses</option>

              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Responsive Student List */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-4 py-4 font-semibold">Student</th>
                  <th className="px-4 py-4 font-semibold">Course</th>
                  <th className="px-4 py-4 font-semibold">Year</th>
                  <th className="px-4 py-4 font-semibold">Email</th>
                  <th className="px-4 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                          {student.name.charAt(0).toUpperCase()}
                        </div>

                        <span className="font-semibold text-slate-800">
                          {student.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {student.course}
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {student.year}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {student.email}
                    </td>

                    <td className="px-4 py-4">
                      <button
                        type="button"
                        onClick={() => handleDeleteStudent(student.id)}
                        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-10 text-center text-slate-500"
                    >
                      No students found. Try another search or add a student.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-sm text-slate-500">
            Showing {filteredStudents.length} of {students.length} students
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          © 2026 CampusFlow Student Management System
        </footer>
      </main>
    </div>
  );
}

export default App;
