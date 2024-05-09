// "use client";

// import React, { useContext, useMemo } from "react";

// import { apidata } from "./data";
// import {
//   flexRender,
//   useReactTable,
//   getCoreRowModel,
//   createColumnHelper,
//   getSortedRowModel,
// } from "@tanstack/react-table";

// const UserTable = ({ data }) => {
//   const columnHelper = createColumnHelper();
//   const Columns = [
//     columnHelper.accessor("id", {
//       header: "Id",
//       cell: ({ getValue }) => {
//         return (
//           <>
//             <div className=" flex gap-2 ">{getValue()}</div>
//           </>
//         );
//       },
//     }),

//     columnHelper.accessor("name", {
//       header: "Name",
//       cell: ({ row, getValue }) => (
//         <>
//           <div
//             onClick={() => console.log("this is cliecked....")}
//             className=" cursor-pointer "
//           >
//             {getValue()}
//           </div>
//         </>
//       ),
//     }),
//     columnHelper.accessor("imei", {
//       header: "Imei",
//       enableSorting: false,
//       // cell: ({ row, getValue }) => <>{getValue()}</>,
//     }),
//   ];
//   return (
//     <>
//       <table className=" w-full h-auto bg-slate-300 mx-3 px-3 ">
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             {/* Add more column headings as needed */}
//           </tr>
//         </thead>
//         <tbody className=" bg-orange-400 ">
//           <div className=" bg-slate-200 px-4 w-full  ">
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.column1}</td>
//                 <td>{item.column2}</td>
//                 {/* Add more cells for other columns */}
//               </tr>
//             ))}
//           </div>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default UserTable;
