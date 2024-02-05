"use client";
import { RootState } from "@/redux/store";
import { Badge, Card, Table, Text } from "@radix-ui/themes";
import React from "react";
const { format } = require("number-currency-format");
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";

function DataTable() {
  const data = useSelector((state: RootState) => state.data);

  return (
    <Table.Root
      className="m-2 mx-auto"
      style={{ maxWidth: "800px" }}
      variant="surface"
    >
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell width={4}>Type</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="text-end">
            Amount
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.data.map((d) => {
          let isIncome = d.type == "+";
          return (
            <Table.Row>
              <Table.RowHeaderCell>
                <Badge size="2" color={isIncome ? "green" : "red"}>
                  {isIncome ? "In" : "Ex"}
                </Badge>
              </Table.RowHeaderCell>
              <Table.Cell className="p-3">{d.description}</Table.Cell>
              <Table.Cell className={`text-end fs-5 p-3`}>
                {format(d.amount).toString().split(".")[0]}{" "}
                {isIncome ? (
                  <AiFillPlusSquare className="mb-1" size={24} color="green" />
                ) : (
                  <AiFillMinusSquare color="red" className="mb-1" size={24} />
                )}
              </Table.Cell>
            </Table.Row>
          );
        })}
        {data.balance == 0 ? (
          <Table.Row>
            <Table.RowHeaderCell></Table.RowHeaderCell>
            <Table.Cell className="p-3 fs-4">
              <Card variant="surface">
                <Text as="div" size="2" weight="bold">
                  No records yet!
                </Text>
                <Text as="div" color="gray" size="2">
                  Start adding records
                </Text>
              </Card>
            </Table.Cell>
            <Table.Cell className="text-end fs-5 p-3"></Table.Cell>
          </Table.Row>
        ) : (
          <Table.Row className="bg-light">
            <Table.RowHeaderCell></Table.RowHeaderCell>
            <Table.Cell className="p-3 fs-4">Balance</Table.Cell>
            <Table.Cell className="text-end fs-5 p-3">
              {data.balance}{" "}
              <AiFillMinusSquare className="invisible" size={24} />
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
}

export default DataTable;
