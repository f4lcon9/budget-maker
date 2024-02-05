import { Button } from "@radix-ui/themes";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addNewData } from "@/redux/slice";
import toast from "react-hot-toast";


function AddData() {
  const dispatch = useDispatch()

  const [loading, setloading] = useState(false);
  const [type, settype] = useState("+");
  const [desc, setdesc] = useState("");
  const [amount, setamount] = useState("");
  const addData = async (e: React.FormEvent<HTMLFormElement>) => {
    setloading(true)
    e.preventDefault();
    const data = {
      type,
      description: desc,
      amount,
    };
    const res = await fetch("/api", { method: "POST", body: JSON.stringify(data) });
    const resData = await res.json();
    if(res.ok){
      toast.success("Record added!")
      dispatch(addNewData(resData))
      setamount("")
      setdesc("")
    }else{
      toast.error("Something went wrong!")
    }
    setloading(false)
  };
  return (
    <form onSubmit={addData} className="d-lg-flex mt-5 m-auto gap-2">
      <select
        onChange={(e) => settype(e.target.value)}
        className="form-select i-res mb-2"
        aria-label="Default select example"
      >
        <option value="+">Income</option>
        <option value="-">Expense</option>
      </select>
      <input
        onChange={(e) => setdesc(e.target.value)}
        value={desc}
        type="text"
        placeholder="Description"
        className="form-control mb-2"
      />
      <input
        onChange={(e) => setamount(e.target.value)}
        value={amount}
        type="number"
        placeholder="Amount"
        className="form-control i-res mb-2"
      />
      <Button disabled={loading} type="submit" size={"3"}>
        {loading ? <div className="spinner-border spinner-border-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <FaCirclePlus size="20" /> }
      
         Add
      </Button>
    </form>
  );
}

export default AddData;
