/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { isLoading, error, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Menus>

    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>Cabins</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
          data={cabins}
          // // data={filteredCabins}
          // data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
    </Table>
  </Menus>
  );
}

export default CabinTable;
