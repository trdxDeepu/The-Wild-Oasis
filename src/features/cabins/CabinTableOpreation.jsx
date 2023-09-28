import TableOpreations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOpreation = () => {
  return (
    <TableOpreations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price(low first)" },
          { value: "regularPrice-desc", label: "Sort by Price(High first)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by Max Capacity(Low first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by Max Capacity(High first)",
          },
        ]}
      />
    </TableOpreations>
  );
};

export default CabinTableOpreation;
