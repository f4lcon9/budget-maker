"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/layout/Header";
import DataTable from "@/components/DataTable";
import AddData from "@/components/AddData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { load } from "@/redux/slice";

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.data)
  useEffect(()=>{
    const getData = async () => {
      const res = await fetch("/api")
      const data = await res.json()
      dispatch(load(data))
    }
    getData()
  },[])
  console.log(data)
  return (
    <main style={{maxWidth:'800px'}} className="mx-auto">
      <DataTable/>
      <AddData/>
    </main>
  );
}
