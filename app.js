document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://sheetdb.io/api/v1/gxi1tq1dab3o5";
  const tableHeader = document.getElementById("table-header");
  const tableBody = document.getElementById("table-body");
  const fetchForm = document.getElementById("fetch-form");
  const finalData = document.getElementById("final-data");

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const displayData = (data) => {
    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

    if (data.length === 0) {
      tableBody.innerHTML =
        "<tr><td colspan='100%'>No data available</td></tr>";
      return;
    }

    // Create table headers
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    tableHeader.appendChild(headerRow);

    // Create table rows
    for (const item of data) {
      if (item.Members === "_") {
        Object.values(item).forEach((value) => {
          const li = document.createElement("li");
          li.textContent = value;
          finalData.appendChild(li);
        });
      } else {
        const row = document.createElement("tr");
        Object.values(item).forEach((value) => {
          const td = document.createElement("td");
          td.textContent = value;
          row.appendChild(td);
        });
        tableBody.appendChild(row);
      }
    }
  };

  // Form submission handler
  fetchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
  });

  // Fetch data initially
  fetchData();
});
