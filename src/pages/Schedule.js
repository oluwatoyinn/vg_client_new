import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Data from "../utils/Data";

const Schedule = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputs });
  };

  const { firstName, lastName, email, company, message, phoneNumber, service } =
    inputs;

  return (
    <div className="container mx-auto md:px-28">
      <h4 className="font-bold text-5xl uppercase text-center mt-10 mb-2 dark:text-gray-500">
        Schedule an Appointment
      </h4>
      <p className="text-center dark:text-gray-500">
        We are always available for you
      </p>
      <div className="flex flex-row mx-auto mt-6 gap-10 ml-4 mr-4">
        <div className="basis-1/2">
          <h3 className="uppercase w-full border-b-2 border-red-500 space-x-7 mb-4 text-2xl font-bold text-gray-500 dark:text-gray-500 ">
            Our Services
          </h3>
          <p className="text-base mb-6 text-gray-500 text-justify md:text-base">
            We have proven a multiplier effect from optimizing the sum of the
            parts, not just the individual pieces. We bring deep, handy
            expertise, but are known for our all-inclusive perception: we
            capture value across boundaries and between the silos of any
            organization.
          </p>
          <p className="text-base mb-6 text-gray-500 text-justify md:text-base">
            We have immense and extensive experiences:
          </p>
          <div>
            {Data.services.map((schedule) => {
              return (
                <div
                  key={schedule.id}
                  className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row pb-4"
                >
                  <div className="rounded-l-full bg-red-200 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                        {schedule.id}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 max-w-md">{schedule.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-red-300 p-5 mb-5 rounded-l-lg mx-auto basis-1/2 md:text-gray-500">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                  id="outlined-basic"
                  label="First Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  value={lastName}
                  onChange={handleInputChange}
                  name="lastName"
                  id="filled-basic"
                  variant="standard"
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  value={email}
                  onChange={handleInputChange}
                  name="email"
                  id="filled-basic"
                  variant="standard"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  value={phoneNumber}
                  onChange={handleInputChange}
                  name="phoneNumber"
                  id="filled-basic"
                  variant="standard"
                  label="Phone Number"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  value={company}
                  onChange={handleInputChange}
                  name="company"
                  id="standard-multiline-static"
                  label="Company Name "
                  multiline
                  rows={2}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Service Required
                  </InputLabel>
                  <Select
                    name="services"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={service}
                    label="Service Required"
                    onChange={handleInputChange}
                    variant="standard"
                  >
                    {Data.servicesMenu.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.value}>
                          {item.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12}>
                <TextField
                  value={message}
                  onChange={handleInputChange}
                  name="message"
                  id="standard-multiline-static"
                  label="Message "
                  multiline
                  rows={4}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: "15px" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
