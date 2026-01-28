import { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [studentArray, setStudentArray] = useState([]);

  useEffect( () => {
     axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setStudentArray(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="justify-self-center mt-9">
      <h1 className="text-xl uppercase">Student List</h1>

      <table className="border-collapse border w-full mt-5">
        <thead>
          <tr>
            <th className="border px-4 py-2">NAME</th>
            <th className="border px-4 py-2">EMAIL</th>
            <th className="border px-4 py-2">PHONE</th>
          </tr>
        </thead>

        <tbody>
          {studentArray.map((s) => (
            <tr key={s.id}>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.email}</td>
              <td className="border px-4 py-2">{s.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
