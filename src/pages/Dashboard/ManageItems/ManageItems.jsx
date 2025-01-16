import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menus,,refetch] = useMenu();
  const axiosSecure = useAxiosSecure()

  const handleDelete = (item)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data)
            if(res.data.deletedCount>0){
                // refect 
                refetch()
                Swal.fire({
                    position:'top-end',
                    title:`${item.name} is deleted successfully`,
                    timer:1500,
                    icon:'success'
                })
            }
        }
      });
  }
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((item,idx) => (
                <tr key={item._id}>
                  <th>{idx+1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}><button  className="btn btn-ghost"><FaEdit className="text-yellow-600"></FaEdit></button></Link>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost "><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
