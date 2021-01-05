import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

const DataDsiplay = () => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((response) => {
        setState({
          data: response,
        });
      });
  }, []);
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
  console.log(state.data);
  return (
    <div style={{
        display:'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center'
    }}>
      <div>
        <Typography variant="h6">Gym</Typography>
        {state.data.map((data) => {
          return <Typography variant="body1"><a href={data.name} target="_blank">{data.name}</a></Typography>;
        })}
      </div>
      <div>
        <Typography variant="h6">Price</Typography>
        {state.data.map((data) => {
          return <Typography variant="body1">{data.price} AED</Typography>;
        })}
      </div>
     
    </div>
  );
};

export default DataDsiplay;
