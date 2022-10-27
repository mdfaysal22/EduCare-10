import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authUser } from "../../../../../Contexts/AuthContexts";
import swal from 'sweetalert';

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(authUser);
  const { name, id, price } = data;
  return (
    <div className="hero h-screen">
      <div className="w-3/5 mx-auto py-10 border-2 border-slate-600 shadow-md">
        <h2 className="text-3xl text-center">{name}</h2>
        <div className="form-control my-2 mx-auto w-1/2">
          <label htmlFor="bankAccount">Full Name</label>
          <input
            readOnly
            className="border-2 p-2 rounded-md border-slate-600"
            type="text"
            name="bankAccount"
            value={user?.displayName}
          />
        </div>
        <div className="form-control my-2 mx-auto w-1/2">
          <label htmlFor="bankAccount">Email</label>
          <input
            readOnly
            className="border-2 p-2 rounded-md border-slate-600"
            type="text"
            name="bankAccount"
            value={user?.email ? user?.email : "Github User"}
          />
        </div>
        <div className="form-control my-2 mx-auto w-1/2">
          <label htmlFor="bankAccount">Bank Account Number</label>
          <input
            className="border-2 p-2 rounded-md border-slate-600"
            type="text"
            name="bankAccount"
            placeholder="Account Number"
          />
        </div>
        <div className="form-control my-2 mx-auto w-1/2">
          <label htmlFor="bankAccount">Course Price</label>
          <input
            readOnly
            className="border-2 p-2 rounded-md border-slate-600"
            type="text"
            name="bankAccount"
            value={price}
          />
        </div>

        <div className="text-center flex gap-4 justify-center my-4">
          <Link onClick={() => {swal("Purchase Successfully", "success")}} to={'/courses'}  className="btn">Confirm</Link>
          <Link to={`/coursedetails/${id}`} className="btn">
            Purchase Later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
