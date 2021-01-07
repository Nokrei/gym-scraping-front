// Import React and necesary hooks
import React, { useState, useEffect } from "react";

// Import Typography for fast styling
import Typography from "@material-ui/core/Typography";

// Import progress loader
import CircularProgress from '@material-ui/core/CircularProgress';

// Initiate component, initiate state variable for data storage
const DataDsiplay = () => {
  const [state, setState] = useState({
    data: [],
    success: false,
  });

  // Fetch data from the DB, store it in the state variable
  useEffect(() => {
    fetch(`http://localhost:3001/products`, {
      method: "GET",
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((response) => {
        setState({
          data: response,
          success: true,
        });
      });
  }, []);

  // Sort data by lowest price
  const compare = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };
  state.data.sort(compare);

  // Assign RegEx to variable for trimming the gym name
  const r = /:\/\/(.[^/]+)/;

  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        paddingTop: "2em",
      }}
    > {!state.success && <CircularProgress />}
      {state.success && (
        <div>
          <Typography variant="h6">Gyms listed by price</Typography>
          {state.data.map((data) => {
            return (
              <div
                className="gymName"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  margin: "auto",
                }}
              >
                <Typography variant="body1">
                  <a href={data.name} target="_blank" rel="noreferrer">
                    {data.name.match(r)[1]}
                  </a>
                </Typography>
                <Typography
                  style={{
                    paddingLeft: "1em",
                    justifySelf: "right",
                  }}
                  variant="body1"
                >
                  {data.price} AED
                </Typography>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DataDsiplay;
