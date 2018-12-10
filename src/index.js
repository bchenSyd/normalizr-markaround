import "./styles.css";

import { schema, normalize } from "normalizr";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  <button id="btn">click me</button>
  <div id="output"/>
</div>
`;

const button = document.querySelector("#btn");

const address = new schema.Entity("address");
const addressesSchema = new schema.Array(address);
const appointmentSchema = new schema.Entity("appointments", {
  addresses: addressesSchema
});
button.onclick = () => {
  const data = { appointment: { id: 21, addresses: null } };
  // solution 1:
  //const result = normalize(data, new schema.Object( {appointment: appointmentSchema} ));

  // solution 2:
  const result = normalize(data.appointment, appointmentSchema);
  console.log(result);
};
