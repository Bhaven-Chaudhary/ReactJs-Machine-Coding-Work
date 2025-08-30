import { useEffect, useState } from "react";

export default function DirectoryTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    async function fetchTableData() {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw response;

        let data = await response.json();
        setTableData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTableData();
  }, []);

  //To filter table data based on search change
  useEffect(() => {
    if (searchValue.trim().length === 0) {
      setFilteredData(tableData);
      return;
    }

    let tempSearchValue = searchValue.toLowerCase();

    //filter based on name or email
    let tempData = tableData.filter((item) => {
      return (
        item.name.toLowerCase().includes(tempSearchValue) ||
        item.email.toLowerCase().includes(tempSearchValue)
      );
    });

    setFilteredData(tempData);
  }, [searchValue, tableData]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div>
        <span>Table</span>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {tableData.length > 0 && (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Name </th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.company.name}</td>
                    <td>{item.website}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
