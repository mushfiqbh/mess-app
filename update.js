document.addEventListener("DOMContentLoaded", () => {
  const readData = () => {
    fetch("https://api.apispreadsheets.com/data/f7ovfSSHaKKoBzZx/").then(
      (res) => {
        if (res.status === 200) {
          res
            .json()
            .then((data) => {
              const yourData = data;
            })
            .catch((err) => console.log(err));
        } else {
          console.log("Error");
        }
      }
    );
  };

  const updateOne = (field, value) => {
    if (field === "BoroBazar") {
      field = "Meals";
    } else if (field === "PrevRest") {
      field = "Deposits";
    } else if (field === "CurrentRest") {
      field = "Costs";
    }

    fetch("https://api.apispreadsheets.com/data/f7ovfSSHaKKoBzZx/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          [field]: value,
        },
        query: `select * from f7ovfSSHaKKoBzZx where Members='_'`,
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log("Success");
      } else {
        console.log(error);
      }
    });
  };

  const updateMany = (data, member) => {
    fetch("https://api.apispreadsheets.com/data/f7ovfSSHaKKoBzZx/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        query: `select * from f7ovfSSHaKKoBzZx where Members='${member}'`,
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log("Success");
      } else {
        console.log(error);
      }
    });
  };
});
